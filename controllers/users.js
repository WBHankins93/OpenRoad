const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const User = require('../models/users');

router.get('/', (req, res) => {
  User.find({}, (err, foundUser) => {
    res.render('./users/index.ejs', {
      users: foundUser
  
    })
        console.log(foundUser);
  });
});
router.get('/new', (req,res) => {
    res.render('./users/new.ejs')
})

router.get('/:id', (req, res)=>{
  User.findById(req.params.id, (err, foundUser)=>{
    res.render('./users/show.ejs', {
      article: foundUser
    });
  });
});
router.get('/:id', async (req, res) => {

  console.log(req.params.id);

  try {

    const foundUser = await User.findById(req.params.id);
    res.render('./users/show.ejs', {
      trip: foundUser
    })

  } catch(err) {
    res.send(err);
  }

});



module.exports = router;