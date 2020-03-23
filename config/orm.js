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
    updateOne:function(){
        //WHERE ${condition}
        //? object {"devoured" =true}
        //can put that in the models file
    },
}

module.exports = orm;

orm.selectAll