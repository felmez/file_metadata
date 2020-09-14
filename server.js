'use strict';

var express = require('express');
var cors = require('cors');



// require and use "multer"...
let multer = require('multer');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

app.post('/api/fileanalyse', multer({storage: multer.memoryStorage()}).single('upfile'), (request, response) => {
  let responseObject = {}
  responseObject['name'] = request.file.originalname
  responseObject['type'] = request.file.mimetype
  responseObject['size'] = request.file.size
  response.json(responseObject)
})





// some attribution goes to Ganesh H tutorials on YouTube, thanks a lot 🙏
