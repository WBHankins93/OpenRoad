const mongoose = require('mongoose');

const tripSchema = new mongoose.model({
  name: {type: String, required: true},
  cityStart: {type: String, required: true},
  cityEnd: {type: String, required: true},
  theme: {type: String, required: true},
  tripReason: {type: String, required: true},
  extraDetails: String
});


module.exports = mongoose.model('Trip', tripSchema);
