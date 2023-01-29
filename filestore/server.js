var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
app.use(cors())
let fname=''
let storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname )
      fname=(file.originalname)
      console.log(fname)
    }
})

let upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
    upload(req, res, function (err) {
           console.log("got it")
      return res.status(200).send(req.file)
    })
    console.log("wassup")
});


app.get('/download', (req, res) => {
  console.log("ye")
    let files = `${__dirname}/public/${fname}`;
    console.log(files)
    res.download(files);
  })

app.listen(8000, function() {
    console.log('App running on port 8000');
});
