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

    app.delete("/api/customers/:id", function (req, res) {

        db.Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        });
    });

    app.put("/api/customers/:id", function (req, res) {

        db.Customer.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        ).then(function (result) {
            res.json(result);
        });
    });


};




