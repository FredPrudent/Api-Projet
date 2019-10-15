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
  
  module.exports = router; 