// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");



// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {

        //grab all burgers from database and pass it into handlebars

        db.Burger.findAll({}).then(function (data) {

            //
            var burgerArr = [];
            for (var i = 0; i < data.length; i++) {
                burgerArr.push(data[i].dataValues)
            }

            res.render("index", { burger: burgerArr });

        })

    });


    //

};
