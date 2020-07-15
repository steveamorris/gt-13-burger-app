const connection = require("../config/connection");
const { connect } = require("../controllers/burgers_controller");

const orm = {
  all: function (tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, results) {
      if (err) {
        throw err;
      }
      cb(results);
    });
  },
  create: function (tableName, colName, value, cb) {
    let queryString =
      "INSERT INTO " + tableName + " SET " + colName + "'" + value + "'";
    console.log("Create ORM", queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
