var Sequelize = require('sequelize');
var db = require("../models");
module.exports = function(app) {
  // Find all Beers and return them to the users
  app.get("/api/beer", function(req, res) {
    db.Beer.findAll({}).then(function(txbeerdb) {
      res.json(txbeerdb);
    });
  });

  app.get("/api/beer/:name", function(req, res) {
     // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Beer.findOne({
      where: {
        name: req.params.name
      }
    }).then(function(txbeerdb) {
      res.json(txbeerdb);
    });
  });

 // Find all style of beer and return them to the users
  app.get("/api/beer/:gen_style", function(req, res) {
    db.Beer.findAll({
        where: {
    gen_style: req.params.gen_style
    }  
}).then(function(txbeerdb) {
      res.json(txbeerdb);
      
    });
  });


  app.post("/api/beer", function(req, res) {
     // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Beer.create(req.body).then(function(txbeerdb) {
      res.json(txbeerdb);
    });
  });

  app.delete("/api/beer/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Beer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(txbeerdb) {
      res.json(txbeerdb);
    });
  });

};