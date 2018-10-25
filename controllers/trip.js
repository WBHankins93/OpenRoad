const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');
const User = require('../models/users');

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
  User.find({}, (err, allUsers) => {
    res.render('./trips/new.ejs', {
      users: allUsers
    });
  })

})

router.post('/', (req, res) => {
  User.findById(req.body.tripIds, (err, foundUser) => {
    Trip.create(req.body, (err, createdTrip) => {

      // console.log(foundUser);
      // createdTrip.founderName = foundUser.name;
      // createdTrip.founderId = foundUser.id;

      foundUser.trips.push(createdTrip);
      console.log(foundUser);
      foundUser.save((err, data) => {
        res.redirect('/users')
      })
    })
  })
});


// Create a SHOW route for each trip
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  Trip.findById(req.params.id, (err, foundTrip) => {
    console.log(foundTrip);
    res.render('trips/show.ejs', {
      trip: foundTrip
    });
    // User.findOne({
    //   'trips._id': req.id
    // }, (err, foundUser) => {
    //   console.log(foundUser, ' this is foundUser')
    //   res.render('trips/show.ejs', {
    //     trip: foundTrip,
    //     users: foundUser
    //   });
    // });
  })
})

/// Create edit route
router.get('/:id/edit', (req, res) => {
  Trip.findById(req.params.id, (err, editTrip) => {
    res.render('trips/edit.ejs', {
      trip: editTrip
    })
  })

})


// Create a PUT route for edit page
router.put('/:id', (req, res) => {
  Trip.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, (err, updatedTrip) => {
    res.redirect('/trip')
  })
})

// Make a delete route for trips
router.delete('/:id', (req, res) => {
  Trip.findOneAndRemove(req.params.id, (err, deletedTrip) => {
    Author.findOne({
      'trips._id': req.params.id
    }, (err, foundUser) => {

      foundUser.trips.id(req.params.id).remove();
      foundUser.save((err, data) => {
        res.redirect('/trips');
      });
    })
  })
})



module.exports = router;
