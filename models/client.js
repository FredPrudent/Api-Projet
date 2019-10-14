const Joi = require('joi');
const mongoose = require('mongoose');

const Client = mongoose.model('Client', new mongoose.Schema({
  client_name: String,
  
  logo: String
  
}));

function validateClient(client) {
  const schema = {
    client_name: Joi.string().required(),
    logo: Joi.string()
    
  };

  return Joi.validate(client, schema);
}

exports.Client = Client; 
exports.validate = validateClient;