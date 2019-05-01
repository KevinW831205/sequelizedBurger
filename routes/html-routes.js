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

        db.Burger.findAll({
            include: [db.Customer]
        },
        ).then(function (burgerData) {

            // converting sequelize data into handlebars format
            var burgerArr = [];
            for (var i = 0; i < burgerData.length; i++) {
                burgerArr.push(burgerData[i].dataValues)
            }


            db.Customer.findAll({}).then(function (customerData) {

                var customerArr = [];
                for (var i = 0; i < customerData.length; i++) {
                    customerArr.push(customerData[i].dataValues)
                }

                // console.log(burgerArr[0].Customer)
                res.render("index",
                    {
                        burger: burgerArr,
                        customer: customerArr
                    });

            })

        })


    });


};


