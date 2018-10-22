const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

// Require our database
require('./db/db');

// Require our controller
const tripController = require('./controllers/trip');

// Apply middleware here
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Call the controller here
app.use('/trip', tripController)


app.get('/', (req, res) => {
  res.render('index.ejs')
})




app.listen(3000, (req, res) => {
  console.log('Ayyyyy Im workin here')
});
