//We are using lodash because it sucks to have to write out the RNG for every AISelectAction
var _ = require("lodash");
var firebase = require("firebase");

// Initialize the app with a custom auth variable, limiting the server's access
firebase.initializeApp({
  databaseURL: "https://hotfix-f82fc.firebaseio.com/",
  serviceAccount: "./HotfixServiceAccount.json",
  databaseAuthVariableOverride: {
    uid: "my-service-worker"
  }
});

// The app only has access as defined in the Security Rules
var db = firebase.database();

// Variables which players will be manipulating to affect their champion's stats
var aether = 1;
var material = 1;
var chaos = 1;
var order = 1;

//All of the champions that a player could be randomly assigned
var elementalist = {
  class:"Elementalist",
  hitpoints: 50,
  currentHitpoints: 50,
  physicalAttack: 4,
  physicalDefense: 3,
  specialAttack: 12,
  specialDefense: 10,
  dexterity: 3,
  action: "",
  strike: function(enemy){
    if(_.random(1,100)>enemy.dexterity){
      if(enemy.action=="defend"){
        console.log(this.class+" uses their SPECIAL ATTACK for "+(this.physicalAttack-(enemy.physicalDefense*2))+" damage!")
      enemy.currentHitpoints-=(this.physicalAttack-enemy.physicalDefense*2);
      } else {
      console.log(this.class+" uses their SPECIAL ATTACK for "+(this.physicalAttack-(enemy.physicalDefense))+" damage!")
      enemy.currentHitpoints-=(this.physicalAttack-enemy.physicalDefense);
      }
    } else{
        console.log(enemy.class+" DODGED!");
    }
  },
  special: function(enemy){
    if(_.random(1,100)>enemy.dexterity){
      if(enemy.action=="defend"){
        console.log(this.class+" uses their SPECIAL ATTACK for "+(this.specialAttack-(enemy.specialDefense*2))+" damage!")
      enemy.currentHitpoints-=(this.specialAttack-enemy.specialDefense*2);
      } else {
      console.log(this.class+" uses their SPECIAL ATTACK for "+(this.specialAttack-(enemy.specialDefense))+" damage!")
      enemy.currentHitpoints-=(this.specialAttack-enemy.specialDefense);
      }
    } else{
        console.log(enemy.class+" DODGED!");
    }
  },
  changeStats: function(aether,material,chaos,order){
    this.physicalAttack=Math.floor(4+aether+material);
    this.physicalDefense=Math.floor(3+order);
    this.specialAttack=Math.floor(((12+aether)*chaos)/order);
    this.specialDefense=Math.floor(10+material+order);
    this.dexterity=Math.floor(3*chaos);
    firebase.database().ref('/Players/'+this.class).update({
      physicalAttack : this.physicalDefense,
      physicalDefense : this.physicalDefense,
      dexterity: this.dexterity,
      specialDefense : this.specialDefense,
      specialAttack : this.specialAttack,
      currentHitpoints : this.currentHitpoints
   })
  },
   printStats: function(){
    console.log("---ELEMENTALIST---");
    console.log("Current HP: "+this.currentHitpoints);
    console.log("PhysicalAttack: "+this.physicalAttack);
    console.log("physicalDefense: "+this.physicalDefense);
    console.log("specialAttack: "+this.specialAttack);
    console.log("specialDefense: "+this.specialDefense);
    console.log("Dexterity: "+this.dexterity);
    console.log("Action: "+this.action);
    console.log("");
  },
  AISelectAction: function(enemy){
    this.action="";
    var rng=(_.random(1,100));
    if((this.physicalAttack-enemy.physicalDefense)>(this.specialAttack-enemy.specialDefense)){
      if(rng-(this.physicalAttack-enemy.physicalDefense)<=0){
        rng=1;
      } else {
        rng-=(this.physicalAttack-enemy.physicalDefense);
      }
    }
    if((this.physicalAttack-enemy.physicalDefense)<(this.specialAttack-enemy.specialDefense)){
      if(rng+(this.specialAttack-enemy.specialDefense)>=100){
        rng=100;
      } else {
        rng+=(this.specialAttack-enemy.specialDefense);
      }
    }
    if(this.currentHitpoints-(enemy.physicalAttack-this.physicalDefense)<=0 || this.currentHitpoints-(enemy.specialAttack-this.specialDefense)<=0){
      rng=(_.random(20,80));
    }
    console.log(this.class+"'s random number is "+rng);
    if(rng<=33){
      this.action="strike";
    }
    if(rng>=66){
      this.action="special";
    } 
    if(rng<66 && rng>33) {
      this.action="defend";
    }
  }
}

var highwayman = {
  class: "Highwayman",
  hitpoints: 80,
  currentHitpoints: 80,
  physicalAttack: 10,
  physicalDefense: 5,
  specialAttack: 2,
  specialDefense: 3,
  dexterity: 10,
  action: "",
  strike: function(enemy){
    if(_.random(1,100)>enemy.dexterity){
      if(enemy.action=="defend"){
        console.log(this.class+" STRIKES for "+(this.physicalAttack-(enemy.physicalDefense*2))+" damage!")
      enemy.currentHitpoints-=(this.physicalAttack-enemy.physicalDefense*2);
      } else {
      console.log(this.class+" STRIKES for "+(this.physicalAttack-(enemy.physicalDefense))+" damage!")
      enemy.currentHitpoints-=(this.physicalAttack-enemy.physicalDefense);
      }
    } else{
        console.log(enemy.class+" DODGED!");
    }
  },
  special: function(enemy){
    if(_.random(1,100)>enemy.dexterity){
      if(enemy.action=="defend"){
        console.log(this.class+" uses their SPECIAL ATTACK for "+(this.specialAttack-(enemy.specialDefense*2))+" damage!")
      enemy.currentHitpoints-=(this.specialAttack-enemy.specialDefense*2);
      } else {
      console.log(this.class+" uses their SPECIAL ATTACK for "+(this.specialAttack-(enemy.specialDefense))+" damage!")
      enemy.currentHitpoints-=(this.specialAttack-enemy.specialDefense);
      }
    } else{
        console.log(enemy.class+" DODGED!");
    }
  },
  changeStats: function(aether,material,chaos,order){
    this.physicalAttack=Math.floor((chaos*material)+10);
    this.physicalDefense=Math.floor(5+material);
    this.specialAttack=Math.floor(2+(2*order));
    this.specialDefense=Math.floor(3+chaos+aether);
    this.dexterity=Math.floor(((10*aether)+order)/material);
    firebase.database().ref('/Players/'+this.class).update({
      physicalAttack : this.physicalDefense,
      physicalDefense : this.physicalDefense,
      dexterity: this.dexterity,
      specialDefense : this.specialDefense,
      specialAttack : this.specialAttack,
      currentHitpoints : this.currentHitpoints
    })
  },
  printStats: function(){
    console.log("---HIGHWAYMAN---");
    console.log("Current HP: "+this.currentHitpoints);
    console.log("PhysicalAttack: "+this.physicalAttack);
    console.log("physicalDefense: "+this.physicalDefense);
    console.log("specialAttack: "+this.specialAttack);
    console.log("specialDefense: "+this.specialDefense);
    console.log("Dexterity: "+this.dexterity);
    console.log("Action: "+this.action);
    console.log("");
  },
  AISelectAction: function(enemy){
    this.action="";
    var rng=(_.random(1,100))
    if((this.physicalAttack-enemy.physicalDefense)>(this.specialAttack-enemy.specialDefense)){
      if(rng-(this.physicalAttack-enemy.physicalDefense)<=0){
        rng=1;
      } else {
        rng-=(this.physicalAttack-enemy.physicalDefense);
      }
    }
    if((this.physicalAttack-enemy.physicalDefense)<(this.specialAttack-enemy.specialDefense)){
      if(rng+(this.specialAttack-enemy.specialDefense)>=100){
        rng=100;
      } else {
        rng+=(this.specialAttack-enemy.specialDefense);
      }
    }
    if(this.currentHitpoints-(enemy.physicalAttack-this.physicalDefense)<=0 || this.currentHitpoints-(enemy.specialAttack-this.specialDefense)<=0){
      rng=(_.random(20,80));
    }
    console.log(this.class+"'s random number is "+rng);
    if(rng<=33){
      this.action="strike";
    }
    if(rng>=66){
      this.action="special";
    } 
    if(rng<60 && rng>33) {
      this.action="defend";
    }
  }
}

var paragon = {
  class: "Paragon",
  hitpoints: 120,
  currentHitpoints: 120,
  physicalAttack: 10,
  physicalDefense: 8,
  specialAttack: 6,
  specialDefense: 7,
  dexterity: 4,
  action: "",
  strike: function(enemy){
    if(_.random(1,100)>enemy.dexterity){
      if(enemy.action=="defend"){
        console.log(this.class+" STRIKES for "+(this.physicalAttack-(enemy.physicalDefense*2))+" damage!")
      enemy.currentHitpoints-=(this.physicalAttack-enemy.physicalDefense*2);
      } else {
      console.log(this.class+" STRIKES for "+(this.physicalAttack-(enemy.physicalDefense))+" damage!")
      enemy.currentHitpoints-=(this.physicalAttack-enemy.physicalDefense);
      }
    } else{
        console.log(enemy.class+" DODGED!");
    }
  },
  special: function(enemy){
    if(_.random(1,100)>enemy.dexterity){
      if(enemy.action=="defend"){
        console.log(this.class+" uses their SPECIAL ATTACK for "+(this.specialAttack-(enemy.specialDefense*2))+" damage!")
      enemy.currentHitpoints-=(this.specialAttack-enemy.specialDefense*2);
      } else {
      console.log(this.class+" uses their SPECIAL ATTACK for "+(this.specialAttack-(enemy.specialDefense))+" damage!")
      enemy.currentHitpoints-=(this.specialAttack-enemy.specialDefense);
      }
    } else{
        console.log(enemy.class+" DODGED!");
    }
  },
  changeStats: function(aether,material,chaos,order){
    this.physicalAttack=Math.floor(order*material+8);
    this.physicalDefense=Math.floor(((8*material)+order)/(chaos*2));
    this.specialAttack=Math.floor(chaos*aether+8);
    this.specialDefense=Math.floor((7+aether+chaos)/order);
    this.dexterity=Math.floor(4);
    firebase.database().ref('/Players/'+this.class).update({
      physicalAttack : this.physicalDefense,
      physicalDefense : this.physicalDefense,
      dexterity: this.dexterity,
      specialDefense : this.specialDefense,
      specialAttack : this.specialAttack,
      currentHitpoints : this.currentHitpoints
   })
  },
  printStats: function(){
    console.log("---PARAGON---");
    console.log("Current HP: "+this.currentHitpoints);
    console.log("PhysicalAttack: "+this.physicalAttack);
    console.log("physicalDefense: "+this.physicalDefense);
    console.log("specialAttack: "+this.specialAttack);
    console.log("specialDefense: "+this.specialDefense);
    console.log("Dexterity: "+this.dexterity);
    console.log("Action: "+this.action);
    console.log("");
  },
  AISelectAction: function(enemy){
    this.action="";
    var rng=(_.random(1,100))
    if((this.physicalAttack-enemy.physicalDefense)>(this.specialAttack-enemy.specialDefense)){
      if(rng-(this.physicalAttack-enemy.physicalDefense)<=0){
        rng=1;
      } else {
        rng-=(this.physicalAttack-enemy.physicalDefense);
      }
    }
    if((this.physicalAttack-enemy.physicalDefense)<(this.specialAttack-enemy.specialDefense)){
      if(rng+(this.specialAttack-enemy.specialDefense)>=100){
        rng=100;
      } else {
        rng+=(this.specialAttack-enemy.specialDefense);
      }
    }
    if(this.currentHitpoints-(enemy.physicalAttack-this.physicalDefense)<=0 || this.currentHitpoints-(enemy.specialAttack-this.specialDefense)<=0){
      rng=(_.random(20,80));
    }
    console.log(this.class+"'s random number is "+rng);
    if(rng<=33){
      this.action="strike";
    }
    if(rng>=66){
      this.action="special";
    } 
    if(rng<60 && rng>33) {
      this.action="defend";
    }
  }
}

//Function which determines what action was taken by a champion and runs it
var fight = function(champions){
  if(champions[0].action=="strike"){
    champions[0].strike(champions[1]);
  }
  if(champions[0].action=="special"){
    champions[0].special(champions[1]);
  }
  if(champions[1].action=="strike"){
    champions[1].strike(champions[0]);
  }
  if(champions[1].action=="special"){
    champions[1].special(champions[0]);
  }
}

var champions = [elementalist, paragon];


//Code to check the balancing of the champions. Not an actual part of the game.//
var player1Win=0;
var player2Win=0;

// for(var i=0;i<100;i++){
//   var round = 1;
//   champions[0].currentHitpoints=champions[0].hitpoints;
//   champions[1].currentHitpoints=champions[1].hitpoints;
//   while(champions[0].currentHitpoints>0 && champions[1].currentHitpoints>0){
//     console.log('ROUND '+round);
//     aether = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//     material = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//     chaos = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//     order = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//     console.log("Aether: "+aether);
//     console.log("Material: "+material);
//     console.log("Chaos: "+chaos);
//     console.log("Order: "+order);
//     console.log("");
//     champions[1].changeStats(aether,material,chaos,order);
//     champions[0].changeStats(aether,material,chaos,order);
//     champions[1].AISelectAction(champions[0]);
//     champions[0].AISelectAction(champions[1]);

//     fight(champions);

//     champions[0].printStats();
//     champions[1].printStats();
//     if(champions[0].currentHitpoints<=0){
//       player2Win++;
//     }
//     if(champions[1].currentHitpoints<=0){
//       player1Win++;
//     }
//     round++;}
//     console.log(i);
//   if(i==99){
//     console.log("Player 1 Wins: "+player1Win);
//     console.log("Player 2 Wins: "+player2Win);
//   }
// }


var timer={
  number:6,
  round:1,
  run:function(){
    if(champions[0].currentHitpoints>0 && champions[1].currentHitpoints>0){
      console.log('ROUND '+this.round);
      aether = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
      material = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
      chaos = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
      order = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
      console.log("Aether: "+aether);
      console.log("Material: "+material);
      console.log("Chaos: "+chaos);
      console.log("Order: "+order);
      console.log("");
      champions[1].changeStats(aether,material,chaos,order);
      champions[0].changeStats(aether,material,chaos,order);
      champions[1].AISelectAction(champions[0]);
      champions[0].AISelectAction(champions[1]);
      this.round++;
      firebase.database().ref("/Timer").set(true); 
      counter=setInterval(this.increment, 1000);
    } else {
      if(champions[0].currentHitpoints<=0){
        console.log("Player 2 Wins");
      }
      if(champions[1].currentHitpoints<=0){
        console.log("Player 1 Wins");
      }
    }
  },
  increment:function(){
    timer.number--;
    console.log(timer.number);
    if (timer.number === 1){
      timer.stop();
    }
  },
  stop:function(){
    firebase.database().ref("/Timer").set(false);
    champions[0].printStats();
    champions[1].printStats(); 
    clearInterval(counter);
    fight(champions);
    timer.number=6;
    timer.run();
  }
}

timer.run();
console.log(timer.number);