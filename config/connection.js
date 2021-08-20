// const Sequelize = require('sequelize');

// // require('dotenv').config();

// // create connection to db, whether local on on heroku using jawsdb
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   });

// module.exports = sequelize;

var mysql = require("mysql");
var connection;
//make connection
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Lemon123",
    database: "broadcastr_db"
  })
}
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;

