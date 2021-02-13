const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "student",
  database: "groceryList",
});

connection.connect(function(err) {
  if (err) {
    console.log('error connecting to MYSQL: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
