const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Picture = mongoose.model('Picture', new mongoose.Schema({
  picture_name: String, 
  picture_source: String, 
  picture_description: String
}));

function validatePicture(picture) {
  const schema = {
    picture_name: Joi.string().max(50),
  };

  return Joi.validate(picture, schema);
}

exports.Picture = Picture; 
exports.validate = validatePicture;