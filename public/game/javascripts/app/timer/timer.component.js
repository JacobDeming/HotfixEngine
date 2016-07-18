"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var angularfire2_1 = require('angularfire2');
var TimerComponent = (function () {
    function TimerComponent(af) {
        var _this = this;
        this.URL = window.location.href;
        this.firebaseServer = af.database.object('/' + this.URL.split('/game/')[1], { preserveSnapshot: true });
        this.firebaseServer.subscribe(function (snap) {
            _this.playersInfo = snap.val().Players;
            _this.environmentInfo = snap.val().Globals.Environment;
        });
        this.firebaseClock = af.database.object('/' + this.URL.split('/game/')[1] + "/Timer", { preserveSnapshot: true });
        this.firebaseClock.subscribe(function (snap) {
            _this.remaining = snap.val();
        });
        var twoPlayers = af.database.object('/' + this.URL.split('/game/')[1] + "/Open", { preserveSnapshot: true });
        twoPlayers.subscribe(function (snap) {
            if (snap.val() == true) {
                console.log(snap.val());
                _this.host = true;
            }
        });
        var readyToStart = af.database.object('/' + this.URL.split('/game/')[1] + "/Ready", { preserveSnapshot: true });
        readyToStart.subscribe(function (snap) {
            _this.playersReady = snap.val();
            if (snap.val() == 2) {
                _this.resetClock();
                _this.runClock();
            }
        });
    }
    TimerComponent.prototype.resetClock = function () {
        if (this.host == true) {
            this.gameClock = {
                duration: 5,
                ticks: 0
            };
        }
    };
    TimerComponent.prototype.stopClock = function () {
        if (this.host == true) {
            this.resetClock();
            this.timerSubscription.unsubscribe();
            this.fight(this.playersInfo.player1, this.playersInfo.player2);
        }
    };
    TimerComponent.prototype.runClock = function () {
        var _this = this;
        if (this.host == true) {
            console.log("Got in here");
            var timer = Rx_1.Observable.timer(0, 1000);
            this.timerSubscription = timer.subscribe(function (t) {
                if (t <= _this.gameClock.duration) {
                    _this.gameClock.ticks = t;
                    _this.firebaseServer.update({ Timer: _this.gameClock.duration - _this.gameClock.ticks });
                }
                else {
                    _this.stopClock();
                }
            });
        }
    };
    TimerComponent.prototype.fight = function (player1, player2) {
        if (player1.action == "strike") {
            if (Math.floor(Math.random() * (100 - 0 + 1) + 1) > player2.dexterity) {
                if (player2.action == "defend") {
                    player2.currentHitpoints -= (player1.physicalAttack - player2.physicalDefense * 2);
                }
                else {
                    player2.currentHitpoints -= (player1.physicalAttack - player2.physicalDefense);
                }
            }
            else {
                console.log("PLAYER 2 DODGED!");
            }
        }
        if (player1.action == "special") {
            if (Math.floor(Math.random() * (100 - 0 + 1) + 1) > player2.dexterity) {
                if (player2.action == "defend") {
                    player2.currentHitpoints -= (player1.specialAttack - player2.specialDefense * 2);
                }
                else {
                    player2.currentHitpoints -= (player1.specialAttack - player2.specialDefense);
                }
            }
            else {
                console.log("PLAYER 2 DODGED!");
            }
        }
        if (player2.action == "strike") {
            if (Math.floor(Math.random() * (100 - 0 + 1) + 1) > player1.dexterity) {
                if (player1.action == "defend") {
                    player1.currentHitpoints -= (player2.physicalAttack - player1.physicalDefense * 2);
                }
                else {
                    player1.currentHitpoints -= (player2.physicalAttack - player1.physicalDefense);
                }
            }
            else {
                console.log("PLAYER 1 DODGED!");
            }
        }
        if (player2.action == "special") {
            if (Math.floor(Math.random() * (100 - 0 + 1) + 1) > player1.dexterity) {
                if (player1.action == "defend") {
                    player1.currentHitpoints -= (player2.specialAttack - player1.specialDefense * 2);
                }
                else {
                    player1.currentHitpoints -= (player2.specialAttack - player1.specialDefense);
                }
            }
            else {
                console.log("PLAYER 1 DODGED!");
            }
        }
        this.firebaseServer.update({ Players: { player1: this.playersInfo.player1, player2: this.playersInfo.player2 } });
        if (player1.currentHitpoints <= 0) {
            console.log("PLAYER 2 WINS!");
            return;
        }
        if (player2.currentHitpoints <= 0) {
            console.log("PLAYER 1 WINS!");
            return;
        }
        else {
            this.runClock();
        }
    };
    TimerComponent.prototype.readyToPlay = function () {
        this.ready = true;
        console.log(this.playersReady);
        this.firebaseServer.update({ Ready: this.playersReady + 1 });
    };
    TimerComponent = __decorate([
        core_1.Component({
            selector: 'timer',
            template: "\n  <div *ngIf=\"ready!=true\">\n    <button (click)=\"readyToPlay()\">Ready to Play?</button>\n  </div>\n  <div *ngIf=\"ready==true\">\n    <p> Ticks: {{remaining}}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyL3RpbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyw2QkFBbUQsY0FBYyxDQUFDLENBQUE7QUFlbEU7SUFnQkUsd0JBQVksRUFBYztRQWhCNUIsaUJBNklDO1FBNUhHLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNoQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDdEMsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLFFBQVEsRUFBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQy9CLEtBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQUEsQ0FBQyxDQUFDLENBQUE7UUFDOUIsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLE9BQU8sRUFBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDdkcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDdkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO1lBQ2pCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzFHLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3pCLEtBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzdCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNoQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBR0QsbUNBQVUsR0FBVjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHO2dCQUNmLFFBQVEsRUFBQyxDQUFDO2dCQUNWLEtBQUssRUFBQyxDQUFDO2FBQ1IsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLElBQUksS0FBSyxHQUFHLGVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztnQkFDeEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztvQkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUdELDhCQUFLLEdBQUwsVUFBTSxPQUFPLEVBQUMsT0FBTztRQUNuQixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUMxRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7b0JBQzdCLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckYsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDakYsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDOUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUMxRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7b0JBQzdCLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUMxRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7b0JBQzdCLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckYsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDakYsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDOUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUMxRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7b0JBQzdCLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUMsRUFBQyxDQUFDLENBQUM7UUFDMUcsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDRCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxZQUFZLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBeEpIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSx5TEFPVDtTQUNGLENBQUM7O3NCQUFBO0lBK0lGLHFCQUFDO0FBQUQsQ0E3SUEsQUE2SUMsSUFBQTtBQTdJWSxzQkFBYyxpQkE2STFCLENBQUEiLCJmaWxlIjoidGltZXIvdGltZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0lucHV0LE91dHB1dCxFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RpbWVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgKm5nSWY9XCJyZWFkeSE9dHJ1ZVwiPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicmVhZHlUb1BsYXkoKVwiPlJlYWR5IHRvIFBsYXk/PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cInJlYWR5PT10cnVlXCI+XHJcbiAgICA8cD4gVGlja3M6IHt7cmVtYWluaW5nfX08L3A+XHJcbiAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyQ29tcG9uZW50e1xyXG4gIGZpcmViYXNlQ2xvY2s6RmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47XHJcbiAgZmlyZWJhc2VTZXJ2ZXI6RmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47XHJcbiAgVVJMOnN0cmluZztcclxuICBnYW1lQ2xvY2s6IHtcclxuICAgIGR1cmF0aW9uOm51bWJlcixcclxuICAgIHRpY2tzOm51bWJlclxyXG4gIH07XHJcbiAgcGxheWVyc0luZm86YW55O1xyXG4gIGVudmlyb25tZW50SW5mbzphbnk7XHJcbiAgdGltZXJTdWJzY3JpcHRpb246IGFueTtcclxuICByZW1haW5pbmc6bnVtYmVyO1xyXG4gIGhvc3Q6Ym9vbGVhbjtcclxuICByZWFkeTpib29sZWFuO1xyXG4gIHBsYXllcnNSZWFkeTpudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFmOkFuZ3VsYXJGaXJlKXtcclxuICAgIHRoaXMuVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmVyID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0se3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgICB0aGlzLmZpcmViYXNlU2VydmVyLnN1YnNjcmliZShzbmFwID0+e1xyXG4gICAgICAgIHRoaXMucGxheWVyc0luZm8gPSBzbmFwLnZhbCgpLlBsYXllcnM7XHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudEluZm8gPSBzbmFwLnZhbCgpLkdsb2JhbHMuRW52aXJvbm1lbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5maXJlYmFzZUNsb2NrID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rXCIvVGltZXJcIix7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLmZpcmViYXNlQ2xvY2suc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIHRoaXMucmVtYWluaW5nPXNuYXAudmFsKCk7fSlcclxuICAgIGNvbnN0IHR3b1BsYXllcnMgPSBhZi5kYXRhYmFzZS5vYmplY3QoJy8nK3RoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXStcIi9PcGVuXCIse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgdHdvUGxheWVycy5zdWJzY3JpYmUoc25hcCA9PntcclxuICAgICAgaWYoc25hcC52YWwoKT09dHJ1ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coc25hcC52YWwoKSk7XHJcbiAgICAgICAgdGhpcy5ob3N0PXRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCByZWFkeVRvU3RhcnQgPSBhZi5kYXRhYmFzZS5vYmplY3QoJy8nK3RoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXStcIi9SZWFkeVwiLHtwcmVzZXJ2ZVNuYXBzaG90OnRydWV9KTtcclxuICAgIHJlYWR5VG9TdGFydC5zdWJzY3JpYmUoc25hcCA9PntcclxuICAgICAgdGhpcy5wbGF5ZXJzUmVhZHk9c25hcC52YWwoKTtcclxuICAgICAgaWYoc25hcC52YWwoKT09Mil7XHJcbiAgICAgICAgdGhpcy5yZXNldENsb2NrKCk7XHJcbiAgICAgICAgdGhpcy5ydW5DbG9jaygpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIC8vVGltZXIgZnVuY3Rpb25hbGl0eVxyXG4gIHJlc2V0Q2xvY2soKXtcclxuICAgIGlmKHRoaXMuaG9zdD09dHJ1ZSl7XHJcbiAgICAgIHRoaXMuZ2FtZUNsb2NrID0geyBcclxuICAgICAgICBkdXJhdGlvbjo1LFxyXG4gICAgICAgIHRpY2tzOjBcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BDbG9jaygpe1xyXG4gICAgaWYodGhpcy5ob3N0PT10cnVlKXtcclxuICAgICAgdGhpcy5yZXNldENsb2NrKCk7XHJcbiAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5maWdodCh0aGlzLnBsYXllcnNJbmZvLnBsYXllcjEsdGhpcy5wbGF5ZXJzSW5mby5wbGF5ZXIyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJ1bkNsb2NrKCl7XHJcbiAgICBpZih0aGlzLmhvc3Q9PXRydWUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBpbiBoZXJlXCIpO1xyXG4gICAgICBsZXQgdGltZXIgPSBPYnNlcnZhYmxlLnRpbWVyKDAsMTAwMCk7XHJcbiAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24gPSB0aW1lci5zdWJzY3JpYmUodD0+e1xyXG4gICAgICAgIGlmKHQgPD0gdGhpcy5nYW1lQ2xvY2suZHVyYXRpb24pe1xyXG4gICAgICAgICAgdGhpcy5nYW1lQ2xvY2sudGlja3MgPSB0O1xyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZlci51cGRhdGUoe1RpbWVyOnRoaXMuZ2FtZUNsb2NrLmR1cmF0aW9uLXRoaXMuZ2FtZUNsb2NrLnRpY2tzfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RvcENsb2NrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9HYW1lcGxheSBmdW5jdGlvbmFsaXR5XHJcbiAgZmlnaHQocGxheWVyMSxwbGF5ZXIyKXtcclxuICAgIGlmKHBsYXllcjEuYWN0aW9uID09IFwic3RyaWtlXCIpe1xyXG4gICAgICBpZihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDEwMC0wKzEpKzEpPnBsYXllcjIuZGV4dGVyaXR5KXtcclxuICAgICAgICBpZihwbGF5ZXIyLmFjdGlvbiA9PSBcImRlZmVuZFwiKXtcclxuICAgICAgICAgIHBsYXllcjIuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMS5waHlzaWNhbEF0dGFjayAtIHBsYXllcjIucGh5c2ljYWxEZWZlbnNlICogMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBsYXllcjIuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMS5waHlzaWNhbEF0dGFjayAtIHBsYXllcjIucGh5c2ljYWxEZWZlbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTEFZRVIgMiBET0RHRUQhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihwbGF5ZXIxLmFjdGlvbiA9PSBcInNwZWNpYWxcIil7XHJcbiAgICAgIGlmKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooMTAwLTArMSkrMSk+cGxheWVyMi5kZXh0ZXJpdHkpe1xyXG4gICAgICAgIGlmKHBsYXllcjIuYWN0aW9uID09IFwiZGVmZW5kXCIpe1xyXG4gICAgICAgICAgcGxheWVyMi5jdXJyZW50SGl0cG9pbnRzIC09IChwbGF5ZXIxLnNwZWNpYWxBdHRhY2sgLSBwbGF5ZXIyLnNwZWNpYWxEZWZlbnNlICogMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBsYXllcjIuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMS5zcGVjaWFsQXR0YWNrIC0gcGxheWVyMi5zcGVjaWFsRGVmZW5zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUExBWUVSIDIgRE9ER0VEIVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYocGxheWVyMi5hY3Rpb24gPT0gXCJzdHJpa2VcIil7XHJcbiAgICAgIGlmKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooMTAwLTArMSkrMSk+cGxheWVyMS5kZXh0ZXJpdHkpe1xyXG4gICAgICAgIGlmKHBsYXllcjEuYWN0aW9uID09IFwiZGVmZW5kXCIpe1xyXG4gICAgICAgICAgcGxheWVyMS5jdXJyZW50SGl0cG9pbnRzIC09IChwbGF5ZXIyLnBoeXNpY2FsQXR0YWNrIC0gcGxheWVyMS5waHlzaWNhbERlZmVuc2UgKiAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGxheWVyMS5jdXJyZW50SGl0cG9pbnRzIC09IChwbGF5ZXIyLnBoeXNpY2FsQXR0YWNrIC0gcGxheWVyMS5waHlzaWNhbERlZmVuc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBMQVlFUiAxIERPREdFRCFcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHBsYXllcjIuYWN0aW9uID09IFwic3BlY2lhbFwiKXtcclxuICAgICAgaWYoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigxMDAtMCsxKSsxKT5wbGF5ZXIxLmRleHRlcml0eSl7XHJcbiAgICAgICAgaWYocGxheWVyMS5hY3Rpb24gPT0gXCJkZWZlbmRcIil7XHJcbiAgICAgICAgICBwbGF5ZXIxLmN1cnJlbnRIaXRwb2ludHMgLT0gKHBsYXllcjIuc3BlY2lhbEF0dGFjayAtIHBsYXllcjEuc3BlY2lhbERlZmVuc2UgKiAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGxheWVyMS5jdXJyZW50SGl0cG9pbnRzIC09IChwbGF5ZXIyLnNwZWNpYWxBdHRhY2sgLSBwbGF5ZXIxLnNwZWNpYWxEZWZlbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTEFZRVIgMSBET0RHRUQhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgdGhpcy5maXJlYmFzZVNlcnZlci51cGRhdGUoe1BsYXllcnM6e3BsYXllcjE6dGhpcy5wbGF5ZXJzSW5mby5wbGF5ZXIxLHBsYXllcjI6dGhpcy5wbGF5ZXJzSW5mby5wbGF5ZXIyfX0pO1xyXG4gIGlmKHBsYXllcjEuY3VycmVudEhpdHBvaW50cyA8PSAwKXtcclxuICAgIGNvbnNvbGUubG9nKFwiUExBWUVSIDIgV0lOUyFcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmKHBsYXllcjIuY3VycmVudEhpdHBvaW50cyA8PSAwKXtcclxuICAgIGNvbnNvbGUubG9nKFwiUExBWUVSIDEgV0lOUyFcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMucnVuQ2xvY2soKTtcclxuICB9XHJcbiAgfVxyXG5cclxuICByZWFkeVRvUGxheSgpe1xyXG4gICAgdGhpcy5yZWFkeT10cnVlO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXJzUmVhZHkpO1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZlci51cGRhdGUoe1JlYWR5OnRoaXMucGxheWVyc1JlYWR5KzF9KTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
