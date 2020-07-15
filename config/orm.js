const connection = require("../config/connection");
const { connect } = require("../controllers/burgers_controller");

const orm = {
    all: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, results){
            if(err) {
                throw err;
            }
            cb(results);
        });
    }
}




module.exports = orm;