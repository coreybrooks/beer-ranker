
var express = require("express");
var router = express.Router();
var sequelize = require("sequelize");
var path = require("path");

var db = require("../models");

  // Find all Beers and return them to the users
  router.get("/api/all", function(req, res) {
    db.TxBeer.findAll({
      order: [[sequelize.col("rank"), 'DESC']]
    }).then(function(txbeerdb) {
      res.json(txbeerdb);
    });
  });

   // Find all style of beer and return them to the users
  router.get("/api/beers/:gen_style", function(req, res) {
    console.log("/api/beers/gen_style is working");
    db.TxBeer.findAll({
        where: {
        gen_style: req.params.gen_style
    }
    }).then(function(txbeerdb) {
      res.json (txbeerdb);      
    });
  });

//update the win count for the winning beer
    router.put("/api/update", function(req, res) {
      console.log("api/update is working");
      console.log("update req.body: " + JSON.stringify(req.body));
      console.log("rank: " + req.body.rank);
      var count = parseInt(req.body.rank) + 1;
      
    db.TxBeer.update({
      rank: count
    }, {
        where: {
          name: req.body.name
        }
      });
      return res.json(204, {}); 
  });


  /*
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
*/

module.exports = router;
