const mysql = require("mysql");

const pool = mysql.createPool({
  host: "compx576-userdb.cjsuck0osxyz.ap-southeast-2.rds.amazonaws.com",
  user: "admin",
  password: require("./ak").dbPWD,
  port: 3306,
  database: "user",
});
const query = (sql, params) =>
  new Promise((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });

module.exports = { query };
