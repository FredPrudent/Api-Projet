const Joi = require('joi');
const mongoose = require('mongoose');

const Equipment = mongoose.model('equipments', new mongoose.Schema({
    equipment_name: String, 
    equipment_picture: String, 
    equipment_description: String 
}));

function validateEquipment(equipment) {
  const schema = {
    equipment_name: Joi.string().required(), 
    equipment_picture: Joi.string(),
    equipment_description: Joi.string().max(250)
  };

  return Joi.validate(equipment, schema);
}

exports.Equipment = Equipment; 
exports.validate = validateEquipment;