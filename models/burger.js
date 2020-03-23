//Import orm.js
var orm = require("../config/orm.js");

//Call orm function
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", cb);
    },
    insertOne: function(obj, cb) {
        orm.insertOne("burgers", obj, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne("burgers", {devoured: true}, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};
module.exports = burger;