const express = require('express').Router();
const templeRoutes = require('./temple');
const swaggerRoutes = require('./swagger');

routes.use('/temples', templeRoutes);
routes.use('/swagger', swaggerRoutes);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://github.com/sterlingt22/temple-api.git',
    };
    res.send(docData);
  })
);

module.exports = routes;
