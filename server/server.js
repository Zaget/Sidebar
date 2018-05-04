const express = require('express');
// const morgan = require('morgan');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');


const Places = require('../database/index.js');


// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/restaurants', express.static(path.join(__dirname, '../client/dist')));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/api/restaurants/:id', (req, res) => {
  const q = Places.findOne({ id: req.params.id });

  q.exec((err, place) => {
    if (err) { console.log(err); }
    // console.log('PLACE: ', place);
    res.send(place);
  });
});

app.listen(port, () => {
  // console.log(`server running at: http://localhost:${port}`);
});
