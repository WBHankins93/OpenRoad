const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

// Route that gives us the main index
router.get('/', (req, res)=>{
  Trip.find({}, (err, foundTrip)=>{
    res.render('trips/index.ejs', {
      trips: foundTrip
    });
  })
});

/// Route for Add Trip
router.get('/new', (req, res) => {
  Trip.find({}, (err, allTrips) => {
    res.render('trips/new.ejs', {
      trips: allTrips
    });
  })

})




module.exports = router;
