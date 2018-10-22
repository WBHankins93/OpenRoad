const express = require('express');
const app     = express();


require('./db/db');



app.get('/', (req, res) => {
  res.render('index.ejs')
})




app.listen(3000, (req, res) => {
  console.log('Ayyyyy Im workin here')
});
