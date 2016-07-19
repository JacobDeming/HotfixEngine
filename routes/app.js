var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var _ = require('lodash');

var Globals = require('./utils/Globals.js');
var Champions = require('./utils/Champions.js');
var User = require('./utils/Users.js');

var firebase = require('firebase');
firebase.initializeApp({
    databaseURL: "https://hotfix-f82fc.firebaseio.com/",
    serviceAccount: "./HotfixServiceAccount.json",
    databaseAuthVariableOverride: {
        uid: "hotfixer-server"
    }
});

mongoose.connect('mongodb://hotfix:gbh123@ds035137.mlab.com:35137/hotfixengine');
var db = mongoose.connection;

db.on('error',function(err){
  console.log("Mongoose Error: ",err);
})

db.once('open',function(){
  console.log("Mongoose connection successful")
})

router.get('/',function(req,res,next){
  res.render('login');
})

router.get('/signup',function(req,res){
  res.render('signup');
})

router.post('/loggingIn', function(req, res, next) {
  User.find({"username":req.body.username,"password":req.body.password},function(err,doc){
    if(err){
      console.log(err);
    } else {
      if(doc.length===1){
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
                firebase.database().ref('/'+serverId+'/Players/player2/playerName').set(req.body.username);
                return;
              }
              if(count>=snapshot.numChildren()){
                console.log("Servers are full! Making a server!");
                console.log(Champions);
                var possibleChamps = Champions.slice(0);
                var randomChampionNumber = _.random(possibleChamps.length-1);
                var randomChampion1 = possibleChamps[randomChampionNumber];
                randomChampion1.playerName = req.body.username;
                possibleChamps.splice(randomChampionNumber,1);
                var randomChampion2 = possibleChamps[_.random(possibleChamps.length-1)];
                res.redirect('/game/'+firebaseServer.push({'Players':{'player1':randomChampion1,'player2':randomChampion2},'Globals':Globals,'Open':true,'Timer':5,'Ready':0}).toString().split('https://hotfix-f82fc.firebaseio.com/')[1]);
              }
            })
          } else {
            console.log("No servers! Making a new one!");
            console.log(Champions);
            var possibleChamps = Champions.slice(0);
            var randomChampionNumber = _.random(possibleChamps.length-1);
            var randomChampion1 = possibleChamps[randomChampionNumber];
            randomChampion1.playerName = req.body.username;
            possibleChamps.splice(randomChampionNumber,1);
            var randomChampion2 = possibleChamps[_.random(possibleChamps.length-1)];
            res.redirect('/game/'+firebaseServer.push({'Players':{'player1':randomChampion1,'player2':randomChampion2},'Globals':Globals,'Open':true,'Timer':5,'Ready':0}).toString().split('https://hotfix-f82fc.firebaseio.com/')[1]);
          }
        })
      } else {
        res.redirect('/');
      }
    }
  })
});

router.post('/add',function(req,res){
  User.create({"username":req.body.username,"password":req.body.password},function(err){
    if(err){
      if(err.code == 11000){
        console.log("Got in here");
        res.json({failure:err.code});
      }
      console.log(err.code);
    } else {
      res.redirect('/');
    }
  })
})

router.get('/game/:roomPath',function(req,res,next){
  res.render('index');
})

module.exports = router;