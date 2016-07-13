// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Require Users Schema
var User = require('./models/Users.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://hotfix:gbh123@ds035137.mlab.com:35137/hotfixengine');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


// -------------------------------------------------
app.get('/signup', function(req, res) {
    res.sendfile('signup.html', {root: __dirname })
});

app.get('/', function(req, res) {
    res.sendfile('login.html', {root: __dirname })
});
// checks all user and passwords
app.get('/check', function(req, res){

  User.find({}).exec(function(err, users){

    if(err) {
      console.log(err);
    }

    else {
      res.json(users);
    }
  })

});
//auth the user
app.post('/auth', function(req, res){

  User.find({"username": req.body.username,  "password": req.body.password}, function(err, doc){

    if(err){
      console.log(err);
    }

    else {

      if(doc.length === 1){
       // if username and password works, sent to game page
        res.sendfile('blank.html', {root: __dirname })
        
      }
      else {
      //sends back to login if username and password doesn't match
       res.sendfile('login.html', {root: __dirname })
      
      }
    }

  })

})
// creates a user
app.post('/add', function(req, res){

  User.create({"username": req.body.username, "password": req.body.password}, function(err){
      if(err){
        console.log(err);
      }
      else {
       //sends to login page
       res.sendfile('login.html', {root: __dirname })
       
      }
    })
})



// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
