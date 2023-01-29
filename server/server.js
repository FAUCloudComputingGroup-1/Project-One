var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
var request = require('request');
var fname=''

app.use(cors())

app.post('/upload',function(req, res) {
  console.log("sta")
  console.log(req)
  console.log("min")
  res.redirect('http://localhost:8000/upload');
  console.log("fin")
});

app.get('/download', (req, res) => {
      console.log(req.body)
  })

app.listen(9000, function() {
    console.log('App running on port 9000');
});
