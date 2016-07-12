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
var stats_service_1 = require('../stats/stats.service');
var EnvironmentComponent = (function () {
    function EnvironmentComponent(_statsService) {
        this._statsService = _statsService;
        this.environment = {
            rain: false,
            fog: false,
            lightning: false,
            sunshine: false,
            hail: false,
            wind: false
        };
    }
    EnvironmentComponent.prototype.change = function (x) {
        console.log(this._statsService.champion);
        switch (x) {
            case 'rain':
                if (this.environment.rain == false) {
                    this.environment.rain = true;
                    return;
                }
                else {
                    this.environment.rain = false;
                    return;
                }
            case 'fog':
                if (this.environment.fog == false) {
                    this.environment.fog = true;
                    return;
                }
                else {
                    this.environment.fog = false;
                    return;
                }
            case 'lightning':
                if (this.environment.lightning == false) {
                    this.environment.lightning = true;
                    return;
                }
                else {
                    this.environment.lightning = false;
                    return;
                }
            case 'sunshine':
                if (this.environment.sunshine == false) {
                    this.environment.sunshine = true;
                    return;
                }
                else {
                    this.environment.sunshine = false;
                    return;
                }
            case 'hail':
                if (this.environment.hail == false) {
                    this.environment.hail = true;
                    return;
                }
                else {
                    this.environment.hail = false;
                    return;
                }
            case 'wind':
                if (this.environment.wind == false) {
                    this.environment.wind = true;
                    return;
                }
                else {
                    this.environment.wind = false;
                    return;
                }
        }
    };
    EnvironmentComponent = __decorate([
        core_1.Component({
            selector: 'environment',
            template: "\n  <p>Rain: {{environment.rain}}</p>\n  <button (click)=\"change('rain')\">Change Rain</button>\n  <p>Fog: {{environment.fog}}</p>\n  <button (click)=\"change('fog')\">Change Fog</button>\n  <p>Lightning: {{environment.lightning}}</p>\n  <button (click)=\"change('lightning')\">Change Lightning</button>\n  <p>Sunshine: {{environment.sunshine}}</p>\n  <button (click)=\"change('sunshine')\">Change Sunshine</button>\n  <p>Hail: {{environment.hail}}</p>\n  <button (click)=\"change('hail')\">Change Hail</button>\n  <p>Wind: {{environment.wind}}</p>\n  <button (click)=\"change('wind')\">Change Wind</button>\n  ",
        }), 
        __metadata('design:paramtypes', [stats_service_1.StatsService])
    ], EnvironmentComponent);
    return EnvironmentComponent;
}());
exports.EnvironmentComponent = EnvironmentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50L2Vudmlyb25tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThELGVBQWUsQ0FBQyxDQUFBO0FBRTlFLDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBcUJwRDtJQVVFLDhCQUFxQixhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQVRoRCxnQkFBVyxHQUFDO1lBQ1YsSUFBSSxFQUFDLEtBQUs7WUFDVixHQUFHLEVBQUMsS0FBSztZQUNULFNBQVMsRUFBQyxLQUFLO1lBQ2YsUUFBUSxFQUFDLEtBQUs7WUFDZCxJQUFJLEVBQUMsS0FBSztZQUNWLElBQUksRUFBQyxLQUFLO1NBQ1gsQ0FBQTtJQUVpRCxDQUFDO0lBRW5ELHFDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDUixLQUFLLE1BQU07Z0JBQ1QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO29CQUMzQixNQUFNLENBQUM7Z0JBQ1QsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBQyxLQUFLLENBQUM7b0JBQzVCLE1BQU0sQ0FBQztnQkFDVCxDQUFDO1lBQ0gsS0FBSyxLQUFLO2dCQUNSLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFFLEtBQUssQ0FBQyxDQUFBLENBQUM7b0JBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQztvQkFDMUIsTUFBTSxDQUFDO2dCQUNULENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUMsS0FBSyxDQUFDO29CQUMzQixNQUFNLENBQUM7Z0JBQ1QsQ0FBQztZQUNILEtBQUssV0FBVztnQkFDZCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsSUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDO29CQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7b0JBQ2hDLE1BQU0sQ0FBQztnQkFDVCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztvQkFDakMsTUFBTSxDQUFDO2dCQUNULENBQUM7WUFDSCxLQUFLLFVBQVU7Z0JBQ2IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO29CQUMvQixNQUFNLENBQUM7Z0JBQ1QsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7b0JBQ2hDLE1BQU0sQ0FBQztnQkFDVCxDQUFDO1lBQ0gsS0FBSyxNQUFNO2dCQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFFLEtBQUssQ0FBQyxDQUFBLENBQUM7b0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztvQkFDM0IsTUFBTSxDQUFDO2dCQUNULENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUMsS0FBSyxDQUFDO29CQUM1QixNQUFNLENBQUM7Z0JBQ1QsQ0FBQztZQUNILEtBQUssTUFBTTtnQkFDVCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7b0JBQzNCLE1BQU0sQ0FBQztnQkFDVCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQztvQkFDNUIsTUFBTSxDQUFDO2dCQUNULENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQWxGSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsc21CQWFUO1NBQ0YsQ0FBQzs7NEJBQUE7SUFtRUYsMkJBQUM7QUFBRCxDQWpFQSxBQWlFQyxJQUFBO0FBakVZLDRCQUFvQix1QkFpRWhDLENBQUEiLCJmaWxlIjoiZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsTmdTd2l0Y2gsTmdTd2l0Y2hXaGVuLE5nU3dpdGNoRGVmYXVsdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2hhbXBpb259IGZyb20gJy4uL3N0YXRzL2NoYW1waW9uJztcclxuaW1wb3J0IHtTdGF0c1NlcnZpY2V9IGZyb20gJy4uL3N0YXRzL3N0YXRzLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW52aXJvbm1lbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHA+UmFpbjoge3tlbnZpcm9ubWVudC5yYWlufX08L3A+XHJcbiAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlKCdyYWluJylcIj5DaGFuZ2UgUmFpbjwvYnV0dG9uPlxyXG4gIDxwPkZvZzoge3tlbnZpcm9ubWVudC5mb2d9fTwvcD5cclxuICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2UoJ2ZvZycpXCI+Q2hhbmdlIEZvZzwvYnV0dG9uPlxyXG4gIDxwPkxpZ2h0bmluZzoge3tlbnZpcm9ubWVudC5saWdodG5pbmd9fTwvcD5cclxuICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2UoJ2xpZ2h0bmluZycpXCI+Q2hhbmdlIExpZ2h0bmluZzwvYnV0dG9uPlxyXG4gIDxwPlN1bnNoaW5lOiB7e2Vudmlyb25tZW50LnN1bnNoaW5lfX08L3A+XHJcbiAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlKCdzdW5zaGluZScpXCI+Q2hhbmdlIFN1bnNoaW5lPC9idXR0b24+XHJcbiAgPHA+SGFpbDoge3tlbnZpcm9ubWVudC5oYWlsfX08L3A+XHJcbiAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlKCdoYWlsJylcIj5DaGFuZ2UgSGFpbDwvYnV0dG9uPlxyXG4gIDxwPldpbmQ6IHt7ZW52aXJvbm1lbnQud2luZH19PC9wPlxyXG4gIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZSgnd2luZCcpXCI+Q2hhbmdlIFdpbmQ8L2J1dHRvbj5cclxuICBgLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50Q29tcG9uZW50e1xyXG4gIGVudmlyb25tZW50PXtcclxuICAgIHJhaW46ZmFsc2UsXHJcbiAgICBmb2c6ZmFsc2UsXHJcbiAgICBsaWdodG5pbmc6ZmFsc2UsXHJcbiAgICBzdW5zaGluZTpmYWxzZSxcclxuICAgIGhhaWw6ZmFsc2UsXHJcbiAgICB3aW5kOmZhbHNlXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfc3RhdHNTZXJ2aWNlOiBTdGF0c1NlcnZpY2Upe31cclxuXHJcbiAgY2hhbmdlKHgpe1xyXG4gICAgY29uc29sZS5sb2codGhpcy5fc3RhdHNTZXJ2aWNlLmNoYW1waW9uKTtcclxuICAgIHN3aXRjaCh4KXtcclxuICAgICAgY2FzZSAncmFpbic6XHJcbiAgICAgICAgaWYodGhpcy5lbnZpcm9ubWVudC5yYWluPT1mYWxzZSl7XHJcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhaW49dHJ1ZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5yYWluPWZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSAnZm9nJzpcclxuICAgICAgICBpZih0aGlzLmVudmlyb25tZW50LmZvZz09ZmFsc2Upe1xyXG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5mb2c9dHJ1ZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5mb2c9ZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICdsaWdodG5pbmcnOlxyXG4gICAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnQubGlnaHRuaW5nPT1mYWxzZSl7XHJcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LmxpZ2h0bmluZz10cnVlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LmxpZ2h0bmluZz1mYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgJ3N1bnNoaW5lJzpcclxuICAgICAgICBpZih0aGlzLmVudmlyb25tZW50LnN1bnNoaW5lPT1mYWxzZSl7XHJcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnN1bnNoaW5lPXRydWU7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQuc3Vuc2hpbmU9ZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICdoYWlsJzpcclxuICAgICAgICBpZih0aGlzLmVudmlyb25tZW50LmhhaWw9PWZhbHNlKXtcclxuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQuaGFpbD10cnVlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LmhhaWw9ZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICd3aW5kJzpcclxuICAgICAgICBpZih0aGlzLmVudmlyb25tZW50LndpbmQ9PWZhbHNlKXtcclxuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQud2luZD10cnVlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LndpbmQ9ZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
