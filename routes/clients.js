const {Client, validate} = require('../models/client'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const clients = await Client.find();
  res.send(clients);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let client = new Client({ 
    client_name: req.body.client_name,
    logo: req.body.logo
  });
  client = await client.save();
  
  res.send(client);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const client = await Client.findByIdAndUpdate(req.params.id,
    { 
      client_name: req.body.name,
      logo: req.body.logo
    }, { new: true });

  if (!client) return res.status(404).send('Pas de client avec l\'id correspondant.');
  
  res.send(client);
});

router.delete('/:id', async (req, res) => {
  const client = await Client.findByIdAndRemove(req.params.id);

  if (!client) return res.status(404).send('Pas de client avec l\'id correspondant.');

  res.send(client);
});

router.get('/:id', async (req, res) => {
  const client = await Client.findById(req.params.id);

  if (!client) return res.status(404).send('Pas de client avec l\'id correspondant.');

  res.send(client);
});

module.exports = router; 