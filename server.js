const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');
 
app.get('/', lesson1Controller.JulietteRoute);

app.get('/Irma', lesson1Controller.IrmaRoute);
 
const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});