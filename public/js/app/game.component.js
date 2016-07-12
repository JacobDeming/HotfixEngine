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
var player1_component_1 = require('./player1.component');
var environment_component_1 = require('./environment/environment.component');
var GameComponent = (function () {
    function GameComponent() {
    }
    GameComponent = __decorate([
        core_1.Component({
            selector: 'game',
            template: "\n  <navbar></navbar>\n  <div class=\"container game-container\">\n    <player1></player1>\n    <player2></player2>\n    <environment></environment>\n  </div>\n  ",
            directives: [navbar_component_1.NavbarComponent, player1_component_1.Player1Component, environment_component_1.EnvironmentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQsc0NBQW1DLHFDQUFxQyxDQUFDLENBQUE7QUFlekU7SUFBQTtJQUVBLENBQUM7SUFmRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUMsb0tBT1I7WUFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFDLG9DQUFnQixFQUFDLDRDQUFvQixDQUFDO1NBQ3BFLENBQUM7O3FCQUFBO0lBSUYsb0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHFCQUFhLGdCQUV6QixDQUFBIiwiZmlsZSI6ImdhbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGxheWVyMUNvbXBvbmVudH0gZnJvbSAnLi9wbGF5ZXIxLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RW52aXJvbm1lbnRDb21wb25lbnR9IGZyb20gJy4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FtZScsXHJcbiAgdGVtcGxhdGU6YFxyXG4gIDxuYXZiYXI+PC9uYXZiYXI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBnYW1lLWNvbnRhaW5lclwiPlxyXG4gICAgPHBsYXllcjE+PC9wbGF5ZXIxPlxyXG4gICAgPHBsYXllcjI+PC9wbGF5ZXIyPlxyXG4gICAgPGVudmlyb25tZW50PjwvZW52aXJvbm1lbnQ+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbTmF2YmFyQ29tcG9uZW50LFBsYXllcjFDb21wb25lbnQsRW52aXJvbm1lbnRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbXBvbmVudCB7IFxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
