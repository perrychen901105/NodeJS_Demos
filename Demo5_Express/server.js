var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).any())

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/index.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/process_get', function (req, res) {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function (req, res) {
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

app.post('/file_upload', function(req, res){
  console.log(req.files[0].originalname);
  console.log(req.files[0].path);
  console.log(req.files[0].fieldname);
  var file = __dirname + "/" + req.files[0].originalname;

  fs.readFile( req.files[0].path, function ( err, data) {
    fs.writeFile(file, data, function (err) {
      if (err) {
        console.log(err);
      } else {
        response = {
          message: 'File uploaded successfully',
          filename: req.files[0].originalname
        };
      }
      console.log( response );
      res.end( JSON.stringify( response ));
    });
  });
})

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port);
})