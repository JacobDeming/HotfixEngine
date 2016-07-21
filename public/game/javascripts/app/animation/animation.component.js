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
        this.URL = window.location.href;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLHdDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pFLHdDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBbUJ6RTtJQVlFLDRCQUFhLEVBQWM7UUFaN0IsaUJBb0JDO1FBUEcsSUFBSSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxnQkFBZ0IsRUFBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3ZCLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDdkMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBbENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBQyxXQUFXO1lBQ3BCLFFBQVEsRUFBQyx3UEFVUjtZQUNELFVBQVUsRUFBQyxDQUFDLGdEQUFzQixFQUFDLGdEQUFzQixDQUFDO1NBQzNELENBQUM7OzBCQUFBO0lBc0JGLHlCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSwwQkFBa0IscUJBb0I5QixDQUFBIiwiZmlsZSI6ImFuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbmltcG9ydCB7UGxheWVyMVNwcml0ZUNvbXBvbmVudH0gZnJvbSAnLi9zcHJpdGVzL3BsYXllcjFzcHJpdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtQbGF5ZXIyU3ByaXRlQ29tcG9uZW50fSBmcm9tICcuL3Nwcml0ZXMvcGxheWVyMnNwcml0ZS5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOidhbmltYXRpb24nLFxyXG4gIHRlbXBsYXRlOmBcclxuICA8ZGl2IGlkPVwid2VhdGhlci16b25lXCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInNwcml0ZXMtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGxheWVyMVwiPlxyXG4gICAgICA8cGxheWVyMXNwcml0ZT48L3BsYXllcjFzcHJpdGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXIyXCI+XHJcbiAgICAgIDxwbGF5ZXIyc3ByaXRlPjwvcGxheWVyMnNwcml0ZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgZGlyZWN0aXZlczpbUGxheWVyMVNwcml0ZUNvbXBvbmVudCxQbGF5ZXIyU3ByaXRlQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkNvbXBvbmVudCB7XHJcbiAgb25PZmY6RmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47XHJcbiAgVVJMOnN0cmluZztcclxuICBlbnZpcm9ubWVudFNuYXBzaG90OiB7XHJcbiAgICBmb2c6Ym9vbGVhbixcclxuICAgIHNub3c6Ym9vbGVhbixcclxuICAgIGxpZ2h0bmluZzpib29sZWFuLFxyXG4gICAgcmFpbjpib29sZWFuLFxyXG4gICAgc3Vuc2hpbmU6Ym9vbGVhbixcclxuICAgIHdpbmQ6Ym9vbGVhbixcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvciAoYWY6QW5ndWxhckZpcmUpe1xyXG4gICAgdGhpcy5VUkw9d2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB0aGlzLm9uT2ZmID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9HbG9iYWxzL09uT2ZmJyx7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLm9uT2ZmLnN1YnNjcmliZShzbmFwID0+e1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50U25hcHNob3QgPSBzbmFwLnZhbCgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
