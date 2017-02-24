console.log('user model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'name required']},
  posts: {type: Schema.Types.ObjectId, ref: "Post"},
  topics: {type: Schema.Types.ObjectId, ref: "Topic"},
  comments: {type: Schema.Types.ObjectId, ref: "Comment"}
}, {timestamps: true});

var User = mongoose.model("User", UserSchema);
