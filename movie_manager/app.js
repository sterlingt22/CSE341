// app.js

const express = require('express');
const mongoose = require('mongoose');
const swagger = require('./swagger');
const moviesRouter = require('./routes/movies'); // Import moviesRouter
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:3000/movie-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/movies', moviesRouter); // Use moviesRouter for /movies routes
swagger(app);

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
