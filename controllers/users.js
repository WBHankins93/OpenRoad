const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Trip = require('../models/trip');

// route to main index
router.get('/', (req, res) => {
  console.log(req.session)
  User.find({}, (err, foundUser) => {
    res.render('./users/index.ejs', {
      users: foundUser
    })
  });
});

// Route to new User page
router.get('/new', (req,res) => {
    res.render('./users/new.ejs')
});

// Route to User show page
router.get('/:id', (req, res)=>{
  User.findById(req.params.id, (err, foundUser)=>{
    res.render('./users/show.ejs', {
      users: foundUser
    });
  });
});

// Post Route to add new user
router.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if(err){
      console.log(err)
    } else {
      res.redirect('/trip')
    }
  })
})




module.exports = router;
