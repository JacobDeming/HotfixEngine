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
var player1_component_1 = require('./player1/player1.component');
var environment_component_1 = require('./environment/environment.component');
var GameComponent = (function () {
    function GameComponent() {
    }
    GameComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <navbar></navbar>\n  <div class=\"container game-container\">\n    <player1></player1>\n    <player2></player2>\n    <environment></environment>\n  </div>\n  ",
            directives: [player1_component_1.Player1Component, environment_component_1.EnvironmentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsa0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0Qsc0NBQW1DLHFDQUFxQyxDQUFDLENBQUE7QUFlekU7SUFBQTtJQUEyQixDQUFDO0lBYjVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBQyxvS0FPUjtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixFQUFDLDRDQUFvQixDQUFDO1NBQ3BELENBQUM7O3FCQUFBO0lBRXlCLG9CQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLHFCQUFhLGdCQUFFLENBQUEiLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1BsYXllcjFDb21wb25lbnR9IGZyb20gJy4vcGxheWVyMS9wbGF5ZXIxLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RW52aXJvbm1lbnRDb21wb25lbnR9IGZyb20gJy4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgPG5hdmJhcj48L25hdmJhcj5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGdhbWUtY29udGFpbmVyXCI+XHJcbiAgICA8cGxheWVyMT48L3BsYXllcjE+XHJcbiAgICA8cGxheWVyMj48L3BsYXllcjI+XHJcbiAgICA8ZW52aXJvbm1lbnQ+PC9lbnZpcm9ubWVudD5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIGRpcmVjdGl2ZXM6IFtQbGF5ZXIxQ29tcG9uZW50LEVudmlyb25tZW50Q29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDb21wb25lbnR7fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
