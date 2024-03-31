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
app.use(cors());
//get request data from req.body
app.use(express.json());

let s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  accessKeyId: require("./ak.js").ak,
  secretAccessKey: require("./ak.js").ask,
  region: "ap-southeast-2",
});
/* Login */
app.post(`${PREFIX}/user/login`, async (req, res) => {
  const body = req.body;
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
  const token = tokens["admin"];
  res.send({ code: 20000, data: token });
});

/* User info */
app.get(`${PREFIX}/user/info`, async (req, res) => {
  res.send({
    code: 20000,
    data: {
      roles: ["admin"],
      introduction: "I am a super administrator",
      avatar:
        "https://www.waikato.ac.nz/__data/assets/image/0003/661710/Vertical,-full-colour-logo,-on-white-background-1.jpg",
      name: "Testing",
    },
  });
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
/* Get current uploaded file  */
app.get(`${PREFIX}/dataSource/allFile`, async (req, res) => {
  var params = {
    Bucket: "compx576-bucket",
    Delimiter: "/",
    Prefix: "",
  };
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
  let params = { Bucket: "compx576-bucket", Key: `${req.body.key}` };
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
      });
    }
  });
});

app.listen(9528, () => {
  console.log("Server is open on http://localhost:9528");
});
