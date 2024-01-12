const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.JulietteRoute);
routes.get('/Irma', lesson1Controller.IrmaRoute);
routes.get('/Conner', lesson1Controller.ConnerRoute);
routes.get('/James', lesson1Controller.JamesRoute);

module.exports = routes;