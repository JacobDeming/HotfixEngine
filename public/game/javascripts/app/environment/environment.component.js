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
var environment_service_1 = require('./environment.service');
var EnvironmentComponent = (function () {
    function EnvironmentComponent(af, _environmentService) {
        var _this = this;
        this._environmentService = _environmentService;
        this.URL = window.location.href;
        this.environment = af.database.object('/' + this.URL.split('/game/')[1] + '/Globals/OnOff', { preserveSnapshot: true });
        this.environment.subscribe(function (snapshot) {
            console.log(snapshot.val());
            _this.snapshot = snapshot.val();
        });
    }
    EnvironmentComponent.prototype.change = function (x) {
        switch (x) {
            case 'rain':
                if (this.snapshot.rain == true) {
                    this.environment.update({ rain: false });
                    break;
                }
                else {
                    this.environment.update({ rain: true });
                    break;
                }
            case 'fog':
                if (this.snapshot.fog == true) {
                    this.environment.update({ fog: false });
                    break;
                }
                else {
                    this.environment.update({ fog: true });
                    break;
                }
            case 'lightning':
                if (this.snapshot.lightning == true) {
                    this.environment.update({ lightning: false });
                    break;
                }
                else {
                    this.environment.update({ lightning: true });
                    break;
                }
            case 'sunshine':
                if (this.snapshot.sunshine == true) {
                    this.environment.update({ sunshine: false });
                    break;
                }
                else {
                    this.environment.update({ sunshine: true });
                    break;
                }
            case 'hail':
                if (this.snapshot.hail == true) {
                    this.environment.update({ hail: false });
                    break;
                }
                else {
                    this.environment.update({ hail: true });
                    break;
                }
            case 'wind':
                if (this.snapshot.wind == true) {
                    this.environment.update({ wind: false });
                    break;
                }
                else {
                    this.environment.update({ wind: true });
                    break;
                }
        }
    };
    EnvironmentComponent = __decorate([
        core_1.Component({
            selector: 'environment',
            template: "\n  <div *ngIf=\"snapshot\">\n    <p>Rain: {{snapshot.rain}}</p>\n    <button (click)=\"change('rain')\">Change Rain</button>\n    <p>Fog: {{snapshot.fog}}</p>\n    <button (click)=\"change('fog')\">Change Fog</button>\n    <p>Lightning: {{snapshot.lightning}}</p>\n    <button (click)=\"change('lightning')\">Change Lightning</button>\n    <p>Sunshine: {{snapshot.sunshine}}</p>\n    <button (click)=\"change('sunshine')\">Change Sunshine</button>\n    <p>Hail: {{snapshot.hail}}</p>\n    <button (click)=\"change('hail')\">Change Hail</button>\n    <p>Wind: {{snapshot.wind}}</p>\n    <button (click)=\"change('wind')\">Change Wind</button>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, environment_service_1.EnvironmentService])
    ], EnvironmentComponent);
    return EnvironmentComponent;
}());
exports.EnvironmentComponent = EnvironmentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50L2Vudmlyb25tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDZCQUFtRCxjQUFjLENBQUMsQ0FBQTtBQUdsRSxvQ0FBaUMsdUJBQXVCLENBQUMsQ0FBQTtBQXNCekQ7SUFZRSw4QkFBWSxFQUFjLEVBQVUsbUJBQXNDO1FBWjVFLGlCQXlFQztRQTdEcUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN4RSxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLGdCQUFnQixFQUFDLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNoSCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxxQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLE1BQU0sQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDUixLQUFLLE1BQU07Z0JBQ1QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtvQkFDckMsS0FBSyxDQUFDO2dCQUNSLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztvQkFDckMsS0FBSyxDQUFDO2dCQUNSLENBQUM7WUFDSCxLQUFLLEtBQUs7Z0JBQ04sRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtvQkFDcEMsS0FBSyxDQUFDO2dCQUNSLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztvQkFDcEMsS0FBSyxDQUFDO2dCQUNSLENBQUM7WUFDTCxLQUFLLFdBQVc7Z0JBQ2QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtvQkFDMUMsS0FBSyxDQUFDO2dCQUNSLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztvQkFDMUMsS0FBSyxDQUFDO2dCQUNSLENBQUM7WUFDSCxLQUFLLFVBQVU7Z0JBQ2IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtvQkFDekMsS0FBSyxDQUFDO2dCQUNSLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztvQkFDekMsS0FBSyxDQUFDO2dCQUNSLENBQUM7WUFDSCxLQUFLLE1BQU07Z0JBQ1QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtvQkFDckMsS0FBSyxDQUFDO2dCQUNSLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztvQkFDckMsS0FBSyxDQUFDO2dCQUNSLENBQUM7WUFDSCxLQUFLLE1BQU07Z0JBQ1QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtvQkFDckMsS0FBSyxDQUFDO2dCQUNSLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztvQkFDckMsS0FBSyxDQUFDO2dCQUNSLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQTVGSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsa3BCQWVUO1NBQ0YsQ0FBQzs7NEJBQUE7SUEyRUYsMkJBQUM7QUFBRCxDQXpFQSxBQXlFQyxJQUFBO0FBekVZLDRCQUFvQix1QkF5RWhDLENBQUEiLCJmaWxlIjoiZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gJy4vRW52aXJvbm1lbnQnO1xyXG5pbXBvcnQge0Vudmlyb25tZW50U2VydmljZX0gZnJvbSAnLi9lbnZpcm9ubWVudC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW52aXJvbm1lbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiAqbmdJZj1cInNuYXBzaG90XCI+XHJcbiAgICA8cD5SYWluOiB7e3NuYXBzaG90LnJhaW59fTwvcD5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZSgncmFpbicpXCI+Q2hhbmdlIFJhaW48L2J1dHRvbj5cclxuICAgIDxwPkZvZzoge3tzbmFwc2hvdC5mb2d9fTwvcD5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZSgnZm9nJylcIj5DaGFuZ2UgRm9nPC9idXR0b24+XHJcbiAgICA8cD5MaWdodG5pbmc6IHt7c25hcHNob3QubGlnaHRuaW5nfX08L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2UoJ2xpZ2h0bmluZycpXCI+Q2hhbmdlIExpZ2h0bmluZzwvYnV0dG9uPlxyXG4gICAgPHA+U3Vuc2hpbmU6IHt7c25hcHNob3Quc3Vuc2hpbmV9fTwvcD5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZSgnc3Vuc2hpbmUnKVwiPkNoYW5nZSBTdW5zaGluZTwvYnV0dG9uPlxyXG4gICAgPHA+SGFpbDoge3tzbmFwc2hvdC5oYWlsfX08L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2UoJ2hhaWwnKVwiPkNoYW5nZSBIYWlsPC9idXR0b24+XHJcbiAgICA8cD5XaW5kOiB7e3NuYXBzaG90LndpbmR9fTwvcD5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZSgnd2luZCcpXCI+Q2hhbmdlIFdpbmQ8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50Q29tcG9uZW50e1xyXG4gIGVudmlyb25tZW50OkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIFVSTDogc3RyaW5nO1xyXG4gIHNuYXBzaG90OiB7XHJcbiAgICBmb2c6Ym9vbGVhbixcclxuICAgIGhhaWw6Ym9vbGVhbixcclxuICAgIGxpZ2h0bmluZzpib29sZWFuLFxyXG4gICAgcmFpbjpib29sZWFuLFxyXG4gICAgc3Vuc2hpbmU6Ym9vbGVhbixcclxuICAgIHdpbmQ6Ym9vbGVhbixcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFmOkFuZ3VsYXJGaXJlLCBwcml2YXRlIF9lbnZpcm9ubWVudFNlcnZpY2U6RW52aXJvbm1lbnRTZXJ2aWNlKXtcclxuICAgIHRoaXMuVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB0aGlzLmVudmlyb25tZW50ID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9HbG9iYWxzL09uT2ZmJyx7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLmVudmlyb25tZW50LnN1YnNjcmliZShzbmFwc2hvdCA9PntcclxuICAgICAgY29uc29sZS5sb2coc25hcHNob3QudmFsKCkpO1xyXG4gICAgICB0aGlzLnNuYXBzaG90ID0gc25hcHNob3QudmFsKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlKHgpe1xyXG4gICAgc3dpdGNoKHgpe1xyXG4gICAgICBjYXNlICdyYWluJzpcclxuICAgICAgICBpZih0aGlzLnNuYXBzaG90LnJhaW49PXRydWUpe1xyXG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC51cGRhdGUoe3JhaW46ZmFsc2V9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQudXBkYXRlKHtyYWluOnRydWV9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSAnZm9nJzpcclxuICAgICAgICAgIGlmKHRoaXMuc25hcHNob3QuZm9nPT10cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC51cGRhdGUoe2ZvZzpmYWxzZX0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC51cGRhdGUoe2ZvZzp0cnVlfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBjYXNlICdsaWdodG5pbmcnOlxyXG4gICAgICAgIGlmKHRoaXMuc25hcHNob3QubGlnaHRuaW5nPT10cnVlKXtcclxuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQudXBkYXRlKHtsaWdodG5pbmc6ZmFsc2V9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQudXBkYXRlKHtsaWdodG5pbmc6dHJ1ZX0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICdzdW5zaGluZSc6XHJcbiAgICAgICAgaWYodGhpcy5zbmFwc2hvdC5zdW5zaGluZT09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnVwZGF0ZSh7c3Vuc2hpbmU6ZmFsc2V9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQudXBkYXRlKHtzdW5zaGluZTp0cnVlfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgJ2hhaWwnOlxyXG4gICAgICAgIGlmKHRoaXMuc25hcHNob3QuaGFpbD09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnVwZGF0ZSh7aGFpbDpmYWxzZX0pXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC51cGRhdGUoe2hhaWw6dHJ1ZX0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICd3aW5kJzpcclxuICAgICAgICBpZih0aGlzLnNuYXBzaG90LndpbmQ9PXRydWUpe1xyXG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC51cGRhdGUoe3dpbmQ6ZmFsc2V9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQudXBkYXRlKHt3aW5kOnRydWV9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
