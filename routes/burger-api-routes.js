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
        // adding a burger to be devoured

        //obtains burger from body of request and creates it in db.Burgers model

        db.Burger.create(req.body).then(function (result) {
            res.json(result);
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        // when a burger is devoured

        // obtain id from request parameter and updates devoured to true where id is same in db.Burgers model

        db.Burger.update(

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

    app.delete("/api/burgers/:id", function (req, res) {
        // when a burger is devoured

        // obtain id from request parameter and updates devoured to true where id is same in db.Burgers model

        db.Burger.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        ).then(function (result) {
            res.json(result);
        });

    });

    app.post("/api/customers", function (req, res) {
        // adding a customer

        // obtains customer from body of request and creates it in db.Customer model

        db.Customer.create(req.body).then(function (result) {
            res.json(result);
        });
    });


};


