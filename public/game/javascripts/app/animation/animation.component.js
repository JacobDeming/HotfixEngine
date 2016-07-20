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
var player1sprite_component_1 = require('./sprites/player1sprite.component');
var player2sprite_component_1 = require('./sprites/player2sprite.component');
var AnimationComponent = (function () {
    function AnimationComponent() {
    }
    AnimationComponent = __decorate([
        core_1.Component({
            selector: 'animation',
            template: "\n  <div id=\"weather-zone\"></div>\n  <div class=\"sprites-container\">\n    <div class=\"player1\">\n      <player1sprite></player1sprite>\n    </div>\n    <div class=\"player2\">\n      <player2sprite></player2sprite>\n    </div>\n  </div>\n  ",
            directives: [player1sprite_component_1.Player1SpriteComponent, player2sprite_component_1.Player2SpriteComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AnimationComponent);
    return AnimationComponent;
}());
exports.AnimationComponent = AnimationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFHeEMsd0NBQXFDLG1DQUFtQyxDQUFDLENBQUE7QUFDekUsd0NBQXFDLG1DQUFtQyxDQUFDLENBQUE7QUFtQnpFO0lBQUE7SUFFQSxDQUFDO0lBbEJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBQyxXQUFXO1lBQ3BCLFFBQVEsRUFBQyx3UEFVUjtZQUNELFVBQVUsRUFBQyxDQUFDLGdEQUFzQixFQUFDLGdEQUFzQixDQUFDO1NBQzNELENBQUM7OzBCQUFBO0lBSUYseUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLDBCQUFrQixxQkFFOUIsQ0FBQSIsImZpbGUiOiJhbmltYXRpb24vYW5pbWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmd1bGFyRmlyZSxGaXJlYmFzZU9iamVjdE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XHJcblxyXG5pbXBvcnQge1BsYXllcjFTcHJpdGVDb21wb25lbnR9IGZyb20gJy4vc3ByaXRlcy9wbGF5ZXIxc3ByaXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGxheWVyMlNwcml0ZUNvbXBvbmVudH0gZnJvbSAnLi9zcHJpdGVzL3BsYXllcjJzcHJpdGUuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjonYW5pbWF0aW9uJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgPGRpdiBpZD1cIndlYXRoZXItem9uZVwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzcHJpdGVzLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBsYXllcjFcIj5cclxuICAgICAgPHBsYXllcjFzcHJpdGU+PC9wbGF5ZXIxc3ByaXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGxheWVyMlwiPlxyXG4gICAgICA8cGxheWVyMnNwcml0ZT48L3BsYXllcjJzcHJpdGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIGRpcmVjdGl2ZXM6W1BsYXllcjFTcHJpdGVDb21wb25lbnQsUGxheWVyMlNwcml0ZUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25Db21wb25lbnQge1xyXG4gIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
