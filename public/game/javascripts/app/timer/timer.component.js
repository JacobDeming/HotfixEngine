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
                _this.host = true;
            }
            if (snap.val() == false) {
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
        }
        if (player2.currentHitpoints <= 0) {
            console.log("PLAYER 1 WINS!");
        }
        else {
            this.runClock();
        }
    };
    TimerComponent = __decorate([
        core_1.Component({
            selector: 'timer',
            template: "\n  <div *ngIf=\"remaining\">\n    <p> Ticks: {{remaining}}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyL3RpbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyw2QkFBbUQsY0FBYyxDQUFDLENBQUE7QUFZbEU7SUFjRSx3QkFBWSxFQUFjO1FBZDVCLGlCQTZIQztRQTlHRyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDaEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMvQixLQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFBO1FBQzlCLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZHLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3ZCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixLQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztZQUNqQixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFFLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxtQ0FBVSxHQUFWO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsUUFBUSxFQUFDLENBQUM7Z0JBQ1YsS0FBSyxFQUFDLENBQUM7YUFDUixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLENBQUM7SUFDSCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsSUFBSSxLQUFLLEdBQUcsZUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO2dCQUN4QyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO29CQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7SUFDSCxDQUFDO0lBR0QsOEJBQUssR0FBTCxVQUFNLE9BQU8sRUFBQyxPQUFPO1FBQ25CLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQztZQUM3QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQzFELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO1lBQ0gsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0gsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUM5QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQzFELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDO1lBQ0gsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0gsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQztZQUM3QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQzFELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO1lBQ0gsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0gsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUM5QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQzFELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDO1lBQ0gsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0gsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBQyxFQUFDLENBQUMsQ0FBQztRQUMxRyxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNELENBQUM7SUFySUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLCtFQUlUO1NBQ0YsQ0FBQzs7c0JBQUE7SUErSEYscUJBQUM7QUFBRCxDQTdIQSxBQTZIQyxJQUFBO0FBN0hZLHNCQUFjLGlCQTZIMUIsQ0FBQSIsImZpbGUiOiJ0aW1lci90aW1lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7QW5ndWxhckZpcmUsRmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlfSBmcm9tICdhbmd1bGFyZmlyZTInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGltZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiAqbmdJZj1cInJlbWFpbmluZ1wiPlxyXG4gICAgPHA+IFRpY2tzOiB7e3JlbWFpbmluZ319PC9wPlxyXG4gIDwvZGl2PlxyXG4gIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lckNvbXBvbmVudHtcclxuICBmaXJlYmFzZUNsb2NrOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIGZpcmViYXNlU2VydmVyOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIFVSTDpzdHJpbmc7XHJcbiAgZ2FtZUNsb2NrOiB7XHJcbiAgICBkdXJhdGlvbjpudW1iZXIsXHJcbiAgICB0aWNrczpudW1iZXJcclxuICB9O1xyXG4gIHBsYXllcnNJbmZvOmFueTtcclxuICBlbnZpcm9ubWVudEluZm86YW55O1xyXG4gIHRpbWVyU3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgcmVtYWluaW5nOm51bWJlcjtcclxuICBob3N0OmJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFmOkFuZ3VsYXJGaXJlKXtcclxuICAgIHRoaXMuVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmVyID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0se3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgICB0aGlzLmZpcmViYXNlU2VydmVyLnN1YnNjcmliZShzbmFwID0+e1xyXG4gICAgICAgIHRoaXMucGxheWVyc0luZm8gPSBzbmFwLnZhbCgpLlBsYXllcnM7XHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudEluZm8gPSBzbmFwLnZhbCgpLkdsb2JhbHMuRW52aXJvbm1lbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5maXJlYmFzZUNsb2NrID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rXCIvVGltZXJcIix7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLmZpcmViYXNlQ2xvY2suc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIHRoaXMucmVtYWluaW5nPXNuYXAudmFsKCk7fSlcclxuICAgIGNvbnN0IHR3b1BsYXllcnMgPSBhZi5kYXRhYmFzZS5vYmplY3QoJy8nK3RoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXStcIi9PcGVuXCIse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgdHdvUGxheWVycy5zdWJzY3JpYmUoc25hcCA9PntcclxuICAgICAgaWYoc25hcC52YWwoKT09dHJ1ZSl7XHJcbiAgICAgICAgdGhpcy5ob3N0PXRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYoc25hcC52YWwoKT09ZmFsc2Upe1xyXG4gICAgICAgIHRoaXMucmVzZXRDbG9jaygpO1xyXG4gICAgICAgIHRoaXMucnVuQ2xvY2soKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vVGltZXIgZnVuY3Rpb25hbGl0eVxyXG4gIHJlc2V0Q2xvY2soKXtcclxuICAgIGlmKHRoaXMuaG9zdD09dHJ1ZSl7XHJcbiAgICAgIHRoaXMuZ2FtZUNsb2NrID0geyBcclxuICAgICAgICBkdXJhdGlvbjo1LFxyXG4gICAgICAgIHRpY2tzOjBcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BDbG9jaygpe1xyXG4gICAgaWYodGhpcy5ob3N0PT10cnVlKXtcclxuICAgICAgdGhpcy5yZXNldENsb2NrKCk7XHJcbiAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5maWdodCh0aGlzLnBsYXllcnNJbmZvLnBsYXllcjEsdGhpcy5wbGF5ZXJzSW5mby5wbGF5ZXIyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJ1bkNsb2NrKCl7XHJcbiAgICBpZih0aGlzLmhvc3Q9PXRydWUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBpbiBoZXJlXCIpO1xyXG4gICAgICBsZXQgdGltZXIgPSBPYnNlcnZhYmxlLnRpbWVyKDAsMTAwMCk7XHJcbiAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24gPSB0aW1lci5zdWJzY3JpYmUodD0+e1xyXG4gICAgICAgIGlmKHQgPD0gdGhpcy5nYW1lQ2xvY2suZHVyYXRpb24pe1xyXG4gICAgICAgICAgdGhpcy5nYW1lQ2xvY2sudGlja3MgPSB0O1xyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZlci51cGRhdGUoe1RpbWVyOnRoaXMuZ2FtZUNsb2NrLmR1cmF0aW9uLXRoaXMuZ2FtZUNsb2NrLnRpY2tzfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RvcENsb2NrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9HYW1lcGxheSBmdW5jdGlvbmFsaXR5XHJcbiAgZmlnaHQocGxheWVyMSxwbGF5ZXIyKXtcclxuICAgIGlmKHBsYXllcjEuYWN0aW9uID09IFwic3RyaWtlXCIpe1xyXG4gICAgICBpZihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDEwMC0wKzEpKzEpPnBsYXllcjIuZGV4dGVyaXR5KXtcclxuICAgICAgICBpZihwbGF5ZXIyLmFjdGlvbiA9PSBcImRlZmVuZFwiKXtcclxuICAgICAgICAgIHBsYXllcjIuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMS5waHlzaWNhbEF0dGFjayAtIHBsYXllcjIucGh5c2ljYWxEZWZlbnNlICogMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBsYXllcjIuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMS5waHlzaWNhbEF0dGFjayAtIHBsYXllcjIucGh5c2ljYWxEZWZlbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTEFZRVIgMiBET0RHRUQhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihwbGF5ZXIxLmFjdGlvbiA9PSBcInNwZWNpYWxcIil7XHJcbiAgICAgIGlmKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooMTAwLTArMSkrMSk+cGxheWVyMi5kZXh0ZXJpdHkpe1xyXG4gICAgICAgIGlmKHBsYXllcjIuYWN0aW9uID09IFwiZGVmZW5kXCIpe1xyXG4gICAgICAgICAgcGxheWVyMi5jdXJyZW50SGl0cG9pbnRzIC09IChwbGF5ZXIxLnNwZWNpYWxBdHRhY2sgLSBwbGF5ZXIyLnNwZWNpYWxEZWZlbnNlICogMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBsYXllcjIuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMS5zcGVjaWFsQXR0YWNrIC0gcGxheWVyMi5zcGVjaWFsRGVmZW5zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUExBWUVSIDIgRE9ER0VEIVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYocGxheWVyMi5hY3Rpb24gPT0gXCJzdHJpa2VcIil7XHJcbiAgICAgIGlmKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooMTAwLTArMSkrMSk+cGxheWVyMS5kZXh0ZXJpdHkpe1xyXG4gICAgICAgIGlmKHBsYXllcjEuYWN0aW9uID09IFwiZGVmZW5kXCIpe1xyXG4gICAgICAgICAgcGxheWVyMS5jdXJyZW50SGl0cG9pbnRzIC09IChwbGF5ZXIyLnBoeXNpY2FsQXR0YWNrIC0gcGxheWVyMS5waHlzaWNhbERlZmVuc2UgKiAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGxheWVyMS5jdXJyZW50SGl0cG9pbnRzIC09IChwbGF5ZXIyLnBoeXNpY2FsQXR0YWNrIC0gcGxheWVyMS5waHlzaWNhbERlZmVuc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBMQVlFUiAxIERPREdFRCFcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHBsYXllcjIuYWN0aW9uID09IFwic3BlY2lhbFwiKXtcclxuICAgICAgaWYoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigxMDAtMCsxKSsxKT5wbGF5ZXIxLmRleHRlcml0eSl7XHJcbiAgICAgICAgaWYocGxheWVyMS5hY3Rpb24gPT0gXCJkZWZlbmRcIil7XHJcbiAgICAgICAgICBwbGF5ZXIxLmN1cnJlbnRIaXRwb2ludHMgLT0gKHBsYXllcjIuc3BlY2lhbEF0dGFjayAtIHBsYXllcjEuc3BlY2lhbERlZmVuc2UgKiAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGxheWVyMS5jdXJyZW50SGl0cG9pbnRzIC09IChwbGF5ZXIyLnNwZWNpYWxBdHRhY2sgLSBwbGF5ZXIxLnNwZWNpYWxEZWZlbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTEFZRVIgMSBET0RHRUQhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgdGhpcy5maXJlYmFzZVNlcnZlci51cGRhdGUoe1BsYXllcnM6e3BsYXllcjE6dGhpcy5wbGF5ZXJzSW5mby5wbGF5ZXIxLHBsYXllcjI6dGhpcy5wbGF5ZXJzSW5mby5wbGF5ZXIyfX0pO1xyXG4gIGlmKHBsYXllcjEuY3VycmVudEhpdHBvaW50cyA8PSAwKXtcclxuICAgIGNvbnNvbGUubG9nKFwiUExBWUVSIDIgV0lOUyFcIik7XHJcbiAgfVxyXG4gIGlmKHBsYXllcjIuY3VycmVudEhpdHBvaW50cyA8PSAwKXtcclxuICAgIGNvbnNvbGUubG9nKFwiUExBWUVSIDEgV0lOUyFcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMucnVuQ2xvY2soKTtcclxuICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
