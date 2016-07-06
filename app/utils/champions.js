
 var config = {
    apiKey: "AIzaSyDVU0C4fAQTbialmJYHQsrl0-mDeYW4W8Q",
    authDomain: "hotfixengine.firebaseapp.com",
    databaseURL: "https://hotfixengine.firebaseio.com",
    storageBucket: "hotfixengine.appspot.com",
  };
  firebase.initializeApp(config);



//var Firebase = require('firebase');
 



// // Variables which players will be manipulating to affect their champion's stats
 $("#functionButton").click(function() {

//alert('test');

});
var aether = 1;
var material = 1;
var chaos = 1;
var order = 1;
//champion
var elementalist = {
  name:"Elementalist",
  hitpoints: 380,
  currentHitpoints: 380,
  physicalAttack: 4,
  physicalDefense: 3,
  specialAttack: 10,
  specialDefense: 10,
  dexterity: 3,
  strike: function(enemyHealth,enemyPhysDef){
    console.log("thing");
  },
  special: function(enemyHealth,enemySpecDef){
    console.log("thing");
  },
 
  changeStats: function(aether,material,chaos,order){
    this.physicalAttack= 23;  // Math.floor(4+aether+chaos);
    this.physicalDefense=Math.floor(3+material+chaos);
    this.specialAttack=Math.floor(((aether+chaos)*10)/order);
    this.hitpoints = 50;
    this.currentHitpoints = 50;
   firebase.database().ref('/'+this.name).set({
      physicalAttack : this.physicalDefense,
      physicalDefense : this.physicalDefense,
      dexterity: this.dexterity,
      specialDefense : this.specialDefense,
      specialAttack : this.specialAttack,
      hitpoints: this.hitpoints,
      currentHitpoints : this.currentHitpoints
   })
  
  },
  
  // firebase after the object is in the local server


  printStats: function(){
    console.log("---------------");
    console.log("PhysicalAttack: "+this.physicalAttack);
    console.log("physicalDefense: "+this.physicalDefense);
    console.log("specialAttack: "+this.specialAttack);
    console.log("specialDefense: "+this.specialDefense);
    console.log("Dexterity: "+this.dexterity);
    console.log("---------------");
  }
 
}
// });
// // var Highwayman = {
// //   hitpoints: 200,
// //   currentHitpoints: 200,
// //   physicalAttack: (2*x),
// //   physicalDefense: (x+z),
// //   specialAttack: ((2*x)+),
// //   specialDefense: ((3*w)/z),
// //   dexterity: w,
// //   strike: function(physicalAttack,enemyHealth,enemyPhysDef){
// //     console.log("thing");
// //   },
// //   special: function(specialAttack,enemyHealth,enemySpecDef){
// //     console.log("thing");
// //   },
// //   changePhysAtk: function(w,x,y,z){
// //     this.physicalAttack=(z+y);
// //   },
// //   changePhysDef: function(w,x,y,z){
// //     this.physicalDefense=(x+w);
// //   },
// //   changeSpecAtk: function(w,x,y,z){
// //     this.specialAttack=((2*w)+y);
// //   },
// //   changeSpecDef: function(w,x,y,z){
// //     this.specialDefense=((3*x)/z);
// //   },
// //   changeDex: function(w,x,y,z){
// //     this.dexterity=(w);
// //   },
// //   printStats: function(){
// //     console.log(this);
// //   }
// // }




var champions = [elementalist];

elementalist.printStats();

for(var i=0;i<5;i++){
    aether = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    material = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    chaos = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    order = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    console.log("Aether: "+aether);
    console.log("Material: "+material);
    console.log("Chaos: "+chaos);
    console.log("Order: "+order);
    elementalist.changeStats(aether,material,chaos,order);
    elementalist.printStats();
}



// gameBase.on("child_added", function(childSnapshot, prevChildKey){

//   console.log(childSnapshot.val());

// var gamePhysical = childSnapshot.val().elementalist.physicalDefense;
//   var gameDefense = childSnapshot.val().elementalist.physicalDefense;
//   var gameDexterity= childSnapshot.val().elementalist.dexterity;
// });