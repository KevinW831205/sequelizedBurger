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

    app.get("/api/customers", function (req, res) {

        db.Customer.findAll({}).then(function (customerData) {

            res.json(customerData)

        })
    });

};




