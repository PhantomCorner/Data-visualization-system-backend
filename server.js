// server.js
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const AWS = require("aws-sdk");
const { query } = require("./model.js");
const { tokens } = require("./tokens.js");
const PREFIX = "/vue-admin-template/api";
const XLSX = require("xlsx");
const e = require("express");
app.use(cors());
app.use(express.json());

/* AWS S3 */
let s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  accessKeyId: require("./ak.js").ak,
  secretAccessKey: require("./ak.js").ask,
  region: "ap-southeast-2",
});
/* Login */
app.post(`${PREFIX}/user/login`, async (req, res) => {
  const body = req.body;
  let token;
  const result = await query("SELECT * FROM user WHERE username = ?", [
    body.username,
  ]);
  const user = result[0];
  if (!user) {
    return res.send({ code: 422, message: "User not found!" });
  }
  const isPasswordValid = await bcrypt.compare(body.password, user.password);
  if (!isPasswordValid) {
    return res.status(422).send({ message: "Invalid password" });
  }
  if (body.username === "testUser1") {
    token = tokens["admin"];
    res.send({
      code: 20000,
      data: token,
    });
  } else {
    token = tokens["editor"];
    res.send({
      code: 20000,
      data: token,
    });
  }
});

/* User info */
app.get(`${PREFIX}/user/info`, async (req, res) => {
  if (req.query.token === "admin-token") {
    res.send({
      code: 20000,
      data: {
        roles: ["admin"],
        introduction: "I am a super administrator",
        avatar:
          "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-souvenirpixels-1619317.jpg&fm=jpg",
        name: "testUser1",
      },
    });
  } else {
    res.send({
      code: 20000,
      data: {
        roles: ["editor"],
        introduction: "I am a editor",
        avatar:
          "https://images.unsplash.com/photo-1604998103924-89e012e5265a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuc2NhcGV8ZW58MHx8MHx8fDA%3D",
        name: "testUser2",
      },
    });
  }
});

/* Logout  */
app.post(`${PREFIX}/user/logout`, async (req, res) => {
  res.send({
    code: 20000,
    data: "success",
  });
});

/* Register  */
app.post(`${PREFIX}/user/register`, async (req, res) => {
  const body = req.body;
  try {
    const users = await query(
      "SELECT COUNT(*) AS count FROM user WHERE username = ?",
      [body.username]
    );
    if (users[0].count > 0) {
      return res.send({
        code: 422,
        message: "Duplicate User!",
      });
    } else {
      await query("INSERT INTO user (username, password) VALUES (?, ?)", [
        body.username,
        await bcrypt.hash(body.password, 10),
      ]);
      res.send({
        code: 20000,
        message: "Register Success",
      });
    }
  } catch (error) {
    console.error("Database operation failed:", error);
    res.send({
      code: 500,
      message: "Database operation failed",
    });
  }
});
/* Get all datasource file  */
app.get(`${PREFIX}/dataSource/allFile`, async (req, res) => {
  var params = {
    Bucket: "",
    Delimiter: "/",
    Prefix: "",
  };
  req.query.token == "admin-token"
    ? (params.Bucket = "compx576-user1-bucket")
    : (params.Bucket = "compx576-user2-bucket");
  s3.listObjects(params, function (err, data) {
    if (err) {
      res.send({
        code: 422,
        message: err.message,
      });
    } else {
      res.send({
        code: 20000,
        data: data.Contents,
      });
    }
  });
});
/* Get file content */
app.post(`${PREFIX}/dataSource/getFile`, async (req, res) => {
  let params = { Bucket: "", Key: `${req.body.key}` };
  req.body.token == "admin-token"
    ? (params.Bucket = "compx576-user1-bucket")
    : (params.Bucket = "compx576-user2-bucket");
  s3.getObject(params, function (err, data) {
    if (err) {
      res.send({
        code: 422,
        message: err.message,
      });
    } else {
      const workbook = XLSX.read(data.Body, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      res.send({
        code: 20000,
        data: jsonData,
        total: jsonData.length,
      });
    }
  });
});
/* Get chart preview image */
app.get(`${PREFIX}/chartGen/chartPreview/all`, async (req, res) => {
  let all = require("./chartIMG.js").chartIMG;
  res.send({
    code: 20000,
    data: all,
  });
});

/* Get chart option  */
app.post(`${PREFIX}/chartGen/chartOption`, async (req, res) => {
  chart = req.body.chart;
  let option = require("./chartOption.js").chartOption[chart];
  res.send({
    code: 20000,
    data: option,
  });
});

/* Receive and store chart detail */
app.post(`${PREFIX}/chartGen/uploadChart`, async (req, res) => {
  let chartOption = req.body.chartOption;
  let chateName = req.body.chartName;
  let token = req.body.token;
  let userid;
  if (token == "admin-token") {
    userid = 3;
  } else {
    userid = 4;
  }
  try {
    await query(
      "INSERT INTO chart (userid, chartOption, chartName) VALUES (?, ?, ?)",
      [userid, JSON.stringify(chartOption), chateName]
    );
    res.send({
      code: 20000,
      data: "Chart uploaded!",
    });
  } catch (error) {
    console.error("Database operation failed:", error);
    res.send({
      code: 500,
      message: "Database operation failed",
    });
  }
});
/* Return all stored chart  */
app.post(`${PREFIX}/chartGen/allCharts`, async (req, res) => {
  let token = req.body.token;
  let userid;
  if (token == "admin-token") {
    userid = 3;
  } else {
    userid = 4;
  }
  try {
    let charts = await query("SELECT * FROM chart WHERE userid = ?", [userid]);
    res.send({
      code: 20000,
      data: charts,
    });
  } catch (error) {
    console.error("Database operation failed:", error);
    res.send({
      code: 500,
      message: "Database operation failed",
    });
  }
});
/* Drop dashboard chart by id */
app.post(`${PREFIX}/dashboard/dropChart`, async (req, res) => {
  const body = req.body;
  try {
    await query("DELETE FROM chart WHERE chartId = ?", [body.chartID]);
    res.send({
      code: 20000,
      message: "Drop Success",
    });
  } catch (error) {
    console.error("Database operation failed:", error);
    res.send({
      code: 500,
      message: "Database operation failed",
    });
  }
});

app.listen(9528, () => {
  console.log("Server is open on http://localhost:9528");
});
