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
//
// router.get('/', (req, res) => {
//   res.render('./trips/new.ejs');
// });
//
// router.post('/', async (req, res) => {
// console.log(req.body);
//   try {
//
//     await Trip.create(req.body);
//     res.redirect('./trips');
//
//   } catch(err) {
//     res.send(err);
//   }
// });
//
// router.get('/:id', async (req, res) => {
//   console.log(req.params.id);
//    try {
//
//      const tripFound = await Trip.findById(req.params.id);
//      res.render('./trips/show.ejs', {
//        trip: tripFound
//      });
//
//    } catch(err) {
//      res.send(err);
//    }
// });

// Route that gives us the main index
// router.get('/', (req, res) => {
//   Trip.find({}, (err, foundTrips) => {
//     res.render('./trips/index.ejs', {
//       trips: foundTrips
//     })
//   });
// });


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

// Create a show route here for each trip
router.get('/:id', async (req, res) => {
  console.log(req.params.id);

  try {
    const foundTrip = await Trip.findById(req.params.id, (req, res) => {
      res.render('./trips/show.ejs', {
        trip: foundTrip
      })
    });

  } catch (err) {
    res.send(err);
  }
});

/// Create edit route
router.get('/:id/edit', (req, res) => {
  Trip.findById(req.params.id, (err, editAuthor) => {
    res.render('trips/edit.ejs')
  })
})



module.exports = router;
