//  mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    set(val) {
      return bcrypt.hashSync(val, 10);
    },
  },
});

// 建立用户数据库模型
const User = mongoose.model("User", UserSchema);

module.exports = { User };
