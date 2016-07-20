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
var player1sprite_component_1 = require('./sprites/player1sprite.component');
var player2sprite_component_1 = require('./sprites/player2sprite.component');
var AnimationComponent = (function () {
    function AnimationComponent(af) {
        var _this = this;
        this.onOff = af.database.object('/' + this.URL.split('/game/')[1] + '/Globals/OnOff', { preserveSnapshot: true });
        this.onOff.subscribe(function (snap) {
            _this.environmentSnapshot = snap.val();
        });
    }
    AnimationComponent = __decorate([
        core_1.Component({
            selector: 'animation',
            template: "\n  <div id=\"weather-zone\"></div>\n  <div class=\"sprites-container\">\n    <div class=\"player1\">\n      <player1sprite></player1sprite>\n    </div>\n    <div class=\"player2\">\n      <player2sprite></player2sprite>\n    </div>\n  </div>\n  ",
            directives: [player1sprite_component_1.Player1SpriteComponent, player2sprite_component_1.Player2SpriteComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], AnimationComponent);
    return AnimationComponent;
}());
exports.AnimationComponent = AnimationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLHdDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pFLHdDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBbUJ6RTtJQVdFLDRCQUFhLEVBQWM7UUFYN0IsaUJBa0JDO1FBTkMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsZ0JBQWdCLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUN2QixLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsQ0FBQztJQWhDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUMsV0FBVztZQUNwQixRQUFRLEVBQUMsd1BBVVI7WUFDRCxVQUFVLEVBQUMsQ0FBQyxnREFBc0IsRUFBQyxnREFBc0IsQ0FBQztTQUMzRCxDQUFDOzswQkFBQTtJQW9CRix5QkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksMEJBQWtCLHFCQWtCOUIsQ0FBQSIsImZpbGUiOiJhbmltYXRpb24vYW5pbWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmd1bGFyRmlyZSxGaXJlYmFzZU9iamVjdE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XHJcblxyXG5pbXBvcnQge1BsYXllcjFTcHJpdGVDb21wb25lbnR9IGZyb20gJy4vc3ByaXRlcy9wbGF5ZXIxc3ByaXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGxheWVyMlNwcml0ZUNvbXBvbmVudH0gZnJvbSAnLi9zcHJpdGVzL3BsYXllcjJzcHJpdGUuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjonYW5pbWF0aW9uJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgPGRpdiBpZD1cIndlYXRoZXItem9uZVwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzcHJpdGVzLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBsYXllcjFcIj5cclxuICAgICAgPHBsYXllcjFzcHJpdGU+PC9wbGF5ZXIxc3ByaXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGxheWVyMlwiPlxyXG4gICAgICA8cGxheWVyMnNwcml0ZT48L3BsYXllcjJzcHJpdGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIGRpcmVjdGl2ZXM6W1BsYXllcjFTcHJpdGVDb21wb25lbnQsUGxheWVyMlNwcml0ZUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25Db21wb25lbnQge1xyXG4gIG9uT2ZmOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIGVudmlyb25tZW50U25hcHNob3Q6IHtcclxuICAgIGZvZzpib29sZWFuLFxyXG4gICAgaGFpbDpib29sZWFuLFxyXG4gICAgbGlnaHRuaW5nOmJvb2xlYW4sXHJcbiAgICByYWluOmJvb2xlYW4sXHJcbiAgICBzdW5zaGluZTpib29sZWFuLFxyXG4gICAgd2luZDpib29sZWFuLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yIChhZjpBbmd1bGFyRmlyZSl7XHJcbiAgdGhpcy5vbk9mZiA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKycvR2xvYmFscy9Pbk9mZicse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gIHRoaXMub25PZmYuc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICB0aGlzLmVudmlyb25tZW50U25hcHNob3QgPSBzbmFwLnZhbCgpXHJcbiAgfSlcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
