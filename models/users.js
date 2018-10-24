const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  password: {type: String, required: true},
  age: {type: Number, required: true},
  carModel: {type: String, required: false},
  petCheck: {type: Boolean, required: false},
});


module.exports = mongoose.model('User', userSchema);
