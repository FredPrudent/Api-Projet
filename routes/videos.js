const {Video, validate} = require('../models/video'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const videos = await Video.find();
  res.send(videos);
});

router.get('/:id', async (req, res) => {
    const video = await Video.findById(req.params.id);
  
    if (!video) return res.status(404).send('Pas de vidéos avec l\'id correspondant.');
  
    res.send(video);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let video = new Video({ 
    
    link: req.body.link,
    name: req.body.name

  });
  video = await video.save();
  
  res.send(video);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  const video = await Video.findByIdAndUpdate(req.params.id,
    { 
        link: req.body.link,
        name: req.body.name

    }, { new: true });
  
  if (!video) return res.status(404).send('Pas de vidéos avec l\'id correspondant.');
    
  res.send(video);
});

router.delete('/:id', async (req, res) => {
  const video = await Video.findByIdAndRemove(req.params.id);

  if (!video) return res.status(404).send('Pas de vidéos avec l\'id correspondant.');

  res.send(video);
});

  
  module.exports = router; 