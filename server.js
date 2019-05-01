var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Requiring our models for syncing
var db = require("./models");

// Add routes
require("./routes/html-routes.js")(app);
require("./routes/burger-api-routes.js")(app);
require("./routes/customer-api-routes.js")(app);

// Sync sequelize database and Start our server so that it can begin listening to client requests.

//{ force: true }
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});