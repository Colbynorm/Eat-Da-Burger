//Dependencies
var express = require("express");

//Import model to use 
var hamburger = require("../models/burger.js");

//Create router for the app
var router = express.Router();

//Create routes
router.get("/", function (req, res) {
    hamburger.selectAll(function(data) {
        var burgerObject = {
            hamburger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject); 
    });
});

//Add new burger
router.post("/api/burgers", function(req, res) {
    hamburger.insertOne(req.body, function(result) {
        res.json({ id: result.insertId});
    });
});

//Set devoured to true
router.put("/api/burgers/:id", function(req, res) {
    var eat = "id =" + req.params.id;
    console.log("eat", eat);
    burger.updateOne({ devoured: req.body.devoured}, eat, function(res) {
        if(res.changedRows === 0) {
            return res.status(400).end();
        } else {
            res.status(200).end();
        }
    });
});

//Delete burger from database
router.delete("/api/burgers/:id", function(req, res) {
    var ate = "id =" + req.params.id;
    console.log("ate", ate);
    burger.deleteOne(ate, function(res) {
        if(res.changedRows === 0) {
            return res.status(400).end;
        }else {
            res.status(200).end
        }
    });
});

module.exports = router;