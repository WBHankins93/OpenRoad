const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Trip = require('../models/trip');

router.get('/', async (req, res) => {

  try {
    const foundTrips = await Trip.find();
    res.render('./trips/index.ejs', {
      trips: foundTrips
    });
  } catch (err) {
    res.send(err);
  }
});


// Route for Add Trip
router.get('/new', (req, res) => {
  res.render('./trips/new.ejs')
})

router.post('/', async (req, res) => {

  try {
    const createdTrip = await Trip.create(req.body);
    console.log(createdTrip);
    res.redirect('/trip');
  } catch (err) {
    res.send(err);
  }
});


// Create a SHOW route for each trip
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  Trip.findById(req.params.id, (err, foundTrip) => {
    res.render('trips/show.ejs', {
      trip: foundTrip
    });
  });
});

/// Create edit route
router.get('/:id/edit', (req, res) => {
  Trip.findById(req.params.id, (err, editTrip) => {
    res.render('trips/edit.ejs', {
      trip: editTrip
    })
  })

})


// Create a POST route for edit page


module.exports = router;
