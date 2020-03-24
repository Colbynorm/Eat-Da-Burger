// Import Connection
var connection = require("../config/connection.js");

var orm = {
    selectAll:function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
    },
    insertOne:function(table, obj, cb){
        var queryString = `INSERT INTO ${table} SET ? ;`;
        connection.query(queryString, obj,function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
    },
    updateOne:function(table, obj, condition, cb){
      var queryString = "UPDATE" + table;
      connection.query(queryString,  obj, condition, function(err, resutl) {
        if(err) {
          throw err;
        }
        cb(result);
      });
    },
}

module.exports = orm;

orm.selectAll