console.log('topic model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'name required']},
  description: String,
  category: String,
  posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
  user: {type: Schema.Types.ObjectId, ref: "User"}
} , {timestamps: true})

var Topic = mongoose.model("Topic", TopicSchema);
