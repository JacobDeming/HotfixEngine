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

router.get('/',function(req,res,next){
  firebase.database().ref().set({'Players':Champions,'Globals':Globals,'Timer':false});
  res.redirect('/game/blah');
})

router.get('/login', function(req, res, next) {
  var firebaseServer = firebase.database().ref();
  res.redirect('/game/'+firebaseServer.push({'Rooms':{'Players':Champions,'Globals':Globals,'Timer':false}}).toString().split('https://hotfix-f82fc.firebaseio.com/')[1]);
});

router.get('/game/:roomPath',function(req,res,next){
  res.render('index');
})

module.exports = router;
