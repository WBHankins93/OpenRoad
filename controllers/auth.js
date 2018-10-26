const express = require('express');
const router = express.Router();
const Auth = require('../models/auth');
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

// Make a POST route for login
router.post('/login', async (req, res) => {
  //first query the database to see if the user exists
  try {
    const foundUser = await Auth.findOne({
      username: req.body.username
    });
    console.log(foundUser)

    if (foundUser) {
      // if the users exists use the bcrypt compare password
      //to make sure the passwords match
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.logged = true;

        res.redirect('/users')
      } else {

        req.session.message = 'Username or Password is Wrong';
        res.redirect('/auth/login')
      }


    } else {
      req.session.message = 'Username or Password is Wrong';
      res.redirect('/auth/login')
    } // end of foundUser

  } catch (err) {
    res.send('error')
  }
});


// Make a logout route
router.get('/logout', (req, res) => {

  req.session.destroy((err) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/auth/login')
    }
  });
});

module.exports = router;
