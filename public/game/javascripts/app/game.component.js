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
var stats_component_1 = require('./stats/stats.component');
var animation_component_1 = require('./animation/animation.component');
var environment_component_1 = require('./environment/environment.component');
var GameComponent = (function () {
    function GameComponent(af) {
        this.URL = window.location.href;
        this.room = af.database.object('/' + this.URL.split('/game/')[1]);
    }
    GameComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <navbar></navbar>\n  <div class=\"game-container\">\n    <stats></stats>\n    <animation></animation>\n  </div>\n  <div class=\"env-container\">\n    <environment></environment>\n  </div>\n  ",
            directives: [navbar_component_1.NavbarComponent, stats_component_1.StatsComponent, animation_component_1.AnimationComponent, environment_component_1.EnvironmentComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELGdDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELG9DQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ25FLHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBa0J6RTtJQUlFLHVCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUF0Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFDLHFNQVNSO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBQyxnQ0FBYyxFQUFDLHdDQUFrQixFQUFDLDRDQUFvQixDQUFDO1NBQ3JGLENBQUM7O3FCQUFBO0lBV0Ysb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHFCQUFhLGdCQVN6QixDQUFBIiwiZmlsZSI6ImdhbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdGF0c0NvbXBvbmVudH0gZnJvbSAnLi9zdGF0cy9zdGF0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FuaW1hdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hbmltYXRpb24vYW5pbWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RW52aXJvbm1lbnRDb21wb25lbnR9IGZyb20gJy4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgdGVtcGxhdGU6YFxyXG4gIDxuYXZiYXI+PC9uYXZiYXI+XHJcbiAgPGRpdiBjbGFzcz1cImdhbWUtY29udGFpbmVyXCI+XHJcbiAgICA8c3RhdHM+PC9zdGF0cz5cclxuICAgIDxhbmltYXRpb24+PC9hbmltYXRpb24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImVudi1jb250YWluZXJcIj5cclxuICAgIDxlbnZpcm9ubWVudD48L2Vudmlyb25tZW50PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgZGlyZWN0aXZlczogW05hdmJhckNvbXBvbmVudCxTdGF0c0NvbXBvbmVudCxBbmltYXRpb25Db21wb25lbnQsRW52aXJvbm1lbnRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbXBvbmVudHtcclxuICByb29tOiBGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBVUkw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoYWY6QW5ndWxhckZpcmUpe1xyXG4gICAgdGhpcy5VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHRoaXMucm9vbSA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
