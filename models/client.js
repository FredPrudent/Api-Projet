const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Client = mongoose.model('Client', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  logo: {
    type: String
    },
  
}));

function validateClient(client) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    logo: Joi.string(),
    
  };

  return Joi.validate(client, schema);
}

exports.Client = Client; 
exports.validate = validateClient;