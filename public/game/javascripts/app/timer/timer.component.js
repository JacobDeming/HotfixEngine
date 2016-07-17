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
        this.firebaseServer = af.database.object('/' + this.URL.split('/game/')[1]);
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
            this.runClock();
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

//# sourceMappingURL=data:application/json;base64,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eEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztvQkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQXRFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsNkVBSVQ7U0FDRixDQUFDOztzQkFBQTtJQWdFRixxQkFBQztBQUFELENBOURBLEFBOERDLElBQUE7QUE5RFksc0JBQWMsaUJBOEQxQixDQUFBIiwiZmlsZSI6InRpbWVyL3RpbWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdCxPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0lucHV0LE91dHB1dCxFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RpbWVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgKm5nSWY9XCJyZW1haW5pbmdcIj5cclxuICA8cD4gVGlja3M6IHt7cmVtYWluaW5nfX08L3A+XHJcbiAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gIGZpcmViYXNlQ2xvY2s6RmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47XHJcbiAgZmlyZWJhc2VTZXJ2ZXI6RmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47XHJcbiAgVVJMOnN0cmluZztcclxuICBnYW1lQ2xvY2s6IHtcclxuICAgIGR1cmF0aW9uOm51bWJlcixcclxuICAgIHRpY2tzOm51bWJlclxyXG4gIH07XHJcbiAgdGltZXJTdWJzY3JpcHRpb246IGFueTtcclxuICByZW1haW5pbmc6bnVtYmVyO1xyXG4gIGhvc3Q6Ym9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoYWY6QW5ndWxhckZpcmUpe1xyXG4gICAgdGhpcy5VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2ZXIgPSBhZi5kYXRhYmFzZS5vYmplY3QoJy8nK3RoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXSk7XHJcbiAgICB0aGlzLmZpcmViYXNlQ2xvY2sgPSBhZi5kYXRhYmFzZS5vYmplY3QoJy8nK3RoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXStcIi9UaW1lclwiLHtwcmVzZXJ2ZVNuYXBzaG90OnRydWV9KTtcclxuICAgIHRoaXMuZmlyZWJhc2VDbG9jay5zdWJzY3JpYmUoc25hcCA9PntcclxuICAgICAgdGhpcy5yZW1haW5pbmc9c25hcC52YWwoKTtcclxuICAgIH0pXHJcbiAgICBjb25zdCB0d29QbGF5ZXJzID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rXCIvT3BlblwiLHtwcmVzZXJ2ZVNuYXBzaG90OnRydWV9KTtcclxuICAgIHR3b1BsYXllcnMuc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIGlmKHNuYXAudmFsKCk9PXRydWUpe1xyXG4gICAgICAgIHRoaXMuaG9zdD10cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHNuYXAudmFsKCk9PWZhbHNlKXtcclxuICAgICAgICB0aGlzLnJlc2V0Q2xvY2soKTtcclxuICAgICAgICB0aGlzLnJ1bkNsb2NrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXNldENsb2NrKCl7XHJcbiAgICBpZih0aGlzLmhvc3Q9PXRydWUpe1xyXG4gICAgICB0aGlzLmdhbWVDbG9jayA9IHsgXHJcbiAgICAgICAgZHVyYXRpb246NSxcclxuICAgICAgICB0aWNrczowXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wQ2xvY2soKXtcclxuICAgIGlmKHRoaXMuaG9zdD09dHJ1ZSl7XHJcbiAgICAgIHRoaXMucmVzZXRDbG9jaygpO1xyXG4gICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMucnVuQ2xvY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJ1bkNsb2NrKCl7XHJcbiAgICBpZih0aGlzLmhvc3Q9PXRydWUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBpbiBoZXJlXCIpO1xyXG4gICAgICBsZXQgdGltZXIgPSBPYnNlcnZhYmxlLnRpbWVyKDAsMTAwMCk7XHJcbiAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24gPSB0aW1lci5zdWJzY3JpYmUodD0+e1xyXG4gICAgICAgIGlmKHQgPD0gdGhpcy5nYW1lQ2xvY2suZHVyYXRpb24pe1xyXG4gICAgICAgICAgdGhpcy5nYW1lQ2xvY2sudGlja3MgPSB0O1xyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZlci51cGRhdGUoe1RpbWVyOnRoaXMuZ2FtZUNsb2NrLmR1cmF0aW9uLXRoaXMuZ2FtZUNsb2NrLnRpY2tzfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RvcENsb2NrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
