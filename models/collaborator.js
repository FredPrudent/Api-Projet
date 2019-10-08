const Joi = require('joi');
const mongoose = require('mongoose');

const Collaborator = mongoose.model('Collaborator', new mongoose.Schema({
    avatar: String, 
    firstname: String, 
    lastname: String, 
    login: String, 
    password: String 
  
}));

function validateCollaborator(collaborator) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    firstname: Joi.string().max(50).required(),
    lastname: Joi.string().max(50).required(),
    
  };

  return Joi.validate(collaborator, schema);
}

exports.Collaborator = Collaborator; 
exports.validate = validateCollaborator;