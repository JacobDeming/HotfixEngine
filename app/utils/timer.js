 var firebase = require('firebase');

 var config = {
    apiKey: "AIzaSyDVU0C4fAQTbialmJYHQsrl0-mDeYW4W8Q",
    authDomain: "hotfixengine.firebaseapp.com",
    databaseURL: "https://hotfixengine.firebaseio.com",
    storageBucket: "hotfixengine.appspot.com",
  };
  firebase.initializeApp(config);

//timer for the code



// number of seconds per round
var number = 6;
    
    // function that runs the seconds
    function run(){
      counter = setInterval(increment, 1000);
    }
    function increment(){
      number--
     
     console.log(number);

      if (number === 1){
       // this will be set to firebase 
       firebase.database().ref(number).set(true); 
        stop();
       

      }
    }
    
    // function that stops the seconds
    function stop(){
 
      // this will be set to firebase 
       firebase.database().ref(number).set(false); 


      clearInterval(counter);
      console.log("Done!")
    }
  run();


