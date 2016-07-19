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
            template: "\n  <navbar></navbar>\n  <div class=\"game-container container\">\n    <div class=\"row\">\n      <player1 class=\"col-lg-4\"></player1>\n      <timer class=\"col-lg-4\"></timer>\n      <player2 class=\"col-lg-4\"></player2>\n    </div>\n    <animation></animation>\n  </div>\n  <div class=\"env-container\">\n    <environment></environment>\n  </div>\n  ",
            directives: [player1_component_1.Player1Component, player2_component_1.Player2Component, environment_component_1.EnvironmentComponent, timer_component_1.TimerComponent, animation_component_1.AnimationComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLGdDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3pFLG9DQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBcUJuRTtJQUlFLHVCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUExQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFDLHFXQWFSO1lBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLEVBQUMsb0NBQWdCLEVBQUMsNENBQW9CLEVBQUMsZ0NBQWMsRUFBQyx3Q0FBa0IsQ0FBQztTQUN2RyxDQUFDOztxQkFBQTtJQVdGLG9CQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxxQkFBYSxnQkFTekIsQ0FBQSIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmd1bGFyRmlyZSxGaXJlYmFzZU9iamVjdE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XHJcblxyXG5pbXBvcnQge1RpbWVyQ29tcG9uZW50fSBmcm9tICcuL3RpbWVyL3RpbWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGxheWVyMUNvbXBvbmVudH0gZnJvbSAnLi9wbGF5ZXIxL3BsYXllcjEuY29tcG9uZW50JztcclxuaW1wb3J0IHtQbGF5ZXIyQ29tcG9uZW50fSBmcm9tICcuL3BsYXllcjIvcGxheWVyMi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Vudmlyb25tZW50Q29tcG9uZW50fSBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QW5pbWF0aW9uQ29tcG9uZW50fSBmcm9tICcuL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgPG5hdmJhcj48L25hdmJhcj5cclxuICA8ZGl2IGNsYXNzPVwiZ2FtZS1jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxwbGF5ZXIxIGNsYXNzPVwiY29sLWxnLTRcIj48L3BsYXllcjE+XHJcbiAgICAgIDx0aW1lciBjbGFzcz1cImNvbC1sZy00XCI+PC90aW1lcj5cclxuICAgICAgPHBsYXllcjIgY2xhc3M9XCJjb2wtbGctNFwiPjwvcGxheWVyMj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGFuaW1hdGlvbj48L2FuaW1hdGlvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZW52LWNvbnRhaW5lclwiPlxyXG4gICAgPGVudmlyb25tZW50PjwvZW52aXJvbm1lbnQ+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbUGxheWVyMUNvbXBvbmVudCxQbGF5ZXIyQ29tcG9uZW50LEVudmlyb25tZW50Q29tcG9uZW50LFRpbWVyQ29tcG9uZW50LEFuaW1hdGlvbkNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29tcG9uZW50e1xyXG4gIHJvb206IEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIFVSTDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhZjpBbmd1bGFyRmlyZSl7XHJcbiAgICB0aGlzLlVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdGhpcy5yb29tID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0pO1xyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
