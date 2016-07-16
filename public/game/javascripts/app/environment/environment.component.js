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
var http_1 = require('@angular/http');
var EnvironmentComponent = (function () {
    function EnvironmentComponent(af, _http) {
        var _this = this;
        this._http = _http;
        this.URL = window.location.href;
        this.onOff = af.database.object('/' + this.URL.split('/game/')[1] + '/Globals/OnOff', { preserveSnapshot: true });
        this.onOff.subscribe(function (snapshot) {
            _this.snapshot = snapshot.val();
        });
        this.environment = af.database.object('/' + this.URL.split('/game/')[1] + '/Globals/Environment');
    }
    EnvironmentComponent.prototype.changeEnvironment = function (x) {
        var aether = 1;
        var material = 1;
        var chaos = 1;
        var order = 1;
        switch (x) {
            case 'rain':
                if (this.snapshot.rain == true) {
                    this.onOff.update({ rain: false });
                    break;
                }
                else {
                    this.onOff.update({ rain: true });
                    break;
                }
            case 'fog':
                if (this.snapshot.fog == true) {
                    this.onOff.update({ fog: false });
                    break;
                }
                else {
                    this.onOff.update({ fog: true });
                    break;
                }
            case 'lightning':
                if (this.snapshot.lightning == true) {
                    this.onOff.update({ lightning: false });
                    break;
                }
                else {
                    this.onOff.update({ lightning: true });
                    break;
                }
            case 'sunshine':
                if (this.snapshot.sunshine == true) {
                    this.onOff.update({ sunshine: false });
                    break;
                }
                else {
                    this.onOff.update({ sunshine: true });
                    break;
                }
            case 'hail':
                if (this.snapshot.hail == true) {
                    this.onOff.update({ hail: false });
                    break;
                }
                else {
                    this.onOff.update({ hail: true });
                    break;
                }
            case 'wind':
                if (this.snapshot.wind == true) {
                    this.onOff.update({ wind: false });
                    break;
                }
                else {
                    this.onOff.update({ wind: true });
                    break;
                }
        }
        if (this.snapshot.rain == true) {
            chaos += 1;
            material += 2;
        }
        if (this.snapshot.fog == true) {
            aether += 2;
            order += 1;
        }
        if (this.snapshot.lightning == true) {
            aether += 1;
            chaos += 2;
        }
        if (this.snapshot.sunshine == true) {
            order += 2;
            material += 1;
        }
        if (this.snapshot.hail == true) {
            aether += 2;
            material += 2;
        }
        if (this.snapshot.wind == true) {
            order += 2;
            chaos += 2;
        }
        this.environment.set({ aether: aether, material: material, chaos: chaos, order: order });
        var body = { key: this.URL.split('/game/')[1] };
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        $.post('/update', body, function (result) {
            console.log("SENT!");
        });
    };
    EnvironmentComponent = __decorate([
        core_1.Component({
            selector: 'environment',
            template: "\n  <div *ngIf=\"snapshot\">\n    <p>Rain: {{snapshot.rain}}</p>\n    <button (click)=\"changeEnvironment('rain')\">Change Rain</button>\n    <p>Fog: {{snapshot.fog}}</p>\n    <button (click)=\"changeEnvironment('fog')\">Change Fog</button>\n    <p>Lightning: {{snapshot.lightning}}</p>\n    <button (click)=\"changeEnvironment('lightning')\">Change Lightning</button>\n    <p>Sunshine: {{snapshot.sunshine}}</p>\n    <button (click)=\"changeEnvironment('sunshine')\">Change Sunshine</button>\n    <p>Hail: {{snapshot.hail}}</p>\n    <button (click)=\"changeEnvironment('hail')\">Change Hail</button>\n    <p>Wind: {{snapshot.wind}}</p>\n    <button (click)=\"changeEnvironment('wind')\">Change Wind</button>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, http_1.Http])
    ], EnvironmentComponent);
    return EnvironmentComponent;
}());
exports.EnvironmentComponent = EnvironmentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50L2Vudmlyb25tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDZCQUFtRCxjQUFjLENBQUMsQ0FBQTtBQUNsRSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUF3QjNDO0lBYUUsOEJBQVksRUFBYyxFQUFVLEtBQVU7UUFiaEQsaUJBNEdDO1FBL0ZxQyxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsZ0JBQWdCLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMzQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELGdEQUFpQixHQUFqQixVQUFrQixDQUFDO1FBQ2pCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxNQUFNLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ1IsS0FBSyxNQUFNO2dCQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixDQUFDO1lBQ0gsS0FBSyxLQUFLO2dCQUNOLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7b0JBQzlCLEtBQUssQ0FBQztnQkFDUixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7b0JBQzlCLEtBQUssQ0FBQztnQkFDUixDQUFDO1lBQ0wsS0FBSyxXQUFXO2dCQUNkLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7b0JBQ3BDLEtBQUssQ0FBQztnQkFDUixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7b0JBQ3BDLEtBQUssQ0FBQztnQkFDUixDQUFDO1lBQ0gsS0FBSyxVQUFVO2dCQUNiLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7b0JBQ25DLEtBQUssQ0FBQztnQkFDUixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7b0JBQ25DLEtBQUssQ0FBQztnQkFDUixDQUFDO1lBQ0gsS0FBSyxNQUFNO2dCQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixDQUFDO1lBQ0gsS0FBSyxNQUFNO2dCQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixDQUFDO1FBQ0wsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNYLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNaLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ1osS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNmLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDWCxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDWixRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDWCxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2YsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDL0UsSUFBTSxJQUFJLEdBQUcsRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMvQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLFVBQVMsTUFBTTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsQ0FBQztJQS9ISDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsb3RCQWVUO1NBQ0YsQ0FBQzs7NEJBQUE7SUE4R0YsMkJBQUM7QUFBRCxDQTVHQSxBQTRHQyxJQUFBO0FBNUdZLDRCQUFvQix1QkE0R2hDLENBQUEiLCJmaWxlIjoiZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuaW1wb3J0IHtIdHRwLEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuZGVjbGFyZSB2YXIgJDpKUXVlcnlTdGF0aWM7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vudmlyb25tZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgKm5nSWY9XCJzbmFwc2hvdFwiPlxyXG4gICAgPHA+UmFpbjoge3tzbmFwc2hvdC5yYWlufX08L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbnZpcm9ubWVudCgncmFpbicpXCI+Q2hhbmdlIFJhaW48L2J1dHRvbj5cclxuICAgIDxwPkZvZzoge3tzbmFwc2hvdC5mb2d9fTwvcD5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZUVudmlyb25tZW50KCdmb2cnKVwiPkNoYW5nZSBGb2c8L2J1dHRvbj5cclxuICAgIDxwPkxpZ2h0bmluZzoge3tzbmFwc2hvdC5saWdodG5pbmd9fTwvcD5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZUVudmlyb25tZW50KCdsaWdodG5pbmcnKVwiPkNoYW5nZSBMaWdodG5pbmc8L2J1dHRvbj5cclxuICAgIDxwPlN1bnNoaW5lOiB7e3NuYXBzaG90LnN1bnNoaW5lfX08L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbnZpcm9ubWVudCgnc3Vuc2hpbmUnKVwiPkNoYW5nZSBTdW5zaGluZTwvYnV0dG9uPlxyXG4gICAgPHA+SGFpbDoge3tzbmFwc2hvdC5oYWlsfX08L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbnZpcm9ubWVudCgnaGFpbCcpXCI+Q2hhbmdlIEhhaWw8L2J1dHRvbj5cclxuICAgIDxwPldpbmQ6IHt7c25hcHNob3Qud2luZH19PC9wPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlRW52aXJvbm1lbnQoJ3dpbmQnKVwiPkNoYW5nZSBXaW5kPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudENvbXBvbmVudHtcclxuICBvbk9mZjpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBlbnZpcm9ubWVudDpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBVUkw6IHN0cmluZztcclxuICBzbmFwc2hvdDoge1xyXG4gICAgZm9nOmJvb2xlYW4sXHJcbiAgICBoYWlsOmJvb2xlYW4sXHJcbiAgICBsaWdodG5pbmc6Ym9vbGVhbixcclxuICAgIHJhaW46Ym9vbGVhbixcclxuICAgIHN1bnNoaW5lOmJvb2xlYW4sXHJcbiAgICB3aW5kOmJvb2xlYW4sXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihhZjpBbmd1bGFyRmlyZSwgcHJpdmF0ZSBfaHR0cDpIdHRwKXtcclxuICAgIHRoaXMuVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB0aGlzLm9uT2ZmID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9HbG9iYWxzL09uT2ZmJyx7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLm9uT2ZmLnN1YnNjcmliZShzbmFwc2hvdCA9PntcclxuICAgICAgdGhpcy5zbmFwc2hvdCA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgfSlcclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBhZi5kYXRhYmFzZS5vYmplY3QoJy8nK3RoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXSsnL0dsb2JhbHMvRW52aXJvbm1lbnQnKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUVudmlyb25tZW50KHgpe1xyXG4gICAgdmFyIGFldGhlciA9IDE7XHJcbiAgICB2YXIgbWF0ZXJpYWwgPSAxO1xyXG4gICAgdmFyIGNoYW9zID0gMTtcclxuICAgIHZhciBvcmRlciA9IDE7XHJcbiAgICBzd2l0Y2goeCl7XHJcbiAgICAgIGNhc2UgJ3JhaW4nOlxyXG4gICAgICAgIGlmKHRoaXMuc25hcHNob3QucmFpbj09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLm9uT2ZmLnVwZGF0ZSh7cmFpbjpmYWxzZX0pXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbk9mZi51cGRhdGUoe3JhaW46dHJ1ZX0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICdmb2cnOlxyXG4gICAgICAgICAgaWYodGhpcy5zbmFwc2hvdC5mb2c9PXRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLm9uT2ZmLnVwZGF0ZSh7Zm9nOmZhbHNlfSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uT2ZmLnVwZGF0ZSh7Zm9nOnRydWV9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGNhc2UgJ2xpZ2h0bmluZyc6XHJcbiAgICAgICAgaWYodGhpcy5zbmFwc2hvdC5saWdodG5pbmc9PXRydWUpe1xyXG4gICAgICAgICAgdGhpcy5vbk9mZi51cGRhdGUoe2xpZ2h0bmluZzpmYWxzZX0pXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbk9mZi51cGRhdGUoe2xpZ2h0bmluZzp0cnVlfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgJ3N1bnNoaW5lJzpcclxuICAgICAgICBpZih0aGlzLnNuYXBzaG90LnN1bnNoaW5lPT10cnVlKXtcclxuICAgICAgICAgIHRoaXMub25PZmYudXBkYXRlKHtzdW5zaGluZTpmYWxzZX0pXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbk9mZi51cGRhdGUoe3N1bnNoaW5lOnRydWV9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSAnaGFpbCc6XHJcbiAgICAgICAgaWYodGhpcy5zbmFwc2hvdC5oYWlsPT10cnVlKXtcclxuICAgICAgICAgIHRoaXMub25PZmYudXBkYXRlKHtoYWlsOmZhbHNlfSlcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm9uT2ZmLnVwZGF0ZSh7aGFpbDp0cnVlfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgJ3dpbmQnOlxyXG4gICAgICAgIGlmKHRoaXMuc25hcHNob3Qud2luZD09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLm9uT2ZmLnVwZGF0ZSh7d2luZDpmYWxzZX0pXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbk9mZi51cGRhdGUoe3dpbmQ6dHJ1ZX0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc25hcHNob3QucmFpbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgY2hhb3MgKz0gMTtcclxuICAgICAgICBtYXRlcmlhbCArPSAyO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc25hcHNob3QuZm9nID09IHRydWUpIHtcclxuICAgICAgICBhZXRoZXIgKz0gMjtcclxuICAgICAgICBvcmRlciArPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc25hcHNob3QubGlnaHRuaW5nID09IHRydWUpIHtcclxuICAgICAgICBhZXRoZXIgKz0gMTtcclxuICAgICAgICBjaGFvcyArPSAyO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc25hcHNob3Quc3Vuc2hpbmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIG9yZGVyICs9IDI7XHJcbiAgICAgICAgbWF0ZXJpYWwgKz0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNuYXBzaG90LmhhaWwgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGFldGhlciArPSAyO1xyXG4gICAgICAgIG1hdGVyaWFsICs9IDI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zbmFwc2hvdC53aW5kID09IHRydWUpIHtcclxuICAgICAgICBvcmRlciArPSAyO1xyXG4gICAgICAgIGNoYW9zICs9IDI7XHJcbiAgICB9XHJcbiAgdGhpcy5lbnZpcm9ubWVudC5zZXQoe2FldGhlcjphZXRoZXIsbWF0ZXJpYWw6bWF0ZXJpYWwsY2hhb3M6Y2hhb3Msb3JkZXI6b3JkZXJ9KVxyXG4gIGNvbnN0IGJvZHkgPSB7a2V5OnRoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXX07XHJcbiAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgJC5wb3N0KCcvdXBkYXRlJyxib2R5LGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNFTlQhXCIpO1xyXG4gIH0pXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
