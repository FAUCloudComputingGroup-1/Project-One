var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
var request = require('request');
var fname=''

app.use(cors())

app.post('/upload',function(req, res) {
  console.log("sta")
  console.log(req.blob)
  console.log(req.files)
  console.log(req.body)
  console.log(req.file)   
  console.log("min")
  // req.redirect('http://localhost:8000/upload');
  res.redirect(301,'http://localhost:8000/upload')
  console.log("fin")
});

app.get('/download', (req, res) => {
  })

app.listen(9000, function() {
    console.log('App running on port 9000');
});
