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
            directives: [player1_component_1.Player1Component, player2_component_1.Player2Component, environment_component_1.EnvironmentComponent, timer_component_1.TimerComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLGdDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBa0J6RTtJQUlFLHVCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxtQ0FBVyxHQUFYLGNBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUM7SUF6QnJDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBQywwTkFVUjtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixFQUFDLG9DQUFnQixFQUFDLDRDQUFvQixFQUFDLGdDQUFjLENBQUM7U0FDcEYsQ0FBQzs7cUJBQUE7SUFZRixvQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlkscUJBQWEsZ0JBVXpCLENBQUEiLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbmltcG9ydCB7VGltZXJDb21wb25lbnR9IGZyb20gJy4vdGltZXIvdGltZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtQbGF5ZXIxQ29tcG9uZW50fSBmcm9tICcuL3BsYXllcjEvcGxheWVyMS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BsYXllcjJDb21wb25lbnR9IGZyb20gJy4vcGxheWVyMi9wbGF5ZXIyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RW52aXJvbm1lbnRDb21wb25lbnR9IGZyb20gJy4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgPG5hdmJhcj48L25hdmJhcj5cclxuICA8ZGl2IGNsYXNzPVwiZ2FtZS1jb250YWluZXJcIj5cclxuICAgIDx0aW1lcj48L3RpbWVyPlxyXG4gICAgPHBsYXllcjE+PC9wbGF5ZXIxPlxyXG4gICAgPHBsYXllcjI+PC9wbGF5ZXIyPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJlbnYtY29udGFpbmVyXCI+XHJcbiAgICA8ZW52aXJvbm1lbnQ+PC9lbnZpcm9ubWVudD5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIGRpcmVjdGl2ZXM6IFtQbGF5ZXIxQ29tcG9uZW50LFBsYXllcjJDb21wb25lbnQsRW52aXJvbm1lbnRDb21wb25lbnQsVGltZXJDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveXtcclxuICByb29tOiBGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBVUkw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoYWY6QW5ndWxhckZpcmUpe1xyXG4gICAgdGhpcy5VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHRoaXMucm9vbSA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge3RoaXMucm9vbS5yZW1vdmUoKTt9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
