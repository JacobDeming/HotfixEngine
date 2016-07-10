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
var player1_component_1 = require('./player1.component');
var GameComponent = (function () {
    function GameComponent() {
    }
    GameComponent = __decorate([
        core_1.Component({
            selector: 'game',
            templateUrl: 'app/game.component.html',
            directives: [
                player1_component_1.Player1Component
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFVdkQ7SUFBQTtJQUVBLENBQUM7SUFWRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFVBQVUsRUFBRTtnQkFDVixvQ0FBZ0I7YUFDakI7U0FDRixDQUFDOztxQkFBQTtJQUlGLG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxxQkFBYSxnQkFFekIsQ0FBQSIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUGxheWVyMUNvbXBvbmVudCB9IGZyb20gJy4vcGxheWVyMS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYW1lJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9nYW1lLmNvbXBvbmVudC5odG1sJyxcclxuICBkaXJlY3RpdmVzOiBbXHJcbiAgICBQbGF5ZXIxQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDb21wb25lbnQgeyBcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
