const {Professional_info, validate} = require('../models/professional_info'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const professional_infos = await Professional_info.find();
  res.send(professional_infos);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let professional_info = new Professional_info({ 
    professional_name: req.body.professional_name,
    professional_mail: req.body.professional_mail,
    professional_phone: req.body.professional_phone,
    professional_adress: req.body.professional_adress,
    professional_logo: req.body.professional_logo
  });
  professional_info = await professional_info.save();
  
  res.send(professional_info);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const professional_info = await Professional_info.findByIdAndUpdate(req.params.id,
    { 
      title: req.body.title,
      professional_info_description: req.body.professional_info_description,
      author: req.body.author
    }, { new: true });

  if (!professional_info) return res.status(404).send('Pas de données professionnelles avec l\'id correspondant.');
  
  res.send(professional_info);
});

router.delete('/:id', async (req, res) => {
  const professional_info = await Professional_info.findByIdAndRemove(req.params.id);

  if (!professional_info) return res.status(404).send('Pas de données professionnelles avec l\'id correspondant.');

  res.send(professional_info);
});

router.get('/:id', async (req, res) => {
  const professional_info = await Professional_info.findById(req.params.id);

  if (!professional_info) return res.status(404).send('Pas de données professionnelles avec l\'id correspondant.');

  res.send(professional_info);
});

module.exports = router; 