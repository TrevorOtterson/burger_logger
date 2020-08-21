const express = require('express')
// importing burger.js from the models folder
let burger = require('../models/burger.js')

let router = express.Router()
// routes and logic within those routes
router.get("/", function(req, res) {
    burger.all(function(data) {
      let burger_object = {
        burgers: data
      };
      console.log(burger_object);
      res.render('index', burger_object)
    })
  })
  
  router.post('/api/burgers', function(req, res) {
    burger.create([
      'burger_name', 'devoured'
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId })
    })
  })
  
  router.put('/api/burgers/:id', function(req, res) {
    let condition = "id = " + req.params.id
  
    console.log('condition', condition)
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changed_rows == 0) {
        // If no rows were changed, then the ID must not exist
        return res.status(404).end()
      } 
      else {
        res.status(200).end()
      }
    })
  })
  
  router.delete('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affected_rows == 0) {
        // If no rows were changed, then the ID must not exist
        return res.status(404).end()
      } 
      else {
        res.status(200).end()
      }
    })
  })
  
  // Export routes for server.js to use
  module.exports = router