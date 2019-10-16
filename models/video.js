const Joi = require('joi');
const mongoose = require('mongoose');

const Video = mongoose.model('Video', new mongoose.Schema({

    name: String,
    link: String
    
}));

function validateVideo(video) {
  const schema = {
    
    name: Joi.string(),
    link: Joi.string()
    
    
  };

  return Joi.validate(video, schema);
}

exports.Video = Video; 
exports.validate = validateVideo;