const mongoose = require('mongoose');
const User = require('../models/users');

const tripSchema = new mongoose.Schema({
  name: {type: String, required: true},
  cityStart: {type: String, required: true},
  cityEnd: {type: String, required: true},
  theme: String,
  tripReason: {type: String, required: true},
  tripLength: String,
  extraDetails: String,
  pic1: {type: String, required: true},
  pic2: {type: String, required: true},
  pic3: {type: String, required: true},
  founderName: String,
  founderId: String
  // users: [User.schema]
});


module.exports = mongoose.model('Trip', tripSchema);
