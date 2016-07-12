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
var stats_service_1 = require('./stats.service');
var StatsComponent = (function () {
    // champion:Champion;
    function StatsComponent(_statsService) {
        this._statsService = _statsService;
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._statsService.getStats()
            .subscribe(function (champion) {
            _this.champion = champion;
            _this._statsService.champion = champion;
            console.log(_this.champion);
        });
    };
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'stats',
            template: "\n  <div *ngIf=\"champion\" class=\"container stat-container pull-left\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 col-sm-4\">\n      <img class=\"thumbnail champion-icon\" src=\"./images/champion_highwayman.png\" />\n    </div>\n    <div class=\"col-xs-8 col-sm-8\">\n      <h4>{{champion.playerClass}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <p>Current Hitpoints: {{champion.currentHitpoints}}</p>\n    <p>Physical Attack: {{champion.physicalAttack}}</p>\n    <p>Physical Defense: {{champion.physicalDefense}}</p>\n    <p>Special Attack: {{champion.specialAttack}}</p>\n    <p>Special Defense: {{champion.specialDefense}}</p>\n    <p>Dexterity: {{champion.dexterity}}</p>\n    <p>Action: {{champion.action}}</p>\n  </div>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [stats_service_1.StatsService])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzL3N0YXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBR3pELDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBMkI3QztJQUVFLHFCQUFxQjtJQUVyQix3QkFBcUIsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBRSxDQUFDO0lBRW5ELGlDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO2FBQzFCLFNBQVMsQ0FDUixVQUFBLFFBQVE7WUFDTixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDUixDQUFDO0lBdkNIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBQywydkJBb0JSO1NBQ0YsQ0FBQzs7c0JBQUE7SUFrQkYscUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLHNCQUFjLGlCQWdCMUIsQ0FBQSIsImZpbGUiOiJzdGF0cy9zdGF0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXQsT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7Q2hhbXBpb259IGZyb20gJy4vY2hhbXBpb24nO1xyXG5pbXBvcnQge1N0YXRzU2VydmljZX0gZnJvbSAnLi9zdGF0cy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3RhdHMnLFxyXG4gIHRlbXBsYXRlOmBcclxuICA8ZGl2ICpuZ0lmPVwiY2hhbXBpb25cIiBjbGFzcz1cImNvbnRhaW5lciBzdGF0LWNvbnRhaW5lciBwdWxsLWxlZnRcIj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTRcIj5cclxuICAgICAgPGltZyBjbGFzcz1cInRodW1ibmFpbCBjaGFtcGlvbi1pY29uXCIgc3JjPVwiLi9pbWFnZXMvY2hhbXBpb25faGlnaHdheW1hbi5wbmdcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTggY29sLXNtLThcIj5cclxuICAgICAgPGg0Pnt7Y2hhbXBpb24ucGxheWVyQ2xhc3N9fTwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8cD5DdXJyZW50IEhpdHBvaW50czoge3tjaGFtcGlvbi5jdXJyZW50SGl0cG9pbnRzfX08L3A+XHJcbiAgICA8cD5QaHlzaWNhbCBBdHRhY2s6IHt7Y2hhbXBpb24ucGh5c2ljYWxBdHRhY2t9fTwvcD5cclxuICAgIDxwPlBoeXNpY2FsIERlZmVuc2U6IHt7Y2hhbXBpb24ucGh5c2ljYWxEZWZlbnNlfX08L3A+XHJcbiAgICA8cD5TcGVjaWFsIEF0dGFjazoge3tjaGFtcGlvbi5zcGVjaWFsQXR0YWNrfX08L3A+XHJcbiAgICA8cD5TcGVjaWFsIERlZmVuc2U6IHt7Y2hhbXBpb24uc3BlY2lhbERlZmVuc2V9fTwvcD5cclxuICAgIDxwPkRleHRlcml0eToge3tjaGFtcGlvbi5kZXh0ZXJpdHl9fTwvcD5cclxuICAgIDxwPkFjdGlvbjoge3tjaGFtcGlvbi5hY3Rpb259fTwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LE9uQ2hhbmdlc3tcclxuXHJcbiAgLy8gY2hhbXBpb246Q2hhbXBpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9zdGF0c1NlcnZpY2U6IFN0YXRzU2VydmljZSl7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5fc3RhdHNTZXJ2aWNlLmdldFN0YXRzKClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICBjaGFtcGlvbiA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNoYW1waW9uID0gY2hhbXBpb247XHJcbiAgICAgICAgICB0aGlzLl9zdGF0c1NlcnZpY2UuY2hhbXBpb24gPSBjaGFtcGlvbjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhbXBpb24pO1xyXG4gICAgICAgIH0pXHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
