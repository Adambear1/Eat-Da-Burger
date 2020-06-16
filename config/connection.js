// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "wvulqmhjj9tbtc1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "gw7wt9yiiaq1ozyy",
  password: "imydilfbd2vshjc2",
  database: "trls3u0z55jw61tz"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
