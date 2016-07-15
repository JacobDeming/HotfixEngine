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
    };
    EnvironmentComponent = __decorate([
        core_1.Component({
            selector: 'environment',
            template: "\n  <div *ngIf=\"snapshot\">\n    <p>Rain: {{snapshot.rain}}</p>\n    <button (click)=\"changeEnvironment('rain')\">Change Rain</button>\n    <p>Fog: {{snapshot.fog}}</p>\n    <button (click)=\"changeEnvironment('fog')\">Change Fog</button>\n    <p>Lightning: {{snapshot.lightning}}</p>\n    <button (click)=\"changeEnvironment('lightning')\">Change Lightning</button>\n    <p>Sunshine: {{snapshot.sunshine}}</p>\n    <button (click)=\"changeEnvironment('sunshine')\">Change Sunshine</button>\n    <p>Hail: {{snapshot.hail}}</p>\n    <button (click)=\"changeEnvironment('hail')\">Change Hail</button>\n    <p>Wind: {{snapshot.wind}}</p>\n    <button (click)=\"changeEnvironment('wind')\">Change Wind</button>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, environment_service_1.EnvironmentService])
    ], EnvironmentComponent);
    return EnvironmentComponent;
}());
exports.EnvironmentComponent = EnvironmentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50L2Vudmlyb25tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDZCQUFtRCxjQUFjLENBQUMsQ0FBQTtBQUdsRSxvQ0FBaUMsdUJBQXVCLENBQUMsQ0FBQTtBQXNCekQ7SUFhRSw4QkFBWSxFQUFjLEVBQVUsbUJBQXNDO1FBYjVFLGlCQXVHQztRQTFGcUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN4RSxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLGdCQUFnQixFQUFDLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDM0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFRCxnREFBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNSLEtBQUssTUFBTTtnQkFDVCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO29CQUMvQixLQUFLLENBQUM7Z0JBQ1IsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1IsQ0FBQztZQUNILEtBQUssS0FBSztnQkFDTixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO29CQUM5QixLQUFLLENBQUM7Z0JBQ1IsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO29CQUM5QixLQUFLLENBQUM7Z0JBQ1IsQ0FBQztZQUNMLEtBQUssV0FBVztnQkFDZCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO29CQUNwQyxLQUFLLENBQUM7Z0JBQ1IsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO29CQUNwQyxLQUFLLENBQUM7Z0JBQ1IsQ0FBQztZQUNILEtBQUssVUFBVTtnQkFDYixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO29CQUNuQyxLQUFLLENBQUM7Z0JBQ1IsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO29CQUNuQyxLQUFLLENBQUM7Z0JBQ1IsQ0FBQztZQUNILEtBQUssTUFBTTtnQkFDVCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO29CQUMvQixLQUFLLENBQUM7Z0JBQ1IsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1IsQ0FBQztZQUNILEtBQUssTUFBTTtnQkFDVCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO29CQUMvQixLQUFLLENBQUM7Z0JBQ1IsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1IsQ0FBQztRQUNMLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDWCxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDWixLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2YsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNaLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ1gsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ1osUUFBUSxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ1gsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNmLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0lBQy9FLENBQUM7SUExSEg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLG90QkFlVDtTQUNGLENBQUM7OzRCQUFBO0lBeUdGLDJCQUFDO0FBQUQsQ0F2R0EsQUF1R0MsSUFBQTtBQXZHWSw0QkFBb0IsdUJBdUdoQyxDQUFBIiwiZmlsZSI6ImVudmlyb25tZW50L2Vudmlyb25tZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmd1bGFyRmlyZSxGaXJlYmFzZU9iamVjdE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XHJcblxyXG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tICcuL0Vudmlyb25tZW50JztcclxuaW1wb3J0IHtFbnZpcm9ubWVudFNlcnZpY2V9IGZyb20gJy4vZW52aXJvbm1lbnQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vudmlyb25tZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgKm5nSWY9XCJzbmFwc2hvdFwiPlxyXG4gICAgPHA+UmFpbjoge3tzbmFwc2hvdC5yYWlufX08L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbnZpcm9ubWVudCgncmFpbicpXCI+Q2hhbmdlIFJhaW48L2J1dHRvbj5cclxuICAgIDxwPkZvZzoge3tzbmFwc2hvdC5mb2d9fTwvcD5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZUVudmlyb25tZW50KCdmb2cnKVwiPkNoYW5nZSBGb2c8L2J1dHRvbj5cclxuICAgIDxwPkxpZ2h0bmluZzoge3tzbmFwc2hvdC5saWdodG5pbmd9fTwvcD5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZUVudmlyb25tZW50KCdsaWdodG5pbmcnKVwiPkNoYW5nZSBMaWdodG5pbmc8L2J1dHRvbj5cclxuICAgIDxwPlN1bnNoaW5lOiB7e3NuYXBzaG90LnN1bnNoaW5lfX08L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbnZpcm9ubWVudCgnc3Vuc2hpbmUnKVwiPkNoYW5nZSBTdW5zaGluZTwvYnV0dG9uPlxyXG4gICAgPHA+SGFpbDoge3tzbmFwc2hvdC5oYWlsfX08L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbnZpcm9ubWVudCgnaGFpbCcpXCI+Q2hhbmdlIEhhaWw8L2J1dHRvbj5cclxuICAgIDxwPldpbmQ6IHt7c25hcHNob3Qud2luZH19PC9wPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlRW52aXJvbm1lbnQoJ3dpbmQnKVwiPkNoYW5nZSBXaW5kPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudENvbXBvbmVudHtcclxuICBvbk9mZjpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBlbnZpcm9ubWVudDpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBVUkw6IHN0cmluZztcclxuICBzbmFwc2hvdDoge1xyXG4gICAgZm9nOmJvb2xlYW4sXHJcbiAgICBoYWlsOmJvb2xlYW4sXHJcbiAgICBsaWdodG5pbmc6Ym9vbGVhbixcclxuICAgIHJhaW46Ym9vbGVhbixcclxuICAgIHN1bnNoaW5lOmJvb2xlYW4sXHJcbiAgICB3aW5kOmJvb2xlYW4sXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihhZjpBbmd1bGFyRmlyZSwgcHJpdmF0ZSBfZW52aXJvbm1lbnRTZXJ2aWNlOkVudmlyb25tZW50U2VydmljZSl7XHJcbiAgICB0aGlzLlVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdGhpcy5vbk9mZiA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKycvR2xvYmFscy9Pbk9mZicse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgdGhpcy5vbk9mZi5zdWJzY3JpYmUoc25hcHNob3QgPT57XHJcbiAgICAgIHRoaXMuc25hcHNob3QgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgIH0pXHJcbiAgICB0aGlzLmVudmlyb25tZW50ID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9HbG9iYWxzL0Vudmlyb25tZW50Jyk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VFbnZpcm9ubWVudCh4KXtcclxuICAgIHZhciBhZXRoZXIgPSAxO1xyXG4gICAgdmFyIG1hdGVyaWFsID0gMTtcclxuICAgIHZhciBjaGFvcyA9IDE7XHJcbiAgICB2YXIgb3JkZXIgPSAxO1xyXG4gICAgc3dpdGNoKHgpe1xyXG4gICAgICBjYXNlICdyYWluJzpcclxuICAgICAgICBpZih0aGlzLnNuYXBzaG90LnJhaW49PXRydWUpe1xyXG4gICAgICAgICAgdGhpcy5vbk9mZi51cGRhdGUoe3JhaW46ZmFsc2V9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub25PZmYudXBkYXRlKHtyYWluOnRydWV9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSAnZm9nJzpcclxuICAgICAgICAgIGlmKHRoaXMuc25hcHNob3QuZm9nPT10cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5vbk9mZi51cGRhdGUoe2ZvZzpmYWxzZX0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbk9mZi51cGRhdGUoe2ZvZzp0cnVlfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBjYXNlICdsaWdodG5pbmcnOlxyXG4gICAgICAgIGlmKHRoaXMuc25hcHNob3QubGlnaHRuaW5nPT10cnVlKXtcclxuICAgICAgICAgIHRoaXMub25PZmYudXBkYXRlKHtsaWdodG5pbmc6ZmFsc2V9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub25PZmYudXBkYXRlKHtsaWdodG5pbmc6dHJ1ZX0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICdzdW5zaGluZSc6XHJcbiAgICAgICAgaWYodGhpcy5zbmFwc2hvdC5zdW5zaGluZT09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLm9uT2ZmLnVwZGF0ZSh7c3Vuc2hpbmU6ZmFsc2V9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub25PZmYudXBkYXRlKHtzdW5zaGluZTp0cnVlfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgJ2hhaWwnOlxyXG4gICAgICAgIGlmKHRoaXMuc25hcHNob3QuaGFpbD09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLm9uT2ZmLnVwZGF0ZSh7aGFpbDpmYWxzZX0pXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbk9mZi51cGRhdGUoe2hhaWw6dHJ1ZX0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICd3aW5kJzpcclxuICAgICAgICBpZih0aGlzLnNuYXBzaG90LndpbmQ9PXRydWUpe1xyXG4gICAgICAgICAgdGhpcy5vbk9mZi51cGRhdGUoe3dpbmQ6ZmFsc2V9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub25PZmYudXBkYXRlKHt3aW5kOnRydWV9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNuYXBzaG90LnJhaW4gPT0gdHJ1ZSkge1xyXG4gICAgICAgIGNoYW9zICs9IDE7XHJcbiAgICAgICAgbWF0ZXJpYWwgKz0gMjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNuYXBzaG90LmZvZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgYWV0aGVyICs9IDI7XHJcbiAgICAgICAgb3JkZXIgKz0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNuYXBzaG90LmxpZ2h0bmluZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgYWV0aGVyICs9IDE7XHJcbiAgICAgICAgY2hhb3MgKz0gMjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNuYXBzaG90LnN1bnNoaW5lID09IHRydWUpIHtcclxuICAgICAgICBvcmRlciArPSAyO1xyXG4gICAgICAgIG1hdGVyaWFsICs9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zbmFwc2hvdC5oYWlsID09IHRydWUpIHtcclxuICAgICAgICBhZXRoZXIgKz0gMjtcclxuICAgICAgICBtYXRlcmlhbCArPSAyO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc25hcHNob3Qud2luZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgb3JkZXIgKz0gMjtcclxuICAgICAgICBjaGFvcyArPSAyO1xyXG4gICAgfVxyXG4gIHRoaXMuZW52aXJvbm1lbnQuc2V0KHthZXRoZXI6YWV0aGVyLG1hdGVyaWFsOm1hdGVyaWFsLGNoYW9zOmNoYW9zLG9yZGVyOm9yZGVyfSlcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
