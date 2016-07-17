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
        this.URL = window.location.href;
        this.firebaseServer = af.database.object('/' + this.URL.split('/game/')[1]);
        this.firebaseClock = af.database.object('/' + this.URL.split('/game/')[1] + "/Timer", { preserveSnapshot: true });
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.resetClock();
        this.runClock();
    };
    TimerComponent.prototype.resetClock = function () {
        this.gameClock = {
            duration: 5,
            ticks: 0
        };
    };
    TimerComponent.prototype.stopClock = function () {
        this.resetClock();
        this.timerSubscription.unsubscribe();
        this.runClock();
    };
    TimerComponent.prototype.runClock = function () {
        var _this = this;
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
    };
    TimerComponent = __decorate([
        core_1.Component({
            selector: 'timer',
            template: "\n  <p> Ticks: {{gameClock.duration - gameClock.ticks}}</p>\n  "
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyL3RpbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBRXpELG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyw2QkFBbUQsY0FBYyxDQUFDLENBQUE7QUFVbEU7SUFZRSx3QkFBWSxFQUFjO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixRQUFRLEVBQUMsQ0FBQztZQUNWLEtBQUssRUFBQyxDQUFDO1NBQ1IsQ0FBQztJQUNKLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxLQUFLLEdBQUcsZUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ3hDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDekIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQ25GLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQXRESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsaUVBRVQ7U0FDRixDQUFDOztzQkFBQTtJQWtERixxQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksc0JBQWMsaUJBZ0QxQixDQUFBIiwiZmlsZSI6InRpbWVyL3RpbWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdCxPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0lucHV0LE91dHB1dCxFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RpbWVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxwPiBUaWNrczoge3tnYW1lQ2xvY2suZHVyYXRpb24gLSBnYW1lQ2xvY2sudGlja3N9fTwvcD5cclxuICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgZmlyZWJhc2VDbG9jazpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBmaXJlYmFzZVNlcnZlcjpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBVUkw6c3RyaW5nO1xyXG4gIGdhbWVDbG9jazoge1xyXG4gICAgZHVyYXRpb246bnVtYmVyLFxyXG4gICAgdGlja3M6bnVtYmVyXHJcbiAgfTtcclxuICB0aW1lclN1YnNjcmlwdGlvbjogYW55O1xyXG4gIHJlbWFpbmluZzpudW1iZXI7XHJcbiAgbXlJZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhZjpBbmd1bGFyRmlyZSl7XHJcbiAgICB0aGlzLlVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZlciA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKTtcclxuICAgIHRoaXMuZmlyZWJhc2VDbG9jayA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdK1wiL1RpbWVyXCIse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMucmVzZXRDbG9jaygpO1xyXG4gICAgdGhpcy5ydW5DbG9jaygpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRDbG9jaygpe1xyXG4gICAgdGhpcy5nYW1lQ2xvY2sgPSB7IFxyXG4gICAgICBkdXJhdGlvbjo1LFxyXG4gICAgICB0aWNrczowXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RvcENsb2NrKCl7XHJcbiAgICB0aGlzLnJlc2V0Q2xvY2soKTtcclxuICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMucnVuQ2xvY2soKTtcclxuICB9XHJcblxyXG4gIHJ1bkNsb2NrKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdvdCBpbiBoZXJlXCIpO1xyXG4gICAgbGV0IHRpbWVyID0gT2JzZXJ2YWJsZS50aW1lcigwLDEwMDApO1xyXG4gICAgdGhpcy50aW1lclN1YnNjcmlwdGlvbiA9IHRpbWVyLnN1YnNjcmliZSh0PT57XHJcbiAgICAgIGlmKHQgPD0gdGhpcy5nYW1lQ2xvY2suZHVyYXRpb24pe1xyXG4gICAgICAgIHRoaXMuZ2FtZUNsb2NrLnRpY2tzID0gdDtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmVyLnVwZGF0ZSh7VGltZXI6dGhpcy5nYW1lQ2xvY2suZHVyYXRpb24tdGhpcy5nYW1lQ2xvY2sudGlja3N9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0b3BDbG9jaygpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
