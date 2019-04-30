// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    app.post("/api/burgers", function (req, res) {
        
        console.log(req.body)
        db.Burger.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });

};


