// const mysql = require("mysql");
// const dbConfig = require("../config/db.config.js");

// var connection = mysql.createPool({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
// });

// module.exports = connection;

const mongoose = require("mongoose");


const mongoUrl =
  "mongodb://127.0.0.1:27017/test"//?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));
  var db = mongoose.connection;

