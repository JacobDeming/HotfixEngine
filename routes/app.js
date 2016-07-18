var express = require('express');
var router = express.Router();

var _ = require('lodash');

var Champions = require('./utils/Champions.js');
var Globals = require('./utils/Globals.js');
var HelperMethods = require('./utils/Helpers.js');

var firebase = require('firebase');
firebase.initializeApp({
    databaseURL: "https://hotfix-f82fc.firebaseio.com/",
    serviceAccount: "./HotfixServiceAccount.json",
    databaseAuthVariableOverride: {
        uid: "hotfixer-server"
    }
});

router.get('/',function(req,res,next){
  res.render('login');
})

router.post('/loggingIn', function(req, res, next) {
  var firebaseServer = firebase.database().ref();
  var serverId="";
  var count = 0;
  var findingServer = firebaseServer.once("value",function(snapshot){
    if(snapshot.val()){
      snapshot.forEach(function(childSnapshot){
        count++;
        if(childSnapshot.val().Open==true){
          console.log("Found a server: "+childSnapshot.val());
          serverId=childSnapshot.key;
          console.log(serverId);
          res.redirect('/game/'+serverId);
          firebase.database().ref('/'+serverId).update({'Open':false});
          return;
        }
        if(count>=snapshot.numChildren()){
          console.log("Servers are full! Making a server!");
          var possibleChamps = Champions;
          var randomChampionNumber = _.random(0,Champions.length-1);
          var randomChampion1 = possibleChamps[randomChampionNumber];
          possibleChamps.splice(randomChampionNumber);
          var randomChampion2 = possibleChamps[_.random(0,possibleChamps.length-1)];
          res.redirect('/game/'+firebaseServer.push({'Players':{'player1':randomChampion1,'player2':randomChampion2},'Globals':Globals,'Open':true,'Timer':5}).toString().split('https://hotfix-f82fc.firebaseio.com/')[1]);
        }
      })
    } else {
      console.log("No servers! Making a new one!");
      var possibleChamps = Champions;
      var randomChampionNumber = _.random(0,possibleChamps.length-1);
      var randomChampion1 = possibleChamps[randomChampionNumber];
      possibleChamps.splice(randomChampionNumber);
      var randomChampion2 = possibleChamps[_.random(0,possibleChamps.length-1)];
      res.redirect('/game/'+firebaseServer.push({'Players':{'player1':randomChampion1,'player2':randomChampion2},'Globals':Globals,'Open':true,'Timer':5}).toString().split('https://hotfix-f82fc.firebaseio.com/')[1]);
    }
  })
});

router.get('/game/:roomPath',function(req,res,next){
  res.render('index');
})

module.exports = router;