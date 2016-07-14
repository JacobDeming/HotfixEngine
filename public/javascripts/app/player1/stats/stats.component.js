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
var StatsComponent = (function () {
    function StatsComponent(af) {
        this.playerClass = "Highwayman";
        this.champion = af.database.object('/Players/' + this.playerClass);
    }
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'stats',
            template: "\n  <div *ngIf=\"champion\" class=\"container stat-container pull-left\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 col-sm-4\">\n      <img class=\"thumbnail champion-icon\" src=\"./images/champion_highwayman.png\" />\n    </div>\n    <div class=\"col-xs-8 col-sm-8\">\n      <h4>{{(champion | async)?.playerClass}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <p>Current Hitpoints: {{(champion | async)?.currentHitpoints}}</p>\n    <p>Physical Attack: {{(champion | async)?.physicalAttack}}</p>\n    <p>Physical Defense: {{(champion | async)?.physicalDefense}}</p>\n    <p>Special Attack: {{(champion | async)?.specialAttack}}</p>\n    <p>Special Defense: {{(champion | async)?.specialDefense}}</p>\n    <p>Dexterity: {{(champion | async)?.dexterity}}</p>\n    <p>Action: {{(champion | async)?.action}}</p>\n  </div>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcjEvc3RhdHMvc3RhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBMkJsRTtJQUlFLHdCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBQyxZQUFZLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFoQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFDLG0xQkFvQlI7U0FDRixDQUFDOztzQkFBQTtJQVVGLHFCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSxzQkFBYyxpQkFRMUIsQ0FBQSIsImZpbGUiOiJwbGF5ZXIxL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmd1bGFyRmlyZSxGaXJlYmFzZU9iamVjdE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N0YXRzJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgPGRpdiAqbmdJZj1cImNoYW1waW9uXCIgY2xhc3M9XCJjb250YWluZXIgc3RhdC1jb250YWluZXIgcHVsbC1sZWZ0XCI+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC14cy00IGNvbC1zbS00XCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWwgY2hhbXBpb24taWNvblwiIHNyYz1cIi4vaW1hZ2VzL2NoYW1waW9uX2hpZ2h3YXltYW4ucG5nXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC14cy04IGNvbC1zbS04XCI+XHJcbiAgICAgIDxoND57eyhjaGFtcGlvbiB8IGFzeW5jKT8ucGxheWVyQ2xhc3N9fTwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8cD5DdXJyZW50IEhpdHBvaW50czoge3soY2hhbXBpb24gfCBhc3luYyk/LmN1cnJlbnRIaXRwb2ludHN9fTwvcD5cclxuICAgIDxwPlBoeXNpY2FsIEF0dGFjazoge3soY2hhbXBpb24gfCBhc3luYyk/LnBoeXNpY2FsQXR0YWNrfX08L3A+XHJcbiAgICA8cD5QaHlzaWNhbCBEZWZlbnNlOiB7eyhjaGFtcGlvbiB8IGFzeW5jKT8ucGh5c2ljYWxEZWZlbnNlfX08L3A+XHJcbiAgICA8cD5TcGVjaWFsIEF0dGFjazoge3soY2hhbXBpb24gfCBhc3luYyk/LnNwZWNpYWxBdHRhY2t9fTwvcD5cclxuICAgIDxwPlNwZWNpYWwgRGVmZW5zZToge3soY2hhbXBpb24gfCBhc3luYyk/LnNwZWNpYWxEZWZlbnNlfX08L3A+XHJcbiAgICA8cD5EZXh0ZXJpdHk6IHt7KGNoYW1waW9uIHwgYXN5bmMpPy5kZXh0ZXJpdHl9fTwvcD5cclxuICAgIDxwPkFjdGlvbjoge3soY2hhbXBpb24gfCBhc3luYyk/LmFjdGlvbn19PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdHNDb21wb25lbnR7XHJcbiAgY2hhbXBpb246IEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHBsYXllckNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFmOkFuZ3VsYXJGaXJlKXtcclxuICAgIHRoaXMucGxheWVyQ2xhc3M9XCJIaWdod2F5bWFuXCI7XHJcbiAgICB0aGlzLmNoYW1waW9uID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvUGxheWVycy8nK3RoaXMucGxheWVyQ2xhc3MpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
