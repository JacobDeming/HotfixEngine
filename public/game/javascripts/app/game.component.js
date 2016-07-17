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
var angularfire2_1 = require('angularfire2');
var timer_component_1 = require('./timer/timer.component');
var player1_component_1 = require('./player1/player1.component');
var environment_component_1 = require('./environment/environment.component');
var GameComponent = (function () {
    function GameComponent(af) {
        this.URL = window.location.href;
        this.room = af.database.object('/' + this.URL.split('/game/')[1]);
    }
    GameComponent.prototype.ngOnDestroy = function () { this.room.remove(); };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <navbar></navbar>\n  <div class=\"game-container\">\n    <timer></timer>\n    <player1></player1>\n    <player2></player2>\n  </div>\n  <div class=\"env-container\">\n    <environment></environment>\n  </div>\n  ",
            directives: [player1_component_1.Player1Component, environment_component_1.EnvironmentComponent, timer_component_1.TimerComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLGdDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBa0J6RTtJQUlFLHVCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxtQ0FBVyxHQUFYLGNBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUM7SUF6QnJDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBQywwTkFVUjtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixFQUFDLDRDQUFvQixFQUFDLGdDQUFjLENBQUM7U0FDbkUsQ0FBQzs7cUJBQUE7SUFZRixvQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlkscUJBQWEsZ0JBVXpCLENBQUEiLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbmltcG9ydCB7VGltZXJDb21wb25lbnR9IGZyb20gJy4vdGltZXIvdGltZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtQbGF5ZXIxQ29tcG9uZW50fSBmcm9tICcuL3BsYXllcjEvcGxheWVyMS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Vudmlyb25tZW50Q29tcG9uZW50fSBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgdGVtcGxhdGU6YFxyXG4gIDxuYXZiYXI+PC9uYXZiYXI+XHJcbiAgPGRpdiBjbGFzcz1cImdhbWUtY29udGFpbmVyXCI+XHJcbiAgICA8dGltZXI+PC90aW1lcj5cclxuICAgIDxwbGF5ZXIxPjwvcGxheWVyMT5cclxuICAgIDxwbGF5ZXIyPjwvcGxheWVyMj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZW52LWNvbnRhaW5lclwiPlxyXG4gICAgPGVudmlyb25tZW50PjwvZW52aXJvbm1lbnQ+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbUGxheWVyMUNvbXBvbmVudCxFbnZpcm9ubWVudENvbXBvbmVudCxUaW1lckNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95e1xyXG4gIHJvb206IEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIFVSTDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhZjpBbmd1bGFyRmlyZSl7XHJcbiAgICB0aGlzLlVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdGhpcy5yb29tID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7dGhpcy5yb29tLnJlbW92ZSgpO31cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
