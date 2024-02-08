// routes/movies.js

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies');

// GET all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new movie
router.post('/', async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    director: req.body.director,
    year: req.body.year,
    rating: req.body.rating,
  });
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
