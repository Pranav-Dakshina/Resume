
const express = require('express');

var app = express();

var port = 8081;

app.use(express.static('./public/css'));
app.use(express.static('./public/img'));
app.use(express.static('./public/js'));

app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function(err) {
  console.log('Success');
});
