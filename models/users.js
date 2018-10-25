const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  hometown: {type: String, required: true},
  profilePic: {type: String, required: true},
  age: {type: Number, required: true},
  carModel: String,
  favTrip: String,
  petCheck: String,
  hobby: String
});


module.exports = mongoose.model('User', userSchema);
