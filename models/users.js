const mongoose = require('mongoose');
const Trip = require('../models/trip');

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  hometown: {type: String, required: true},
  profilePic: {type: String, required: true},
  age: {type: Number, required: true},
  carModel: String,
  favTrip: String,
  petCheck: String,
  hobby: String,
  trips: [Trip.schema]
});


module.exports = mongoose.model('User', userSchema);
