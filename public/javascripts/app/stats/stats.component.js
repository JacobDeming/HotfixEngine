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
        this.champion = af.database.object('/Players/Elementalist');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzL3N0YXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDZCQUFtRCxjQUFjLENBQUMsQ0FBQTtBQTJCbEU7SUFFRSx3QkFBWSxFQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBN0JIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBQyxtMUJBb0JSO1NBQ0YsQ0FBQzs7c0JBQUE7SUFPRixxQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksc0JBQWMsaUJBSzFCLENBQUEiLCJmaWxlIjoic3RhdHMvc3RhdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3RhdHMnLFxyXG4gIHRlbXBsYXRlOmBcclxuICA8ZGl2ICpuZ0lmPVwiY2hhbXBpb25cIiBjbGFzcz1cImNvbnRhaW5lciBzdGF0LWNvbnRhaW5lciBwdWxsLWxlZnRcIj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTRcIj5cclxuICAgICAgPGltZyBjbGFzcz1cInRodW1ibmFpbCBjaGFtcGlvbi1pY29uXCIgc3JjPVwiLi9pbWFnZXMvY2hhbXBpb25faGlnaHdheW1hbi5wbmdcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTggY29sLXNtLThcIj5cclxuICAgICAgPGg0Pnt7KGNoYW1waW9uIHwgYXN5bmMpPy5wbGF5ZXJDbGFzc319PC9oND5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxwPkN1cnJlbnQgSGl0cG9pbnRzOiB7eyhjaGFtcGlvbiB8IGFzeW5jKT8uY3VycmVudEhpdHBvaW50c319PC9wPlxyXG4gICAgPHA+UGh5c2ljYWwgQXR0YWNrOiB7eyhjaGFtcGlvbiB8IGFzeW5jKT8ucGh5c2ljYWxBdHRhY2t9fTwvcD5cclxuICAgIDxwPlBoeXNpY2FsIERlZmVuc2U6IHt7KGNoYW1waW9uIHwgYXN5bmMpPy5waHlzaWNhbERlZmVuc2V9fTwvcD5cclxuICAgIDxwPlNwZWNpYWwgQXR0YWNrOiB7eyhjaGFtcGlvbiB8IGFzeW5jKT8uc3BlY2lhbEF0dGFja319PC9wPlxyXG4gICAgPHA+U3BlY2lhbCBEZWZlbnNlOiB7eyhjaGFtcGlvbiB8IGFzeW5jKT8uc3BlY2lhbERlZmVuc2V9fTwvcD5cclxuICAgIDxwPkRleHRlcml0eToge3soY2hhbXBpb24gfCBhc3luYyk/LmRleHRlcml0eX19PC9wPlxyXG4gICAgPHA+QWN0aW9uOiB7eyhjaGFtcGlvbiB8IGFzeW5jKT8uYWN0aW9ufX08L3A+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0c0NvbXBvbmVudHtcclxuICBjaGFtcGlvbjogRmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47XHJcbiAgY29uc3RydWN0b3IoYWY6QW5ndWxhckZpcmUpe1xyXG4gICAgdGhpcy5jaGFtcGlvbiA9IGFmLmRhdGFiYXNlLm9iamVjdCgnL1BsYXllcnMvRWxlbWVudGFsaXN0Jyk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
