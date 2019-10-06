const {Collaborator, validate} = require('../models/collaborator'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const collaborators = await Collaborator.find();
  res.send(collaborators);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let collaborator = new Collaborator({ 
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    avatar: req.body.avatar,
    login: req.body.login,
    password: req.body.password
  });
  collaborator = await collaborator.save();
  
  res.send(collaborator);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const collaborator = await Collaborator.findByIdAndUpdate(req.params.id,
    { 
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      avatar: req.body.avatar,
      login: req.body.login,
      password: req.body.password
    }, { new: true });

  if (!collaborator) return res.status(404).send('Pas de collaborateur avec l\'id correspondant.');
  
  res.send(collaborator);
});

router.delete('/:id', async (req, res) => {
  const collaborator = await Collaborator.findByIdAndRemove(req.params.id);

  if (!collaborator) return res.status(404).send('Pas de collaborateur avec l\'id correspondant.');

  res.send(collaborator);
});

router.get('/:id', async (req, res) => {
  const collaborator = await Collaborator.findById(req.params.id);

  if (!collaborator) return res.status(404).send('Pas de collaborateur avec l\'id correspondant.');

  res.send(collaborator);
});

module.exports = router; 