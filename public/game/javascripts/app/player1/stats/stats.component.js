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
        this.URL = window.location.href;
        console.log(this.URL.split('/game/'));
        this.playerClass = "Highwayman";
        this.champion = af.database.object('/' + this.URL.split('/game/')[1] + '/Players/' + this.playerClass);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcjEvc3RhdHMvc3RhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBMkJsRTtJQUtFLHdCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBQyxZQUFZLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBbkNIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBQyxtMUJBb0JSO1NBQ0YsQ0FBQzs7c0JBQUE7SUFhRixxQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksc0JBQWMsaUJBVzFCLENBQUEiLCJmaWxlIjoicGxheWVyMS9zdGF0cy9zdGF0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QW5ndWxhckZpcmUsRmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlfSBmcm9tICdhbmd1bGFyZmlyZTInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdGF0cycsXHJcbiAgdGVtcGxhdGU6YFxyXG4gIDxkaXYgKm5nSWY9XCJjaGFtcGlvblwiIGNsYXNzPVwiY29udGFpbmVyIHN0YXQtY29udGFpbmVyIHB1bGwtbGVmdFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNCBjb2wtc20tNFwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwidGh1bWJuYWlsIGNoYW1waW9uLWljb25cIiBzcmM9XCIuL2ltYWdlcy9jaGFtcGlvbl9oaWdod2F5bWFuLnBuZ1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtOCBjb2wtc20tOFwiPlxyXG4gICAgICA8aDQ+e3soY2hhbXBpb24gfCBhc3luYyk/LnBsYXllckNsYXNzfX08L2g0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPHA+Q3VycmVudCBIaXRwb2ludHM6IHt7KGNoYW1waW9uIHwgYXN5bmMpPy5jdXJyZW50SGl0cG9pbnRzfX08L3A+XHJcbiAgICA8cD5QaHlzaWNhbCBBdHRhY2s6IHt7KGNoYW1waW9uIHwgYXN5bmMpPy5waHlzaWNhbEF0dGFja319PC9wPlxyXG4gICAgPHA+UGh5c2ljYWwgRGVmZW5zZToge3soY2hhbXBpb24gfCBhc3luYyk/LnBoeXNpY2FsRGVmZW5zZX19PC9wPlxyXG4gICAgPHA+U3BlY2lhbCBBdHRhY2s6IHt7KGNoYW1waW9uIHwgYXN5bmMpPy5zcGVjaWFsQXR0YWNrfX08L3A+XHJcbiAgICA8cD5TcGVjaWFsIERlZmVuc2U6IHt7KGNoYW1waW9uIHwgYXN5bmMpPy5zcGVjaWFsRGVmZW5zZX19PC9wPlxyXG4gICAgPHA+RGV4dGVyaXR5OiB7eyhjaGFtcGlvbiB8IGFzeW5jKT8uZGV4dGVyaXR5fX08L3A+XHJcbiAgICA8cD5BY3Rpb246IHt7KGNoYW1waW9uIHwgYXN5bmMpPy5hY3Rpb259fTwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRzQ29tcG9uZW50e1xyXG4gIGNoYW1waW9uOiBGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBwbGF5ZXJDbGFzczogc3RyaW5nO1xyXG4gIFVSTDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhZjpBbmd1bGFyRmlyZSl7XHJcbiAgICB0aGlzLlVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpKTtcclxuICAgIHRoaXMucGxheWVyQ2xhc3M9XCJIaWdod2F5bWFuXCI7XHJcbiAgICB0aGlzLmNoYW1waW9uID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9QbGF5ZXJzLycrdGhpcy5wbGF5ZXJDbGFzcyk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
