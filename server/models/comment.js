console.log('comment model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  user: {type: Schema.ObjectId, ref: "User"},
  text: {type: String, required: [true, "text required"]},
  _post: {type: Schema.Types.ObjectId, ref: "Post"},
}, {timestamps: true});

var Comment = mongoose.model("Comment", CommentSchema);
