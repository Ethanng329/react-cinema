const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
});

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use(bodyParser.json());

// app.use('/CSS', express.static('myCSS'));

app.get('/OMDB/:querystring', function(req, res) {
  const searchString = req.params.querystring;
  console.log('hello', searchString);

  fetch(
    `https://www.omdbapi.com/?s=${searchString}&apikey=${process.env.API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      res.status(200);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400);
    });
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
