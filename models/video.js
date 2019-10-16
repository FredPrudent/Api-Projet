const Joi = require('joi');
const mongoose = require('mongoose');

const Video = mongoose.model('Video', new mongoose.Schema({

  video_source: String,
    video_name: String,
    video_description: String
    
}));

function validateVideo(video) {
  const schema = {
    
    video_source: Joi.string(),
    video_name: Joi.string(),
    video_description: Joi.string()
    
  };

  return Joi.validate(video, schema);
}

exports.Video = Video; 
exports.validate = validateVideo;