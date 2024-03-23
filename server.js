// server.js
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const multer = require("multer");
const fs = require("fs");
const app = express();
const AWS = require("aws-sdk");
const { User, DataSource } = require("./model");
const { tokens } = require("./tokens.js");
const PREFIX = "/vue-admin-template/api";
app.use(cors());
//get request data from req.body
app.use(express.json());

/* Login */
app.post(`${PREFIX}/user/login`, async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ username: body.username });
  if (!user) {
    return res.send({ code: 422, message: "User not found!" });
  }
  const isPasswordValid = bcrypt.compareSync(body.password, user.password);
  if (!isPasswordValid) {
    return res.status(422).send({
      message: "Invalid password",
    });
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
  const isDuplicate = await User.findOne({
    username: body.username,
  });
  if (isDuplicate) {
    res.send({
      code: 422,
      message: "Duplicate User!",
    });
  } else {
    User.create({ username: body.username, password: body.password }).then(
      () => {
        res.send({
          code: 20000,
          message: "Register Success",
        });
      }
    );
  }
});
/* Upload  */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "dataSource/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.post(
  `${PREFIX}/dataSource/upload`,
  upload.single("file"),
  async (req, res) => {
    const fileData = {
      filename: req.file.filename,
      data: fs.readFileSync(req.file.path),
      type: req.file.mimetype,
      uploadTime: new Date().toISOString(),
    };
    try {
      DataSource.create({
        fileName: fileData.filename,
        data: fileData.data,
        fileType: fileData.type,
        uploadTime: fileData.uploadTime,
      }).then(() => {
        res.send({
          code: 20000,
          message: "Upload Success",
        });
      });
    } catch (e) {}
  }
);
/* Get current uploaded file  */
app.get(`${PREFIX}/dataSource/allFile`, async (req, res) => {
  let s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    accessKeyId: require("./ak.js").ak,
    secretAccessKey: require("./ak.js").ask,
    region: "ap-southeast-2",
  });
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

app.listen(9528, () => {
  console.log("Server is open on http://localhost:9528");
});
