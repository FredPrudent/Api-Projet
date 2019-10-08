const express = require('express');
const auth = require('../routes/auth');
const clients = require('../routes/clients');
const collaborators = require('../routes/collaborators');
const equipments = require('../routes/equipments');
const pictures = require('../routes/pictures');
const posts = require ('../routes/posts');
const professional_datas = require ('../routes/professional_datas');
const users = require('../routes/users');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/auth', auth);
  app.use('/api/clients', clients);
  app.use('/api/collaborators', collaborators);
  app.use('/api/equipments', equipments);
  app.use('/api/pictures', pictures);
  app.use('/api/posts', posts);
  app.use('/api/professional_datas', professional_datas)
  app.use('/api/users', users);
  app.use(error);
}