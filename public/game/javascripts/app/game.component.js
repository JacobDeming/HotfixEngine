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
var navbar_component_1 = require('./navbar/navbar.component');
var timer_component_1 = require('./timer/timer.component');
var player1_component_1 = require('./player1/player1.component');
var player2_component_1 = require('./player2/player2.component');
var environment_component_1 = require('./environment/environment.component');
var animation_component_1 = require('./animation/animation.component');
var GameComponent = (function () {
    function GameComponent(af) {
        this.URL = window.location.href;
        this.room = af.database.object('/' + this.URL.split('/game/')[1]);
    }
    GameComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <navbar></navbar>\n  <div class=\"game-container\">\n    <div class=\"container\">\n      <player1 class=\"col-lg-4\"></player1>\n      <timer class=\"col-lg-4\"></timer>\n      <player2 class=\"col-lg-4\"></player2>\n    </div>\n    <animation></animation>\n  </div>\n  <div class=\"env-container\">\n    <environment></environment>\n  </div>\n  ",
            directives: [navbar_component_1.NavbarComponent, player1_component_1.Player1Component, player2_component_1.Player2Component, environment_component_1.EnvironmentComponent, timer_component_1.TimerComponent, animation_component_1.AnimationComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELGdDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3pFLG9DQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBcUJuRTtJQUlFLHVCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUExQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFDLGlXQWFSO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBQyxvQ0FBZ0IsRUFBQyxvQ0FBZ0IsRUFBQyw0Q0FBb0IsRUFBQyxnQ0FBYyxFQUFDLHdDQUFrQixDQUFDO1NBQ3ZILENBQUM7O3FCQUFBO0lBV0Ysb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHFCQUFhLGdCQVN6QixDQUFBIiwiZmlsZSI6ImdhbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtUaW1lckNvbXBvbmVudH0gZnJvbSAnLi90aW1lci90aW1lci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BsYXllcjFDb21wb25lbnR9IGZyb20gJy4vcGxheWVyMS9wbGF5ZXIxLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGxheWVyMkNvbXBvbmVudH0gZnJvbSAnLi9wbGF5ZXIyL3BsYXllcjIuY29tcG9uZW50JztcclxuaW1wb3J0IHtFbnZpcm9ubWVudENvbXBvbmVudH0gZnJvbSAnLi9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FuaW1hdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hbmltYXRpb24vYW5pbWF0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgdGVtcGxhdGU6YFxyXG4gIDxuYXZiYXI+PC9uYXZiYXI+XHJcbiAgPGRpdiBjbGFzcz1cImdhbWUtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxwbGF5ZXIxIGNsYXNzPVwiY29sLWxnLTRcIj48L3BsYXllcjE+XHJcbiAgICAgIDx0aW1lciBjbGFzcz1cImNvbC1sZy00XCI+PC90aW1lcj5cclxuICAgICAgPHBsYXllcjIgY2xhc3M9XCJjb2wtbGctNFwiPjwvcGxheWVyMj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGFuaW1hdGlvbj48L2FuaW1hdGlvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZW52LWNvbnRhaW5lclwiPlxyXG4gICAgPGVudmlyb25tZW50PjwvZW52aXJvbm1lbnQ+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbTmF2YmFyQ29tcG9uZW50LFBsYXllcjFDb21wb25lbnQsUGxheWVyMkNvbXBvbmVudCxFbnZpcm9ubWVudENvbXBvbmVudCxUaW1lckNvbXBvbmVudCxBbmltYXRpb25Db21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbXBvbmVudHtcclxuICByb29tOiBGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBVUkw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoYWY6QW5ndWxhckZpcmUpe1xyXG4gICAgdGhpcy5VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHRoaXMucm9vbSA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
