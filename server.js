// server.js
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
// create server
const app = express();
// import mongodb function
const { User } = require("./model");
const { tokens } = require("./tokens.js");
const PREFIX = "/vue-admin-template/user";
app.use(cors());
//get request data from req.body
app.use(express.json());

/* Login */
app.post(`${PREFIX}/login`, async (req, res) => {
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
app.get(`${PREFIX}/info`, async (req, res) => {
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
app.post(`${PREFIX}/logout`, async (req, res) => {
  res.send({
    code: 20000,
    data: "success",
  });
});

/* Register  */
app.post(`${PREFIX}/register`, async (req, res) => {
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
app.listen(9528, () => {
  console.log("Server is open on http://localhost:9528");
});
