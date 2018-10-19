const express = require('express');
const app     = express();




app.get('/', (req, res) => {
  res.send('OpenRoad is alive')
})




app.listen(3000, (req, res) => {
  console.log('Ayyyyy Im workin here')
});
