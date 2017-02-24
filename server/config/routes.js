// var mongoose = require('mongoose');
var path = require('path')
var users = require("../controllers/users.js")
var topics = require("../controllers/topics.js")

module.exports = function(app){
  app.post('/create', function(req, res) {
    users.create(req, res);
  });
  app.get('/topics', function(req, res) {
    topics.index(req,res);
  })
  app.post('/topic', function(req, res) {
    topics.create(req, res);
  })
  app.get('/users', function(req, res){
    users.index(req, res);
  })
  app.get('/topic/:id', function(req, res){
    topics.getTopic(req, res);
  })
};
