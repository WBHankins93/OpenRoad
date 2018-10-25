const express = require('express');
const router  = express.Router();
const Auth    = require('../models/auth');
const bcrypt = require('bcrypt');


// This calls our login page
router.get('/login', (req, res) => {
  console.log(req.session)
  res.render('auth/login.ejs');
});

// We have to make a post route for the register
router.post('/register', async (req, res) => {

  // Store our password in a variable
  const password = req.body.password;
  // Create our hash
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  console.log(passwordHash);

  // Create an object to put into our database into the User Model
  const userEntry = {};
  userEntry.username = req.body.username;
  userEntry.password = passwordHash;

  const user = await Auth.create(userEntry);
  res.redirect('/users');
});

module.exports = router;
