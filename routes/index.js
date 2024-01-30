const express = require('express').Router;
const templeRoutes = require('./temple');  

routes.use('/', require('./swagger'));
routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://sterlingtucker.github.io/sterling-byui-api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;
