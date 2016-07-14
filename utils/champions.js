//We are using lodash because it sucks to have to write out the RNG for every AISelectAction
var _ = require("lodash");
var firebase = require("firebase");

// Initialize the app with a custom auth variable, limiting the server's access
firebase.initializeApp({
    databaseURL: "https://hotfix-f82fc.firebaseio.com/",
    serviceAccount: "./HotfixServiceAccount.json",
    databaseAuthVariableOverride: {
        uid: "hotfixer-server"
    }
});

// Variables which players will be manipulating to affect their champion's stats
var aether = 1;
var material = 1;
var chaos = 1;
var order = 1;

//All of the champions that a player could be randomly assigned
var champions = {
    elementalist: {
        playerClass: "Elementalist",
        hitpoints: 50,
        currentHitpoints: 50,
        physicalAttack: 4,
        physicalDefense: 3,
        specialAttack: 12,
        specialDefense: 10,
        dexterity: 3,
        action: "",
        strike: function(enemy) {
            if (_.random(1, 100) > enemy.dexterity) {
                if (enemy.action == "defend") {
                    console.log(this.playerClass + " uses their SPECIAL ATTACK for " + (this.physicalAttack - (enemy.physicalDefense * 2)) + " damage!")
                    enemy.currentHitpoints -= (this.physicalAttack - enemy.physicalDefense * 2);
                } else {
                    console.log(this.playerClass + " uses their SPECIAL ATTACK for " + (this.physicalAttack - (enemy.physicalDefense)) + " damage!")
                    enemy.currentHitpoints -= (this.physicalAttack - enemy.physicalDefense);
                }
            } else {
                console.log(enemy.playerClass + " DODGED!");
            }
        },
        special: function(enemy) {
            if (_.random(1, 100) > enemy.dexterity) {
                if (enemy.action == "defend") {
                    console.log(this.playerClass + " uses their SPECIAL ATTACK for " + (this.specialAttack - (enemy.specialDefense * 2)) + " damage!")
                    enemy.currentHitpoints -= (this.specialAttack - enemy.specialDefense * 2);
                } else {
                    console.log(this.playerClass + " uses their SPECIAL ATTACK for " + (this.specialAttack - (enemy.specialDefense)) + " damage!")
                    enemy.currentHitpoints -= (this.specialAttack - enemy.specialDefense);
                }
            } else {
                console.log(enemy.playerClass + " DODGED!");
            }
        },
        changeStats: function(aether, material, chaos, order) {
            this.physicalAttack = Math.floor(4 + aether + material);
            this.physicalDefense = Math.floor(3 + order);
            this.specialAttack = Math.floor(((12 + aether) * chaos) / order);
            this.specialDefense = Math.floor(10 + material + order);
            this.dexterity = Math.floor(3 * chaos);
            firebase.database().ref('/Players/' + this.playerClass).update({
                playerClass: this.playerClass,
                action: this.action,
                physicalAttack: this.physicalDefense,
                physicalDefense: this.physicalDefense,
                dexterity: this.dexterity,
                specialDefense: this.specialDefense,
                specialAttack: this.specialAttack,
                hitpoints: this.hitpoints,
                currentHitpoints: this.currentHitpoints
            })
        },
        printStats: function() {
            console.log("---ELEMENTALIST---");
            console.log("Current HP: " + this.currentHitpoints);
            console.log("PhysicalAttack: " + this.physicalAttack);
            console.log("physicalDefense: " + this.physicalDefense);
            console.log("specialAttack: " + this.specialAttack);
            console.log("specialDefense: " + this.specialDefense);
            console.log("Dexterity: " + this.dexterity);
            console.log("Action: " + this.action);
            console.log("");
        },
        AISelectAction: function(enemy) {
            this.action = "";
            var rng = (_.random(1, 100));
            if ((this.physicalAttack - enemy.physicalDefense) > (this.specialAttack - enemy.specialDefense)) {
                if (rng - (this.physicalAttack - enemy.physicalDefense) <= 0) {
                    rng = 1;
                } else {
                    rng -= (this.physicalAttack - enemy.physicalDefense);
                }
            }
            if ((this.physicalAttack - enemy.physicalDefense) < (this.specialAttack - enemy.specialDefense)) {
                if (rng + (this.specialAttack - enemy.specialDefense) >= 100) {
                    rng = 100;
                } else {
                    rng += (this.specialAttack - enemy.specialDefense);
                }
            }
            if (this.currentHitpoints - (enemy.physicalAttack - this.physicalDefense) <= 0 || this.currentHitpoints - (enemy.specialAttack - this.specialDefense) <= 0) {
                rng = (_.random(20, 80));
            }
            console.log(this.playerClass + "'s random number is " + rng);
            if (rng <= 33) {
                this.action = "strike";
            }
            if (rng >= 66) {
                this.action = "special";
            }
            if (rng < 66 && rng > 33) {
                this.action = "defend";
            }
        }
    },

    highwayman: {
        playerClass: "Highwayman",
        hitpoints: 80,
        currentHitpoints: 80,
        physicalAttack: 10,
        physicalDefense: 5,
        specialAttack: 2,
        specialDefense: 3,
        dexterity: 10,
        action: "",
        strike: function(enemy) {
            if (_.random(1, 100) > enemy.dexterity) {
                if (enemy.action == "defend") {
                    console.log(this.playerClass + " STRIKES for " + (this.physicalAttack - (enemy.physicalDefense * 2)) + " damage!")
                    enemy.currentHitpoints -= (this.physicalAttack - enemy.physicalDefense * 2);
                } else {
                    console.log(this.playerClass + " STRIKES for " + (this.physicalAttack - (enemy.physicalDefense)) + " damage!")
                    enemy.currentHitpoints -= (this.physicalAttack - enemy.physicalDefense);
                }
            } else {
                console.log(enemy.playerClass + " DODGED!");
            }
        },
        special: function(enemy) {
            if (_.random(1, 100) > enemy.dexterity) {
                if (enemy.action == "defend") {
                    console.log(this.playerClass + " uses their SPECIAL ATTACK for " + (this.specialAttack - (enemy.specialDefense * 2)) + " damage!")
                    enemy.currentHitpoints -= (this.specialAttack - enemy.specialDefense * 2);
                } else {
                    console.log(this.playerClass + " uses their SPECIAL ATTACK for " + (this.specialAttack - (enemy.specialDefense)) + " damage!")
                    enemy.currentHitpoints -= (this.specialAttack - enemy.specialDefense);
                }
            } else {
                console.log(enemy.playerClass + " DODGED!");
            }
        },
        changeStats: function(aether, material, chaos, order) {
            this.physicalAttack = Math.floor((chaos * material) + 10);
            this.physicalDefense = Math.floor(5 + material);
            this.specialAttack = Math.floor(2 + (2 * order));
            this.specialDefense = Math.floor(3 + chaos + aether);
            this.dexterity = Math.floor(((10 * aether) + order) / material);
            firebase.database().ref('/Players/' + this.playerClass).update({
                playerClass: this.playerClass,
                action: this.action,
                physicalAttack: this.physicalDefense,
                physicalDefense: this.physicalDefense,
                dexterity: this.dexterity,
                specialDefense: this.specialDefense,
                specialAttack: this.specialAttack,
                hitpoints: this.hitpoints,
                currentHitpoints: this.currentHitpoints
            })
        },
        printStats: function() {
            console.log("---HIGHWAYMAN---");
            console.log("Current HP: " + this.currentHitpoints);
            console.log("PhysicalAttack: " + this.physicalAttack);
            console.log("physicalDefense: " + this.physicalDefense);
            console.log("specialAttack: " + this.specialAttack);
            console.log("specialDefense: " + this.specialDefense);
            console.log("Dexterity: " + this.dexterity);
            console.log("Action: " + this.action);
            console.log("");
        },
        AISelectAction: function(enemy) {
            this.action = "";
            var rng = (_.random(1, 100))
            if ((this.physicalAttack - enemy.physicalDefense) > (this.specialAttack - enemy.specialDefense)) {
                if (rng - (this.physicalAttack - enemy.physicalDefense) <= 0) {
                    rng = 1;
                } else {
                    rng -= (this.physicalAttack - enemy.physicalDefense);
                }
            }
            if ((this.physicalAttack - enemy.physicalDefense) < (this.specialAttack - enemy.specialDefense)) {
                if (rng + (this.specialAttack - enemy.specialDefense) >= 100) {
                    rng = 100;
                } else {
                    rng += (this.specialAttack - enemy.specialDefense);
                }
            }
            if (this.currentHitpoints - (enemy.physicalAttack - this.physicalDefense) <= 0 || this.currentHitpoints - (enemy.specialAttack - this.specialDefense) <= 0) {
                rng = (_.random(20, 80));
            }
            console.log(this.playerClass + "'s random number is " + rng);
            if (rng <= 33) {
                this.action = "strike";
            }
            if (rng >= 66) {
                this.action = "special";
            }
            if (rng < 66 && rng > 33) {
                this.action = "defend";
            }
        }
    },

    paragon: {
        playerClass: "Paragon",
        hitpoints: 120,
        currentHitpoints: 120,
        physicalAttack: 10,
        physicalDefense: 8,
        specialAttack: 6,
        specialDefense: 7,
        dexterity: 10,
        action: "",
        strike: function(enemy) {
            if (_.random(1, 100) > enemy.dexterity) {
                if (enemy.action == "defend") {
                    console.log(this.playerClass + " STRIKES for " + (this.physicalAttack - (enemy.physicalDefense * 2)) + " damage!")
                    enemy.currentHitpoints -= (this.physicalAttack - enemy.physicalDefense * 2);
                } else {
                    console.log(this.playerClass + " STRIKES for " + (this.physicalAttack - (enemy.physicalDefense)) + " damage!")
                    enemy.currentHitpoints -= (this.physicalAttack - enemy.physicalDefense);
                }
            } else {
                console.log(enemy.playerClass + " DODGED!");
            }
        },
        special: function(enemy) {
            if (_.random(1, 100) > enemy.dexterity) {
                if (enemy.action == "defend") {
                    console.log(this.playerClass + " uses their SPECIAL ATTACK for " + (this.specialAttack - (enemy.specialDefense * 2)) + " damage!")
                    enemy.currentHitpoints -= (this.specialAttack - enemy.specialDefense * 2);
                } else {
                    console.log(this.playerClass + " uses their SPECIAL ATTACK for " + (this.specialAttack - (enemy.specialDefense)) + " damage!")
                    enemy.currentHitpoints -= (this.specialAttack - enemy.specialDefense);
                }
            } else {
                console.log(enemy.playerClass + " DODGED!");
            }
        },
        cchangeStats: function(aether, material, chaos, order) {
            this.physicalAttack = Math.floor(order * material + 8);
            this.physicalDefense = Math.floor(((8 * material) + order) / (chaos * 2));
            this.specialAttack = Math.floor(chaos * aether + 6);
            this.specialDefense = Math.floor((7 + aether + chaos) / order);
            this.dexterity = Math.floor(4);
            firebase.database().ref('/Players/' + this.playerClass).update({
                playerClass: this.playerClass,
                action: this.action,
                physicalAttack: this.physicalDefense,
                physicalDefense: this.physicalDefense,
                dexterity: this.dexterity,
                specialDefense: this.specialDefense,
                specialAttack: this.specialAttack,
                hitpoints: this.hitpoints,
                currentHitpoints: this.currentHitpoints
            })
        },
        printStats: function() {
            console.log("---PARAGON---");
            console.log("Current HP: " + this.currentHitpoints);
            console.log("PhysicalAttack: " + this.physicalAttack);
            console.log("physicalDefense: " + this.physicalDefense);
            console.log("specialAttack: " + this.specialAttack);
            console.log("specialDefense: " + this.specialDefense);
            console.log("Dexterity: " + this.dexterity);
            console.log("Action: " + this.action);
            console.log("");
        },
        AISelectAction: function(enemy) {
            this.action = "";
            var rng = (_.random(1, 100))
            if ((this.physicalAttack - enemy.physicalDefense) > (this.specialAttack - enemy.specialDefense)) {
                if (rng - (this.physicalAttack - enemy.physicalDefense) <= 0) {
                    rng = 1;
                } else {
                    rng -= (this.physicalAttack - enemy.physicalDefense);
                }
            }
            if ((this.physicalAttack - enemy.physicalDefense) < (this.specialAttack - enemy.specialDefense)) {
                if (rng + (this.specialAttack - enemy.specialDefense) >= 100) {
                    rng = 100;
                } else {
                    rng += (this.specialAttack - enemy.specialDefense);
                }
            }
            if (this.currentHitpoints - (enemy.physicalAttack - this.physicalDefense) <= 0 || this.currentHitpoints - (enemy.specialAttack - this.specialDefense) <= 0) {
                rng = (_.random(20, 80));
            }
            console.log(this.playerClass + "'s random number is " + rng);
            if (rng <= 33) {
                this.action = "strike";
            }
            if (rng >= 66) {
                this.action = "special";
            }
            if (rng < 66 && rng > 33) {
                this.action = "defend";
            }
        }
    }
}

//Function which determines what action was taken by a champion and runs it
var fight = function(champions) {
    if (champions[0].action == "strike") {
        champions[0].strike(champions[1]);
    }
    if (champions[0].action == "special") {
        champions[0].special(champions[1]);
    }
    if (champions[1].action == "strike") {
        champions[1].strike(champions[0]);
    }
    if (champions[1].action == "special") {
        champions[1].special(champions[0]);
    }
}

//Environment object which controls the global variables
var environment = {
    rain: false,
    fog: false,
    lightning: false,
    sunshine: false,
    hail: false,
    wind: false,
    affectGlobal: function() {
        firebase.database().ref('/Globals/OnOff').update({
            rain: this.rain,
            fog: this.fog,
            lightning: this.lightning,
            sunshine: this.sunshine,
            hail: this.hail,
            wind: this.wind
        })
    }
}

firebase.database().ref('/Globals/Environment').on('value', function(snapshot) {
    var newGlobals = snapshot.val();
    players[1].changeStats(newGlobals.aether, newGlobals.material, newGlobals.chaos, newGlobals.order);
    players[0].changeStats(newGlobals.aether, newGlobals.material, newGlobals.chaos, newGlobals.order);
})

firebase.database().ref('/Globals/OnOff').on('value', function(snapshot) {
    var aether = 1;
    var material = 1;
    var chaos = 1;
    var order = 1;
    var onOff = snapshot.val();
    if (onOff.rain == true) {
        chaos += 1;
        material += 2;
    }
    if (onOff.fog == true) {
        aether += 2;
        order += 1;
    }
    if (onOff.lightning == true) {
        aether += 1;
        chaos += 2;
    }
    if (onOff.sunshine == true) {
        order += 2;
        material += 1;
    }
    if (onOff.hail == true) {
        aether += 2;
        material += 2;
    }
    if (onOff.wind == true) {
        order += 2;
        chaos += 2;
    }
    firebase.database().ref('/Globals/Environment').update({
        aether: aether,
        material: material,
        order: order,
        chaos: chaos
    })
})



var players = [champions.highwayman, champions.elementalist];

//Code to check the balancing of the champions. Not an actual part of the game.//
var player1Win = 0;
var player2Win = 0;

// Testing environment for checking the balancing of champions against one another. Runs 100 games with random global variables and prints how many games each champion won. Attempt to get as close to a 50-50 split as possible. 60-40 is acceptable.

// var hundredTests = function() {
//     for (var i = 0; i < 100; i++) {
//         var round = 1;
//         champions[0].currentHitpoints = players[0].hitpoints;
//         players[1].currentHitpoints = players[1].hitpoints;
//         while (players[0].currentHitpoints > 0 && players[1].currentHitpoints > 0) {
//             console.log('ROUND ' + round);
//             aether = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//             material = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//             chaos = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//             order = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//             console.log("Aether: " + aether);
//             console.log("Material: " + material);
//             console.log("Chaos: " + chaos);
//             console.log("Order: " + order);
//             console.log("");
//             players[1].changeStats(aether, material, chaos, order);
//             players[0].changeStats(aether, material, chaos, order);
//             players[1].AISelectAction(players[0]);
//             players[0].AISelectAction(players[1]);

//             fight(players);

//             players[0].printStats();
//             players[1].printStats();
//             if (players[0].currentHitpoints <= 0) {
//                 player2Win++;
//             }
//             if (players[1].currentHitpoints <= 0) {
//                 player1Win++;
//             }
//             round++;
//         }
//         console.log(i);
//         if (i == 99) {
//             console.log("Player 1 Wins: " + player1Win);
//             console.log("Player 2 Wins: " + player2Win);
//         }
//     }
// }

// hundredTests();

// Testing environment for one game. Global variables are randomized and the firebase timer element is included.

// var timer = {
//     number: 6,
//     round: 1,
//     run: function() {
//         if (players[0].currentHitpoints > 0 && players[1].currentHitpoints > 0) {
//             console.log('ROUND ' + this.round);
//             aether = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//             material = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//             chaos = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//             order = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//             console.log("Aether: " + aether);
//             console.log("Material: " + material);
//             console.log("Chaos: " + chaos);
//             console.log("Order: " + order);
//             console.log("");
//             this.round++;
//             firebase.database().ref("/Timer").set(true);
//             firebase.database().ref('/Globals/Environment').update({
//                 aether:aether,
//                 material:material,
//                 chaos:chaos,
//                 order:order
//             });
//             counter = setInterval(this.increment, 1000);
//         } else {
//             if (players[0].currentHitpoints <= 0) {
//                 console.log("Player 2 Wins");
//             }
//             if (players[1].currentHitpoints <= 0) {
//                 console.log("Player 1 Wins");
//             }
//         }
//     },
//     increment: function() {
//         timer.number--;
//         console.log(timer.number);
//         if (timer.number === 1) {
//             timer.stop();
//         }
//     },
//     stop: function() {
//         firebase.database().ref("/Timer").set(false);
//         players[0].printStats();
//         players[1].printStats();
//         clearInterval(counter);
//         fight(players);
//         timer.number = 6;
//         timer.run();
//     }
// }

// timer.run();
// console.log(timer.number);

var timer = {
    number: 6,
    round: 1,
    run: function() {
        if (players[0].currentHitpoints > 0 && players[1].currentHitpoints > 0) {
            console.log('ROUND ' + this.round);
            players[1].AISelectAction(players[0]);
            players[0].AISelectAction(players[1]);
            this.round++;
            firebase.database().ref("/Timer").set(true);
            counter = setInterval(this.increment, 1000);
        } else {
            if (players[0].currentHitpoints <= 0) {
                console.log("Player 2 Wins");
            }
            if (players[1].currentHitpoints <= 0) {
                console.log("Player 1 Wins");
            }
        }
    },
    increment: function() {
        timer.number--;
        for (var key in environment) {
            console.log(environment[key]);
            if (typeof environment[key] == "boolean") {
                if (_.random(1, 2) == 2) {
                    environment[key] = !environment[key];
                }
            }
        }
        environment.affectGlobal();
        console.log(timer.number);
        if (timer.number === 1) {
            timer.stop();
        }
    },
    stop: function() {
        firebase.database().ref("/Timer").set(false);
        players[0].printStats();
        players[1].printStats();
        clearInterval(counter);
        fight(players);
        timer.number = 6;
        timer.run();
    }
}

timer.run();
console.log(timer.number);