var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();

// Requiring our models for syncing
var db = require("./models");

// Static directory
app.use(express.static("./public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes =============================================================

var routes = require("./routes");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

var PORT = process.env.PORT || 8080;
// Syncing our sequelize models and then starting our express app
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

