var express = require('express');
var firebase = require('firebase');
var router = express.Router();

firebase.initializeApp({
    databaseURL: "https://hotfix-f82fc.firebaseio.com/",
    serviceAccount: "./HotfixServiceAccount.json",
    databaseAuthVariableOverride: {
        uid: "hotfixer-server"
    }
});

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/server/:player', function(req,res,next){
  firebase.database().ref('/Players/'+req.params.player).once('value',function(snapshot){
    res.json({obj:snapshot.val()});
  })
})

module.exports = router;