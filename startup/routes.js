const express = require('express');
const auth = require('../routes/auth');
const videos = require('../routes/videos');
const workpartners = require('../routes/workpartners');
const collaborators = require('../routes/collaborators');
const equipments = require('../routes/equipments');
const pictures = require('../routes/pictures');
const posts = require ('../routes/posts');
const professional_infos = require ('../routes/professional_infos');
const users = require('../routes/users');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/auth', auth);
  app.use('/api/videos', videos)
  app.use('/api/workpartners', workpartners);
  app.use('/api/collaborators', collaborators);
  app.use('/api/equipments', equipments);
  app.use('/api/pictures', pictures);
  app.use('/api/posts', posts);
  app.use('/api/professional_infos', professional_infos)
  app.use('/api/users', users);
  app.use(error);
}