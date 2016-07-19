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
            template: "\n  <div class=\"row\">\n    <div class=\"col-lg-10 col-lg-offset-1 WeatherZone\">\n      <player1sprite style=\"display:inline\"></player1sprite>\n      <player2sprite style=\"display:inline\"></player2sprite>\n    </div>\n  </div>\n  ",
            directives: [player1sprite_component_1.Player1SpriteComponent, player2sprite_component_1.Player2SpriteComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AnimationComponent);
    return AnimationComponent;
}());
exports.AnimationComponent = AnimationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFHeEMsd0NBQXFDLG1DQUFtQyxDQUFDLENBQUE7QUFDekUsd0NBQXFDLG1DQUFtQyxDQUFDLENBQUE7QUFnQnpFO0lBQUE7SUFFQSxDQUFDO0lBZkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFDLFdBQVc7WUFDcEIsUUFBUSxFQUFDLDhPQU9SO1lBQ0QsVUFBVSxFQUFDLENBQUMsZ0RBQXNCLEVBQUMsZ0RBQXNCLENBQUM7U0FDM0QsQ0FBQzs7MEJBQUE7SUFJRix5QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksMEJBQWtCLHFCQUU5QixDQUFBIiwiZmlsZSI6ImFuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbmltcG9ydCB7UGxheWVyMVNwcml0ZUNvbXBvbmVudH0gZnJvbSAnLi9zcHJpdGVzL3BsYXllcjFzcHJpdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtQbGF5ZXIyU3ByaXRlQ29tcG9uZW50fSBmcm9tICcuL3Nwcml0ZXMvcGxheWVyMnNwcml0ZS5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOidhbmltYXRpb24nLFxyXG4gIHRlbXBsYXRlOmBcclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEwIGNvbC1sZy1vZmZzZXQtMSBXZWF0aGVyWm9uZVwiPlxyXG4gICAgICA8cGxheWVyMXNwcml0ZSBzdHlsZT1cImRpc3BsYXk6aW5saW5lXCI+PC9wbGF5ZXIxc3ByaXRlPlxyXG4gICAgICA8cGxheWVyMnNwcml0ZSBzdHlsZT1cImRpc3BsYXk6aW5saW5lXCI+PC9wbGF5ZXIyc3ByaXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOltQbGF5ZXIxU3ByaXRlQ29tcG9uZW50LFBsYXllcjJTcHJpdGVDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uQ29tcG9uZW50e1xyXG4gIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
