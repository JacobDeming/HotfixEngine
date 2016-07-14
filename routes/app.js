var express = require('express');
var router = express.Router();

var Champions = require('./utils/Champions.js');
var Globals = require('./utils/Globals.js');

var firebase = require('firebase');
firebase.initializeApp({
    databaseURL: "https://hotfix-f82fc.firebaseio.com/",
    serviceAccount: "./HotfixServiceAccount.json",
    databaseAuthVariableOverride: {
        uid: "hotfixer-server"
    }
});

router.get('/', function(req, res, next) {
  var firebaseServer = firebase.database().ref();
  var newServer = firebaseServer.push();
  newServer.set({'Players':Champions,'Globals':Globals});
  var path = newServer.toString();
  console.log(path);
  res.render('index');
});

module.exports = router;
