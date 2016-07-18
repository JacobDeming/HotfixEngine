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
            template: "\n  <div *ngIf=\"remaining\">\n  <p> Ticks: {{remaining}}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;

//# sourceMappingURL=data:application/json;base64,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aW1lci90aW1lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7QW5ndWxhckZpcmUsRmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlfSBmcm9tICdhbmd1bGFyZmlyZTInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGltZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiAqbmdJZj1cInJlbWFpbmluZ1wiPlxyXG4gIDxwPiBUaWNrczoge3tyZW1haW5pbmd9fTwvcD5cclxuICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXJDb21wb25lbnR7XHJcbiAgZmlyZWJhc2VDbG9jazpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBmaXJlYmFzZVNlcnZlcjpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBVUkw6c3RyaW5nO1xyXG4gIGdhbWVDbG9jazoge1xyXG4gICAgZHVyYXRpb246bnVtYmVyLFxyXG4gICAgdGlja3M6bnVtYmVyXHJcbiAgfTtcclxuICBwbGF5ZXJzSW5mbzphbnk7XHJcbiAgZW52aXJvbm1lbnRJbmZvOmFueTtcclxuICB0aW1lclN1YnNjcmlwdGlvbjogYW55O1xyXG4gIHJlbWFpbmluZzpudW1iZXI7XHJcbiAgaG9zdDpib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhZjpBbmd1bGFyRmlyZSl7XHJcbiAgICB0aGlzLlVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZlciA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdLHtwcmVzZXJ2ZVNuYXBzaG90OnRydWV9KTtcclxuICAgICAgdGhpcy5maXJlYmFzZVNlcnZlci5zdWJzY3JpYmUoc25hcCA9PntcclxuICAgICAgICB0aGlzLnBsYXllcnNJbmZvID0gc25hcC52YWwoKS5QbGF5ZXJzO1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnRJbmZvID0gc25hcC52YWwoKS5HbG9iYWxzLkVudmlyb25tZW50O1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuZmlyZWJhc2VDbG9jayA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdK1wiL1RpbWVyXCIse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgdGhpcy5maXJlYmFzZUNsb2NrLnN1YnNjcmliZShzbmFwID0+e1xyXG4gICAgICB0aGlzLnJlbWFpbmluZz1zbmFwLnZhbCgpO30pXHJcbiAgICBjb25zdCB0d29QbGF5ZXJzID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rXCIvT3BlblwiLHtwcmVzZXJ2ZVNuYXBzaG90OnRydWV9KTtcclxuICAgIHR3b1BsYXllcnMuc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIGlmKHNuYXAudmFsKCk9PXRydWUpe1xyXG4gICAgICAgIHRoaXMuaG9zdD10cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHNuYXAudmFsKCk9PWZhbHNlKXtcclxuICAgICAgICB0aGlzLnJlc2V0Q2xvY2soKTtcclxuICAgICAgICB0aGlzLnJ1bkNsb2NrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvL1RpbWVyIGZ1bmN0aW9uYWxpdHlcclxuICByZXNldENsb2NrKCl7XHJcbiAgICBpZih0aGlzLmhvc3Q9PXRydWUpe1xyXG4gICAgICB0aGlzLmdhbWVDbG9jayA9IHsgXHJcbiAgICAgICAgZHVyYXRpb246NSxcclxuICAgICAgICB0aWNrczowXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wQ2xvY2soKXtcclxuICAgIGlmKHRoaXMuaG9zdD09dHJ1ZSl7XHJcbiAgICAgIHRoaXMucmVzZXRDbG9jaygpO1xyXG4gICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuZmlnaHQodGhpcy5wbGF5ZXJzSW5mby5wbGF5ZXIxLHRoaXMucGxheWVyc0luZm8ucGxheWVyMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBydW5DbG9jaygpe1xyXG4gICAgaWYodGhpcy5ob3N0PT10cnVlKXtcclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgaW4gaGVyZVwiKTtcclxuICAgICAgbGV0IHRpbWVyID0gT2JzZXJ2YWJsZS50aW1lcigwLDEwMDApO1xyXG4gICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uID0gdGltZXIuc3Vic2NyaWJlKHQ9PntcclxuICAgICAgICBpZih0IDw9IHRoaXMuZ2FtZUNsb2NrLmR1cmF0aW9uKXtcclxuICAgICAgICAgIHRoaXMuZ2FtZUNsb2NrLnRpY2tzID0gdDtcclxuICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2ZXIudXBkYXRlKHtUaW1lcjp0aGlzLmdhbWVDbG9jay5kdXJhdGlvbi10aGlzLmdhbWVDbG9jay50aWNrc30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BDbG9jaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vR2FtZXBsYXkgZnVuY3Rpb25hbGl0eVxyXG4gIGZpZ2h0KHBsYXllcjEscGxheWVyMil7XHJcbiAgICBpZihwbGF5ZXIxLmFjdGlvbiA9PSBcInN0cmlrZVwiKXtcclxuICAgICAgaWYoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigxMDAtMCsxKSsxKT5wbGF5ZXIyLmRleHRlcml0eSl7XHJcbiAgICAgICAgaWYocGxheWVyMi5hY3Rpb24gPT0gXCJkZWZlbmRcIil7XHJcbiAgICAgICAgICBwbGF5ZXIyLmN1cnJlbnRIaXRwb2ludHMgLT0gKHBsYXllcjEucGh5c2ljYWxBdHRhY2sgLSBwbGF5ZXIyLnBoeXNpY2FsRGVmZW5zZSAqIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwbGF5ZXIyLmN1cnJlbnRIaXRwb2ludHMgLT0gKHBsYXllcjEucGh5c2ljYWxBdHRhY2sgLSBwbGF5ZXIyLnBoeXNpY2FsRGVmZW5zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUExBWUVSIDIgRE9ER0VEIVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYocGxheWVyMS5hY3Rpb24gPT0gXCJzcGVjaWFsXCIpe1xyXG4gICAgICBpZihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDEwMC0wKzEpKzEpPnBsYXllcjIuZGV4dGVyaXR5KXtcclxuICAgICAgICBpZihwbGF5ZXIyLmFjdGlvbiA9PSBcImRlZmVuZFwiKXtcclxuICAgICAgICAgIHBsYXllcjIuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMS5zcGVjaWFsQXR0YWNrIC0gcGxheWVyMi5zcGVjaWFsRGVmZW5zZSAqIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwbGF5ZXIyLmN1cnJlbnRIaXRwb2ludHMgLT0gKHBsYXllcjEuc3BlY2lhbEF0dGFjayAtIHBsYXllcjIuc3BlY2lhbERlZmVuc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBMQVlFUiAyIERPREdFRCFcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHBsYXllcjIuYWN0aW9uID09IFwic3RyaWtlXCIpe1xyXG4gICAgICBpZihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDEwMC0wKzEpKzEpPnBsYXllcjEuZGV4dGVyaXR5KXtcclxuICAgICAgICBpZihwbGF5ZXIxLmFjdGlvbiA9PSBcImRlZmVuZFwiKXtcclxuICAgICAgICAgIHBsYXllcjEuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMi5waHlzaWNhbEF0dGFjayAtIHBsYXllcjEucGh5c2ljYWxEZWZlbnNlICogMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBsYXllcjEuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMi5waHlzaWNhbEF0dGFjayAtIHBsYXllcjEucGh5c2ljYWxEZWZlbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQTEFZRVIgMSBET0RHRUQhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihwbGF5ZXIyLmFjdGlvbiA9PSBcInNwZWNpYWxcIil7XHJcbiAgICAgIGlmKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooMTAwLTArMSkrMSk+cGxheWVyMS5kZXh0ZXJpdHkpe1xyXG4gICAgICAgIGlmKHBsYXllcjEuYWN0aW9uID09IFwiZGVmZW5kXCIpe1xyXG4gICAgICAgICAgcGxheWVyMS5jdXJyZW50SGl0cG9pbnRzIC09IChwbGF5ZXIyLnNwZWNpYWxBdHRhY2sgLSBwbGF5ZXIxLnNwZWNpYWxEZWZlbnNlICogMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBsYXllcjEuY3VycmVudEhpdHBvaW50cyAtPSAocGxheWVyMi5zcGVjaWFsQXR0YWNrIC0gcGxheWVyMS5zcGVjaWFsRGVmZW5zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUExBWUVSIDEgRE9ER0VEIVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIHRoaXMuZmlyZWJhc2VTZXJ2ZXIudXBkYXRlKHtQbGF5ZXJzOntwbGF5ZXIxOnRoaXMucGxheWVyc0luZm8ucGxheWVyMSxwbGF5ZXIyOnRoaXMucGxheWVyc0luZm8ucGxheWVyMn19KTtcclxuICBpZihwbGF5ZXIxLmN1cnJlbnRIaXRwb2ludHMgPD0gMCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBMQVlFUiAyIFdJTlMhXCIpO1xyXG4gIH1cclxuICBpZihwbGF5ZXIyLmN1cnJlbnRIaXRwb2ludHMgPD0gMCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBMQVlFUiAxIFdJTlMhXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnJ1bkNsb2NrKCk7XHJcbiAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
