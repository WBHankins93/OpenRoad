const express = require('express');
const router  = express.Router();
const Auth    = require('../models/auth');
const bcrypt = require('bcrypt');



router.get('/login', (req, res) => {
  console.log(req.session)
  res.render('auth/login.ejs', {

  });
});



module.exports = router;
