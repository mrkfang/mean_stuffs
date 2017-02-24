console.log('post model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  text: {type: String, required: [true, "text required"]},
  user: {type: Schema.Types.ObjectId, ref: "User"},
  comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
  upvotes: Number,
  downvotes: Number,
}, {timestamps: true});

var Post = mongoose.model("Post", PostSchema);
