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
            template: "\n  <div class=\"center-block\">\n    <div *ngIf=\"ready!=true\">\n      <button class=\"center-block btn btn-primary\" (click)=\"readyToPlay()\">Ready to Play?</button>\n    </div>\n    <div *ngIf=\"ready==true\">\n      <p class=\"time-text text-center\">TIME REMAINING</p>\n      <p class=\"clock text-center\">{{remaining}}</p>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyL3RpbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyw2QkFBbUQsY0FBYyxDQUFDLENBQUE7QUFrQmxFO0lBZ0JFLHdCQUFZLEVBQWM7UUFoQjVCLGlCQTZJQztRQTVIRyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDaEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMvQixLQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFBO1FBQzlCLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZHLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3ZCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QixLQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsUUFBUSxFQUFDLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMxRyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUN6QixLQUFJLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUdELG1DQUFVLEdBQVY7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDZixRQUFRLEVBQUMsQ0FBQztnQkFDVixLQUFLLEVBQUMsQ0FBQzthQUNSLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNILENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixJQUFJLEtBQUssR0FBRyxlQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQ3hDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7b0JBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDekIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztJQUNILENBQUM7SUFHRCw4QkFBSyxHQUFMLFVBQU0sT0FBTyxFQUFDLE9BQU87UUFDbkIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQzdCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDMUQsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQSxDQUFDO29CQUM3QixPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JGLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ2pGLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzlCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDMUQsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQSxDQUFDO29CQUM3QixPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQy9FLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQzdCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDMUQsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQSxDQUFDO29CQUM3QixPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JGLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ2pGLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzlCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDMUQsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQSxDQUFDO29CQUM3QixPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQy9FLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDSCxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzFHLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0QsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQTNKSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsdVdBVVQ7U0FDRixDQUFDOztzQkFBQTtJQStJRixxQkFBQztBQUFELENBN0lBLEFBNklDLElBQUE7QUE3SVksc0JBQWMsaUJBNkkxQixDQUFBIiwiZmlsZSI6InRpbWVyL3RpbWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtBbmd1bGFyRmlyZSxGaXJlYmFzZU9iamVjdE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0aW1lcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiY2VudGVyLWJsb2NrXCI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwicmVhZHkhPXRydWVcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNlbnRlci1ibG9jayBidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwicmVhZHlUb1BsYXkoKVwiPlJlYWR5IHRvIFBsYXk/PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJyZWFkeT09dHJ1ZVwiPlxyXG4gICAgICA8cCBjbGFzcz1cInRpbWUtdGV4dCB0ZXh0LWNlbnRlclwiPlRJTUUgUkVNQUlOSU5HPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cImNsb2NrIHRleHQtY2VudGVyXCI+e3tyZW1haW5pbmd9fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lckNvbXBvbmVudHtcclxuICBmaXJlYmFzZUNsb2NrOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIGZpcmViYXNlU2VydmVyOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIFVSTDpzdHJpbmc7XHJcbiAgZ2FtZUNsb2NrOiB7XHJcbiAgICBkdXJhdGlvbjpudW1iZXIsXHJcbiAgICB0aWNrczpudW1iZXJcclxuICB9O1xyXG4gIHBsYXllcnNJbmZvOmFueTtcclxuICBlbnZpcm9ubWVudEluZm86YW55O1xyXG4gIHRpbWVyU3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgcmVtYWluaW5nOm51bWJlcjtcclxuICBob3N0OmJvb2xlYW47XHJcbiAgcmVhZHk6Ym9vbGVhbjtcclxuICBwbGF5ZXJzUmVhZHk6bnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhZjpBbmd1bGFyRmlyZSl7XHJcbiAgICB0aGlzLlVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZlciA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdLHtwcmVzZXJ2ZVNuYXBzaG90OnRydWV9KTtcclxuICAgICAgdGhpcy5maXJlYmFzZVNlcnZlci5zdWJzY3JpYmUoc25hcCA9PntcclxuICAgICAgICB0aGlzLnBsYXllcnNJbmZvID0gc25hcC52YWwoKS5QbGF5ZXJzO1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnRJbmZvID0gc25hcC52YWwoKS5HbG9iYWxzLkVudmlyb25tZW50O1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuZmlyZWJhc2VDbG9jayA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdK1wiL1RpbWVyXCIse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgdGhpcy5maXJlYmFzZUNsb2NrLnN1YnNjcmliZShzbmFwID0+e1xyXG4gICAgICB0aGlzLnJlbWFpbmluZz1zbmFwLnZhbCgpO30pXHJcbiAgICBjb25zdCB0d29QbGF5ZXJzID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rXCIvT3BlblwiLHtwcmVzZXJ2ZVNuYXBzaG90OnRydWV9KTtcclxuICAgIHR3b1BsYXllcnMuc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIGlmKHNuYXAudmFsKCk9PXRydWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNuYXAudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuaG9zdD10cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgcmVhZHlUb1N0YXJ0ID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rXCIvUmVhZHlcIix7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICByZWFkeVRvU3RhcnQuc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIHRoaXMucGxheWVyc1JlYWR5PXNuYXAudmFsKCk7XHJcbiAgICAgIGlmKHNuYXAudmFsKCk9PTIpe1xyXG4gICAgICAgIHRoaXMucmVzZXRDbG9jaygpO1xyXG4gICAgICAgIHRoaXMucnVuQ2xvY2soKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICAvL1RpbWVyIGZ1bmN0aW9uYWxpdHlcclxuICByZXNldENsb2NrKCl7XHJcbiAgICBpZih0aGlzLmhvc3Q9PXRydWUpe1xyXG4gICAgICB0aGlzLmdhbWVDbG9jayA9IHsgXHJcbiAgICAgICAgZHVyYXRpb246NSxcclxuICAgICAgICB0aWNrczowXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wQ2xvY2soKXtcclxuICAgIGlmKHRoaXMuaG9zdD09dHJ1ZSl7XHJcbiAgICAgIHRoaXMucmVzZXRDbG9jaygpO1xyXG4gICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuZmlnaHQodGhpcy5wbGF5ZXJzSW5mby5wbGF5ZXIxLHRoaXMucGxheWVyc0luZm8ucGxheWVyMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBydW5DbG9jaygpe1xyXG4gICAgaWYodGhpcy5ob3N0PT10cnVlKXtcclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgaW4gaGVyZVwiKTtcclxuICAgICAgbGV0IHRpbWVyID0gT2JzZXJ2YWJsZS50aW1lcigwLDEwMDApO1xyXG4gICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uID0gdGltZXIuc3Vic2NyaWJlKHQ9PntcclxuICAgICAgICBpZih0IDw9IHRoaXMuZ2FtZUNsb2NrLmR1cmF0aW9uKXtcclxuICAgICAgICAgIHRoaXMuZ2FtZUNsb2NrLnRpY2tzID0gdDtcclxuICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2ZXIudXBkYXRlKHtUaW1lcjp0aGlzLmdhbWVDbG9jay5kdXJhdGlvbi10aGlzLmdhbWVDbG9jay50aWNrc30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BDbG9jaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vR2FtZXBsYXkgZnVuY3Rpb25hbGl0eVxyXG4gIGZpZ2h0KHBsYXllcjEscGxheWVyMil7XHJcbiAgICBpZihwbGF5ZXIxLmFjdGlvbiA9PSBcInN0cmlrZVwiKXtcclxuICAgICAgaWYoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigxMDAtMCsxKSsxKT5wbGF5ZXIyLmRleHRlcml0eSl7XHJcbiAgICAgICAgaWYocGxheWVyMi5hY3Rpb24gPT0gXCJkZWZlbmRcIil7XHJcbiAgICAgICAgICBwbGF5ZXIyLmN1cnJlbnRIaXRwb2ludHMgLT0gKHBsYXllcjEucGh5c2ljYWxBdHRhY2sgLSBwbGF5ZXIyLnBoeXNpY2FsRGVmZW5zZSAqIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwbGF5ZXIyLmN1cnJlbnRIaXRwb2ludHMgLT0gKHBsYXllcjEucGh5c2ljYWxBdHRhY2sgLSBwbGF5ZXIyLnBoeXNpY2FsRGVmZW5zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUExBWUVSIDIgRE9ER0VEIVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYocGxheWVyMS5hY3Rpb24gPT0gXCJzcGVjaWFsXCIpe1xyXG4gICAgICBpZihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDEwMC0wKzEpKzEpPnBsYXllcjIuZGV4dGVyaXR5KXtcclxuICAgICAgICBpZihwbGF5ZXIyLmFjdGlvbiA9PSBcImRlZmVuZFwiKXtcclxuICAgICAgICAgIHBsYXllcjIuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMS5zcGVjaWFsQXR0YWNrIC0gcGxheWVyMi5zcGVjaWFsRGVmZW5zZSAqIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwbGF5ZXIyLmN1cnJlbnRIaXRwb2ludHMgLT0gKHBsYXllcjEuc3BlY2lhbEF0dGFjayAtIHBsYXllcjIuc3BlY2lhbERlZmVuc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBMQVlFUiAyIERPREdFRCFcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHBsYXllcjIuYWN0aW9uID09IFwic3RyaWtlXCIpe1xyXG4gICAgICBpZihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDEwMC0wKzEpKzEpPnBsYXllcjEuZGV4dGVyaXR5KXtcclxuICAgICAgICBpZihwbGF5ZXIxLmFjdGlvbiA9PSBcImRlZmVuZFwiKXtcclxuICAgICAgICAgIHBsYXllcjEuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMi5waHlzaWNhbEF0dGFjayAtIHBsYXllcjEucGh5c2ljYWxEZWZlbnNlICogMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBsYXllcjEuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMi5waHlzaWNhbEF0dGFjayAtIHBsYXllcjEucGh5c2ljYWxEZWZlbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTEFZRVIgMSBET0RHRUQhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihwbGF5ZXIyLmFjdGlvbiA9PSBcInNwZWNpYWxcIil7XHJcbiAgICAgIGlmKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooMTAwLTArMSkrMSk+cGxheWVyMS5kZXh0ZXJpdHkpe1xyXG4gICAgICAgIGlmKHBsYXllcjEuYWN0aW9uID09IFwiZGVmZW5kXCIpe1xyXG4gICAgICAgICAgcGxheWVyMS5jdXJyZW50SGl0cG9pbnRzIC09IChwbGF5ZXIyLnNwZWNpYWxBdHRhY2sgLSBwbGF5ZXIxLnNwZWNpYWxEZWZlbnNlICogMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBsYXllcjEuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMi5zcGVjaWFsQXR0YWNrIC0gcGxheWVyMS5zcGVjaWFsRGVmZW5zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUExBWUVSIDEgRE9ER0VEIVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIHRoaXMuZmlyZWJhc2VTZXJ2ZXIudXBkYXRlKHtQbGF5ZXJzOntwbGF5ZXIxOnRoaXMucGxheWVyc0luZm8ucGxheWVyMSxwbGF5ZXIyOnRoaXMucGxheWVyc0luZm8ucGxheWVyMn19KTtcclxuICBpZihwbGF5ZXIxLmN1cnJlbnRIaXRwb2ludHMgPD0gMCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBMQVlFUiAyIFdJTlMhXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZihwbGF5ZXIyLmN1cnJlbnRIaXRwb2ludHMgPD0gMCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBMQVlFUiAxIFdJTlMhXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnJ1bkNsb2NrKCk7XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZHlUb1BsYXkoKXtcclxuICAgIHRoaXMucmVhZHk9dHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyc1JlYWR5KTtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2ZXIudXBkYXRlKHtSZWFkeTp0aGlzLnBsYXllcnNSZWFkeSsxfSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
