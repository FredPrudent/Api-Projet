const Joi = require('joi');
const mongoose = require('mongoose');

const Post = mongoose.model('Post', new mongoose.Schema({
    title: String, 
    post_description: String, 
    author: String 
}));

function validatePost(post) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    post_description: Joi.string().min(5).max(500),
    author: Joi.string().required()
  };

  return Joi.validate(post, schema);
}

exports.Post = Post; 
exports.validate = validatePost;