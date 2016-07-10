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
var navbar_component_1 = require('./navbar.component');
var game_component_1 = require('./game.component');
var game_controller_component_1 = require('./game-controller.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <navbar></navbar>\n    <game></game>\n    <game-controller></game-controller>\n  ",
            directives: [
                navbar_component_1.NavbarComponent,
                game_component_1.GameComponent,
                game_controller_component_1.GameControllerComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUUxQyxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCwrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNqRCwwQ0FBd0MsNkJBQTZCLENBQUMsQ0FBQTtBQWdCdEU7SUFBQTtJQUE0QixDQUFDO0lBZDdCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLHlGQUlUO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLGtDQUFlO2dCQUNmLDhCQUFhO2dCQUNiLG1EQUF1QjthQUN4QjtTQUNGLENBQUM7O29CQUFBO0lBRTBCLG1CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixvQkFBWSxlQUFJLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FtZUNvbXBvbmVudCB9IGZyb20gJy4vZ2FtZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlckNvbXBvbmVudCB9IGZyb20gJy4vZ2FtZS1jb250cm9sbGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuYXZiYXI+PC9uYXZiYXI+XHJcbiAgICA8Z2FtZT48L2dhbWU+XHJcbiAgICA8Z2FtZS1jb250cm9sbGVyPjwvZ2FtZS1jb250cm9sbGVyPlxyXG4gIGAsXHJcbiAgZGlyZWN0aXZlczogW1xyXG4gICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgR2FtZUNvbXBvbmVudCxcclxuICAgIEdhbWVDb250cm9sbGVyQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
