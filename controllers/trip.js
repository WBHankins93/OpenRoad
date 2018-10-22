const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

router.get('/', (req, res)=>{
  Trip.find({}, (err, foundTrip)=>{
    res.render('trips/index.ejs', {
      trips: foundTrip
    });
  })
});




module.exports = router;
