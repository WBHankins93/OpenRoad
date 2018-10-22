const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

// Route that gives us the main index
router.get('/', (req, res) => {
  Trip.find({}, (err, foundTrips) => {
    res.render('./trips/index.ejs', {
      trips: foundTrips
    })
  });
});


/// Route for Add Trip
router.get('/new', (req, res) => {
    res.render('./trips/new.ejs')
})

router.post('/', async (req, res) => {

  try {
    const createdTrip = await Trip.create(req.body);
    console.log(createdTrip);
    res.redirect('/trip');
  } catch(err) {
    res.send(err);
  }
});

// // Create a show route here for each trip
// router.get('/:id', (req, res)=>{
//   Trip.findById(req.params.id, (err, foundTrips)=>{
//     Trip.findOne({'trips._id': req.params.id}, (err, foundTrips) => {
//       console.log(foundTrips, ' this is foundTrips')
//         res.render('trips/show.ejs', {
//           Trip: foundTrips,
//         });
//     });
//   });
// });
//


module.exports = router;
