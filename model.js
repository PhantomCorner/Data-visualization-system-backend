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
const DataSourceSchema = new mongoose.Schema({
  fileName: {
    type: String,
    unique: true,
  },
  data: {
    type: Buffer,
  },
  uploadTime: {
    type: String,
  },
  fileType: {
    type: String,
  },
});

//
const User = mongoose.model("User", UserSchema);
const DataSource = mongoose.model("DataSource", DataSourceSchema);

module.exports = { User, DataSource };
