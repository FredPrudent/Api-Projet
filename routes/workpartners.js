const {Workpartner, validate} = require('../models/workpartner'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



router.get('/', async (req, res) => {
  const workpartners = await Workpartner.find();
  res.send(workpartners);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let workpartner = new Workpartner({ 
    workpartner_name: req.body.workpartner_name,
    logo: req.body.logo
  });
  workpartner = await workpartner.save();
  
  res.send(workpartner);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const workpartner = await Workpartner.findByIdAndUpdate(req.params.id,
    { 
      workpartner_name: req.body.name,
      logo: req.body.logo
    }, { new: true });

  if (!workpartner) return res.status(404).send('Pas de partenaire avec l\'id correspondant.');
  
  res.send(workpartner);
});

router.delete('/:id', async (req, res) => {
  const workpartner = await Workpartner.findByIdAndRemove(req.params.id);

  if (!workpartner) return res.status(404).send('Pas de partenaire avec l\'id correspondant.');

  res.send(workpartner);
});

router.get('/:id', async (req, res) => {
  const workpartner = await Workpartner.findById(req.params.id);

  if (!workpartner) return res.status(404).send('Pas de partenaire avec l\'id correspondant.');

  res.send(workpartner);
});

module.exports = router; 