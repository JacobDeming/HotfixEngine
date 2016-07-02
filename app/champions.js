//We are using lodash because it sucks to have to write out the RNG for every AI
var _ = require("lodash");

// Variables which players will be manipulating to affect their champion's stats
var aether = 1;
var material = 1;
var chaos = 1;
var order = 1;

var elementalist = {
  class:"Elementalist",
  hitpoints: 50,
  currentHitpoints: 50,
  physicalAttack: 4,
  physicalDefense: 3,
  specialAttack: 12,
  specialDefense: 10,
  dexterity: 3,
  strike: function(enemy){
    console.log(this.class+" STRIKES for "+(this.physicalAttack-(enemy.physicalDefense))+" damage!")
    enemy.currentHitpoints-=(this.physicalAttack-enemy.physicalDefense);
  },
  special: function(enemy){
    console.log(this.class+" uses his SPECIAL for "+(this.specialAttack-enemy.specialDefense)+" damage!");
    enemy.currentHitpoints-=(this.specialAttack-enemy.specialDefense);
  },
  defend: function(){
    console.log(this.class+" is defending!");
    this.defending=true;
  },
  changeStats: function(aether,material,chaos,order){
    this.physicalAttack=Math.floor(4+aether+chaos);
    this.physicalDefense=Math.floor(3+order);
    this.specialAttack=Math.floor(((12+aether)*chaos)/order);
    this.specialDefense=Math.floor(10+material+aether);
    this.dexterity=Math.floor(3*chaos);
  },
  printStats: function(){
    console.log("---ELEMENTALIST---");
    console.log("Current HP: "+this.currentHitpoints);
    console.log("PhysicalAttack: "+this.physicalAttack);
    console.log("physicalDefense: "+this.physicalDefense);
    console.log("specialAttack: "+this.specialAttack);
    console.log("specialDefense: "+this.specialDefense);
    console.log("Dexterity: "+this.dexterity);
    console.log("");
  },
  AI: function(aether,material,chaos,order,enemy){
    var rng=(_.random(1,2));
    if(rng==1){
      if(_.random(1,100)>enemy.dexterity){
        this.strike(enemy);}
      else{
        console.log(enemy.class+" DODGED!");
      }
    }
    if(rng==2){
      if(_.random(1,100)>enemy.dexterity){
        this.special(enemy);}
      else{
        console.log(enemy.class+" DODGED!");
      }
    }
  }
}

var highwayman = {
  class: "Highwayman",
  hitpoints: 75,
  currentHitpoints: 75,
  physicalAttack: 10,
  physicalDefense: 5,
  specialAttack: 2,
  specialDefense: 3,
  dexterity: 10,
  defending: false,
  strike: function(enemy){
    console.log(this.class+" STRIKES for "+(this.physicalAttack-(enemy.physicalDefense))+" damage!")
    enemy.currentHitpoints-=(this.physicalAttack-enemy.physicalDefense);
  },
  special: function(enemy){
      console.log(this.class+" STRIKES for "+(this.specialAttack-(enemy.specialDefense))+" damage!")
      enemy.currentHitpoints-=(this.specialAttack-enemy.specialDefense);
  },
  changeStats: function(aether,material,chaos,order){
    this.physicalAttack=Math.floor((chaos*material)+10);
    this.physicalDefense=Math.floor(5+material);
    this.specialAttack=Math.floor(2+(2*aether));
    this.specialDefense=Math.floor(3+material+chaos);
    this.dexterity=Math.floor((10*aether)+chaos);
  },
  printStats: function(){
    console.log("---HIGHWAYMAN---");
    console.log("Current HP: "+this.currentHitpoints);
    console.log("PhysicalAttack: "+this.physicalAttack);
    console.log("physicalDefense: "+this.physicalDefense);
    console.log("specialAttack: "+this.specialAttack);
    console.log("specialDefense: "+this.specialDefense);
    console.log("Dexterity: "+this.dexterity);
    console.log("");
  },
  AI: function(aether,material,chaos,order,enemy){
    var rng=(_.random(1,2));
    if(rng==1){
      if(_.random(1,100)>enemy.dexterity){
        this.strike(enemy);}
      else{
        console.log(enemy.class+" DODGED!");
      }
    }
    if(rng==2){
      if(_.random(1,100)>enemy.dexterity){
        this.special(enemy);}
      else{
        console.log(enemy.class+" DODGED!");
      }
    }
  }
}




var champions = [elementalist,highwayman];

var player1Win=0;
var player2Win=0;

for(var i=0;i<100;i++){
  var round = 1;
  champions[0].currentHitpoints=champions[0].hitpoints;
  champions[1].currentHitpoints=champions[1].hitpoints;
  while(champions[0].currentHitpoints>0 && champions[1].currentHitpoints>0){
    console.log('ROUND '+round);
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

    champions[1].AI(aether,material,chaos,order,champions[0]);
    champions[0].AI(aether,material,chaos,order,champions[1]);

    champions[0].printStats();
    champions[1].printStats();
    if(champions[0].currentHitpoints<0){
      player2Win++;
    }
    if(champions[1].currentHitpoints<0){
      player1Win++;
    }
    round++;}
    console.log(i);
  if(i==99){
    console.log("Player 1 Wins: "+player1Win);
    console.log("Player 2 Wins: "+player2Win);
  }
}