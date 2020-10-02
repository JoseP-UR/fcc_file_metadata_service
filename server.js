'use strict';

var express = require('express');
var cors = require('cors');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  console.log(req.file)
  const result = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  }
  res.json(result)
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
