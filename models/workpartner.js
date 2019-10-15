const Joi = require('joi');
const mongoose = require('mongoose');

const Workpartner = mongoose.model('Workpartner', new mongoose.Schema({
  client_name: String,
  
  logo: String
  
}));

function validateWorkpartner(workpartner) {
  const schema = {
    client_name: Joi.string().required(),
    logo: Joi.string()
    
  };

  return Joi.validate(workpartner, schema);
}

exports.Workpartner = Workpartner; 
exports.validate = validateWorkpartner;