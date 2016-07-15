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
            template: "\n  <navbar></navbar>\n  <div class=\"container game-container\">\n    <player1></player1>\n    <player2></player2>\n    <environment></environment>\n  </div>\n  ",
            directives: [player1_component_1.Player1Component, environment_component_1.EnvironmentComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBZXpFO0lBSUUsdUJBQVksRUFBYztRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELG1DQUFXLEdBQVgsY0FBZSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQztJQXRCckM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFDLG9LQU9SO1lBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLEVBQUMsNENBQW9CLENBQUM7U0FDcEQsQ0FBQzs7cUJBQUE7SUFZRixvQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlkscUJBQWEsZ0JBVXpCLENBQUEiLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbmltcG9ydCB7UGxheWVyMUNvbXBvbmVudH0gZnJvbSAnLi9wbGF5ZXIxL3BsYXllcjEuY29tcG9uZW50JztcclxuaW1wb3J0IHtFbnZpcm9ubWVudENvbXBvbmVudH0gZnJvbSAnLi9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gIHRlbXBsYXRlOmBcclxuICA8bmF2YmFyPjwvbmF2YmFyPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZ2FtZS1jb250YWluZXJcIj5cclxuICAgIDxwbGF5ZXIxPjwvcGxheWVyMT5cclxuICAgIDxwbGF5ZXIyPjwvcGxheWVyMj5cclxuICAgIDxlbnZpcm9ubWVudD48L2Vudmlyb25tZW50PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgZGlyZWN0aXZlczogW1BsYXllcjFDb21wb25lbnQsRW52aXJvbm1lbnRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveXtcclxuICByb29tOiBGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBVUkw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoYWY6QW5ndWxhckZpcmUpe1xyXG4gICAgdGhpcy5VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHRoaXMucm9vbSA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge3RoaXMucm9vbS5yZW1vdmUoKTt9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
