const mongoose         = require('mongoose');

const connectionString = 'mongodb://localhost/openRoad';

mongoose.connect(connectionString, { newUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log(`Mongoose is connected to ${connectionString}`)
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected')
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose error', err)
});
