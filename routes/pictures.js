const {Picture, validate} = require('../models/picture'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const pictures = await Picture.find().sort('name');
  res.send(pictures);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let picture = new Picture({ 
    picture_name: req.body.picture_name,
    picture_source: req.body.picture_source,
    picture_description: req.body.picture_description
  });
  picture = await picture.save();
  
  res.send(picture);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const picture = await Picture.findByIdAndUpdate(req.params.id,
    { 
      picture_name: req.body.picture_name,
      picture_source: req.body.picture_source,
      picture_description: req.body.picture_description
    }, { new: true });

  if (!picture) return res.status(404).send('Pas de photo avec l\'id correspondant.');
  
  res.send(picture);
});

router.delete('/:id', async (req, res) => {
  const picture = await Picture.findByIdAndRemove(req.params.id);

  if (!picture) return res.status(404).send('Pas de photo avec l\'id correspondant.');

  res.send(picture);
});

router.get('/:id', async (req, res) => {
  const picture = await Picture.findById(req.params.id);

  if (!picture) return res.status(404).send('Pas de photo avec l\'id correspondant.');

  res.send(picture);
});

module.exports = router; 