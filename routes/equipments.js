const {Equipment, validate} = require('../models/equipment'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const equipments = await Equipment.find();
  res.send(equipments);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let equipment = new Equipment({ 
    equipment_name: req.body.equipment_name,
    equipment_picture: req.body.equipment_picture ,
    equipment_description: req.body.description
  });
  equipment = await equipment.save();
  
  res.send(equipment);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const equipment = await Equipment.findByIdAndUpdate(req.params.id,
    { 
        equipment_name: req.body.equipment_name,
        equipment_picture: req.body.equipment_picture ,
        equipment_description: req.body.description
    }, { new: true });

  if (!equipment) return res.status(404).send('Pas d\'équipement avec l\'id correspondant.');
  
  res.send(equipment);
});

router.delete('/:id', async (req, res) => {
  const equipment = await Equipment.findByIdAndRemove(req.params.id);

  if (!equipment) return res.status(404).send('Pas d\'équipement avec l\'id correspondant.');

  res.send(equipment);
});

router.get('/:id', async (req, res) => {
  const equipment = await Equipment.findById(req.params.id);

  if (!equipment) return res.status(404).send('Pas d\'équipement avec l\'id correspondant.');

  res.send(equipment);
});

module.exports = router; 