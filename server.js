const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const usersController = require('./controllers/users')
const tripController = require('./controllers/trip');
const authController = require('./controllers/auth');
const session        = require('express-session');
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/openRoad2';
var port = process.env.PORT || 3000;

mongoose.connect(mongoUri);
// Require our database
require('./db/db');


app.use(session({
  secret: 'This is some random secret string',
  resave: false,
  saveUninitialized: false
}));

// Apply middleware here
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


// Call the controller here

app.use('/trip', tripController)
app.use('/users', usersController)
app.use('/auth', authController);

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port);
console.log('---------------------------------');
console.log('Server running on port: ' + port);
console.log('---------------------------------');
