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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELGdDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3pFLG9DQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBcUJuRTtJQUlFLHVCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUExQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFDLGlXQWFSO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBQyxvQ0FBZ0IsRUFBQyxvQ0FBZ0IsRUFBQyw0Q0FBb0IsRUFBQyxnQ0FBYyxFQUFDLHdDQUFrQixDQUFDO1NBQ3ZILENBQUM7O3FCQUFBO0lBV0Ysb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHFCQUFhLGdCQVN6QixDQUFBIiwiZmlsZSI6ImdhbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbmd1bGFyRmlyZSxGaXJlYmFzZU9iamVjdE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XG5cbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7VGltZXJDb21wb25lbnR9IGZyb20gJy4vdGltZXIvdGltZXIuY29tcG9uZW50JztcbmltcG9ydCB7UGxheWVyMUNvbXBvbmVudH0gZnJvbSAnLi9wbGF5ZXIxL3BsYXllcjEuY29tcG9uZW50JztcbmltcG9ydCB7UGxheWVyMkNvbXBvbmVudH0gZnJvbSAnLi9wbGF5ZXIyL3BsYXllcjIuY29tcG9uZW50JztcbmltcG9ydCB7RW52aXJvbm1lbnRDb21wb25lbnR9IGZyb20gJy4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7QW5pbWF0aW9uQ29tcG9uZW50fSBmcm9tICcuL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGU6YFxuICA8bmF2YmFyPjwvbmF2YmFyPlxuICA8ZGl2IGNsYXNzPVwiZ2FtZS1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8cGxheWVyMSBjbGFzcz1cImNvbC1sZy00XCI+PC9wbGF5ZXIxPlxuICAgICAgPHRpbWVyIGNsYXNzPVwiY29sLWxnLTRcIj48L3RpbWVyPlxuICAgICAgPHBsYXllcjIgY2xhc3M9XCJjb2wtbGctNFwiPjwvcGxheWVyMj5cbiAgICA8L2Rpdj5cbiAgICA8YW5pbWF0aW9uPjwvYW5pbWF0aW9uPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImVudi1jb250YWluZXJcIj5cbiAgICA8ZW52aXJvbm1lbnQ+PC9lbnZpcm9ubWVudD5cbiAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtOYXZiYXJDb21wb25lbnQsUGxheWVyMUNvbXBvbmVudCxQbGF5ZXIyQ29tcG9uZW50LEVudmlyb25tZW50Q29tcG9uZW50LFRpbWVyQ29tcG9uZW50LEFuaW1hdGlvbkNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29tcG9uZW50e1xuICByb29tOiBGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcbiAgVVJMOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoYWY6QW5ndWxhckZpcmUpe1xuICAgIHRoaXMuVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgdGhpcy5yb29tID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0pO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
