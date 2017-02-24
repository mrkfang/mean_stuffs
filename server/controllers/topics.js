console.log('server topics controller');
var mongoose = require("mongoose");
var Topic = mongoose.model('Topic');

module.exports = {
  index: function(req, res){
    Topic.find({}).populate('user').exec(function(err, topics){
      if(err){
        console.log("error: ", err);
      } else {
        console.log("topics from DB: ", topics);
        res.json( topics )
      }
    })
  },
  create: function(req, res){
    console.log("server topic create req.body: ", req.body);
    Topic.create(req.body, function(err, data){
      if (err){
        console.log("topic create error: ", err);
        res.json(data);
      } else {
        console.log("topic created: ", data);
        res.json(data)
      }
    })
  },
  getTopic: function(req, res){
    console.log('server topic getTopic req.body: ', req.params.id);
    Topic.findById(req.params.id).populate('user').exec(function(err, data){
      if (err){
        console.log('server getTopic error: ', err);
        res.json(err);
      } else {
        console.log('server getTopic data: ', data);
        res.json(data);
      }
    })
  }
}
