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


// Post Route to add new user
router.post('/', (req, res) => {
  console.log(req.body)
  User.create(req.body, (err, createdUser) => {
    if(err){
      console.log(err)
    } else {
      res.redirect('/users')
    }
  })
})

// Route to User show page
router.get('/:id', (req, res)=>{
  User.findById(req.params.id, (err, foundUser)=>{
    res.render('./users/show.ejs', {
      users: foundUser
    });
  });
});


// Route to update(edit)
router.get('/:id/edit', (req, res) => {
  if(req.session.logged === true){
    User.findById(req.params.id, (err, editUser) => {
      res.render('users/edit.ejs', {
        users: editUser
      })
    })
  } else {
    res.redirect('/auth/login')
  }
})

// Route to add updated User to page
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, updateUser) => {
    res.redirect('/users');
  });
});




module.exports = router;
