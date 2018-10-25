const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: {type: String, required: true},
  cityStart: {type: String, required: true},
  cityEnd: {type: String, required: true},
  theme: String,
  tripReason: {type: String, required: true},
  extraDetails: String,
  pic1: {type: String, required: true},
  pic2: {type: String, required: true},
  pic3: {type: String, required: true}
});


module.exports = mongoose.model('Trip', tripSchema);
