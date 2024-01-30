const express = require('express').Router();
const templeRoutes = require('./temple');
const swaggerRoutes = require('./swagger');

express.use('/temples', templeRoutes);
express.use('/swagger', swaggerRoutes);
express.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://sterlingtucker.github.io/sterling-byui-api-docs',
    };
    res.send(docData);
  })
);

module.exports = express;
