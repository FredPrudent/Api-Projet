const {Professional_data, validate} = require('../models/professional_data'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const professional_datas = await Professional_data.find();
  res.send(professional_datas);
});

router.professional_data('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let professional_data = new Professional_data({ 
    professional_name: req.body.professional_name,
    professional_mail: req.body.professional_mail,
    professional_phone: req.body.professional_phone,
    professional_adress: req.body.professional_adress,
    professional_logo: req.body.professional_logo
  });
  professional_data = await professional_data.save();
  
  res.send(professional_data);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const professional_data = await Professional_data.findByIdAndUpdate(req.params.id,
    { 
      title: req.body.title,
      professional_data_description: req.body.professional_data_description,
      author: req.body.author
    }, { new: true });

  if (!professional_data) return res.status(404).send('Pas de données professionnelles avec l\'id correspondant.');
  
  res.send(professional_data);
});

router.delete('/:id', async (req, res) => {
  const professional_data = await Professional_data.findByIdAndRemove(req.params.id);

  if (!professional_data) return res.status(404).send('Pas de données professionnelles avec l\'id correspondant.');

  res.send(professional_data);
});

router.get('/:id', async (req, res) => {
  const professional_data = await Professional_data.findById(req.params.id);

  if (!professional_data) return res.status(404).send('Pas de données professionnelles avec l\'id correspondant.');

  res.send(professional_data);
});

module.exports = router; 