const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static('dist'));
app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
// app.use('/CSS', express.static('myCSS'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
