const Joi = require('joi');
const mongoose = require('mongoose');

const Video = mongoose.model('Video', new mongoose.Schema({
  
    link: String
    
}));

function validateVideo(video) {
  const schema = {
    
    link: Joi.string()
    
    
  };

  return Joi.validate(video, schema);
}

exports.Video = Video; 
exports.validate = validateVideo;