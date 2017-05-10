
var express = require("express");
var router = express.Router();

var db = require("../models");

  // Find all Beers and return them to the users
  router.get("/", function(req, res) {
    db.TxBeer.findAll({}).then(function(txbeerdb) {
      res.json(txbeerdb);
    });
  });

  // Find all Beers and return them to the users
  router.get("/api/beer", function(req, res) {
    db.TxBeer.findAll({}).then(function(txbeerdb) {
      res.json(txbeerdb);
    });
  });

  router.get("/api/beer/:name", function(req, res) {
     // Find one Author with the id in req.params.id and return them to the user with res.json
    db.TxBeer.findOne({
      where: {
        name: req.params.name
      }
    }).then(function(txbeerdb) {
      res.json(txbeerdb);
    });
  });

 // Find all style of beer and return them to the users
  router.get("/api/beers/:gen_style", function(req, res) {
    console.log("/api/beer/gen_style is working");
    db.TxBeer.findAll({
        where: {
        style: req.params.gen_style
    }  
}).then(function(txbeerdb) {
      res.json(txbeerdb);      
    });
  });


  router.post("/api/beer", function(req, res) {
     // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.TxBeer.create(req.body).then(function(txbeerdb) {
      res.json(txbeerdb);
    });
  });

  router.delete("/api/beer/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.TxBeer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(txbeerdb) {
      res.json(txbeerdb);
    });
  });


module.exports = router;
