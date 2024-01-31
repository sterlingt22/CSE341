const express = require('express').Router();
const temple = require('./temple');

routes = ('/', require('./swagger'));
routes.use('/temples', temple);
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
