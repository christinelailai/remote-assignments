const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306,
});

function selectAccount(email) {
  return pool.query("SELECT * FROM assignment.user WHERE email = ?", [email]);
}
function signUp(email, password) {
  return pool.query("INSERT INTO user (email, password) VALUES (? ,?)", [email, password]);
}

function signIn(email, password) {
  return pool.query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password]);
}

module.exports = { signUp, signIn, selectAccount };
