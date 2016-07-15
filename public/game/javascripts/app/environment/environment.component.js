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
var EnvironmentComponent = (function () {
    function EnvironmentComponent(af) {
        this.environment = af.database.object('/Globals/OnOff');
    }
    EnvironmentComponent = __decorate([
        core_1.Component({
            selector: 'environment',
            template: "\n  <div *ngIf=\"environment\">\n    <p>Rain: {{(environment | async)?.rain}}</p>\n    <button (click)=\"change('rain')\">Change Rain</button>\n    <p>Fog: {{(environment | async)?.fog}}</p>\n    <button (click)=\"change('fog')\">Change Fog</button>\n    <p>Lightning: {{(environment | async)?.lightning}}</p>\n    <button (click)=\"change('lightning')\">Change Lightning</button>\n    <p>Sunshine: {{(environment | async)?.sunshine}}</p>\n    <button (click)=\"change('sunshine')\">Change Sunshine</button>\n    <p>Hail: {{(environment | async)?.hail}}</p>\n    <button (click)=\"change('hail')\">Change Hail</button>\n    <p>Wind: {{(environment | async)?.wind}}</p>\n    <button (click)=\"change('wind')\">Change Wind</button>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], EnvironmentComponent);
    return EnvironmentComponent;
}());
exports.EnvironmentComponent = EnvironmentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50L2Vudmlyb25tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDZCQUFtRCxjQUFjLENBQUMsQ0FBQTtBQXNCbEU7SUFHRSw4QkFBWSxFQUFjO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBekJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSx5dUJBZVQ7U0FDRixDQUFDOzs0QkFBQTtJQVFGLDJCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSw0QkFBb0IsdUJBTWhDLENBQUEiLCJmaWxlIjoiZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW52aXJvbm1lbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiAqbmdJZj1cImVudmlyb25tZW50XCI+XHJcbiAgICA8cD5SYWluOiB7eyhlbnZpcm9ubWVudCB8IGFzeW5jKT8ucmFpbn19PC9wPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlKCdyYWluJylcIj5DaGFuZ2UgUmFpbjwvYnV0dG9uPlxyXG4gICAgPHA+Rm9nOiB7eyhlbnZpcm9ubWVudCB8IGFzeW5jKT8uZm9nfX08L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2UoJ2ZvZycpXCI+Q2hhbmdlIEZvZzwvYnV0dG9uPlxyXG4gICAgPHA+TGlnaHRuaW5nOiB7eyhlbnZpcm9ubWVudCB8IGFzeW5jKT8ubGlnaHRuaW5nfX08L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2UoJ2xpZ2h0bmluZycpXCI+Q2hhbmdlIExpZ2h0bmluZzwvYnV0dG9uPlxyXG4gICAgPHA+U3Vuc2hpbmU6IHt7KGVudmlyb25tZW50IHwgYXN5bmMpPy5zdW5zaGluZX19PC9wPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlKCdzdW5zaGluZScpXCI+Q2hhbmdlIFN1bnNoaW5lPC9idXR0b24+XHJcbiAgICA8cD5IYWlsOiB7eyhlbnZpcm9ubWVudCB8IGFzeW5jKT8uaGFpbH19PC9wPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlKCdoYWlsJylcIj5DaGFuZ2UgSGFpbDwvYnV0dG9uPlxyXG4gICAgPHA+V2luZDoge3soZW52aXJvbm1lbnQgfCBhc3luYyk/LndpbmR9fTwvcD5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZSgnd2luZCcpXCI+Q2hhbmdlIFdpbmQ8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50Q29tcG9uZW50e1xyXG4gIGVudmlyb25tZW50OkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihhZjpBbmd1bGFyRmlyZSl7XHJcbiAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGFmLmRhdGFiYXNlLm9iamVjdCgnL0dsb2JhbHMvT25PZmYnKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
