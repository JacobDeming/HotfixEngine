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
var timer_component_1 = require('../timer/timer.component');
var player1stats_component_1 = require('./player1stats.component');
var player2stats_component_1 = require('./player2stats.component');
var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'stats',
            template: "\n  \t<div class=\"row stats-wrapper\">\n\t  \t<player1stats></player1stats>\n\t  \t<player2stats></player2stats>\n  \t</div>\n  \t<timer></timer>\n  ",
            directives: [timer_component_1.TimerComponent, player1stats_component_1.Player1StatsComponent, player2stats_component_1.Player2StatsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzL3N0YXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLGdDQUE2QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hELHVDQUFvQywwQkFBMEIsQ0FBQyxDQUFBO0FBQy9ELHVDQUFvQywwQkFBMEIsQ0FBQyxDQUFBO0FBYy9EO0lBQUE7SUFBNkIsQ0FBQztJQVo5QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUMsd0pBTVI7WUFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFDLDhDQUFxQixFQUFDLDhDQUFxQixDQUFDO1NBQ3pFLENBQUM7O3NCQUFBO0lBRTJCLHFCQUFDO0FBQUQsQ0FBN0IsQUFBOEIsSUFBQTtBQUFqQixzQkFBYyxpQkFBRyxDQUFBIiwiZmlsZSI6InN0YXRzL3N0YXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7VGltZXJDb21wb25lbnR9IGZyb20gJy4uL3RpbWVyL3RpbWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGxheWVyMVN0YXRzQ29tcG9uZW50fSBmcm9tICcuL3BsYXllcjFzdGF0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BsYXllcjJTdGF0c0NvbXBvbmVudH0gZnJvbSAnLi9wbGF5ZXIyc3RhdHMuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3RhdHMnLFxyXG4gIHRlbXBsYXRlOmBcclxuICBcdDxkaXYgY2xhc3M9XCJyb3cgc3RhdHMtd3JhcHBlclwiPlxyXG5cdCAgXHQ8cGxheWVyMXN0YXRzPjwvcGxheWVyMXN0YXRzPlxyXG5cdCAgXHQ8cGxheWVyMnN0YXRzPjwvcGxheWVyMnN0YXRzPlxyXG4gIFx0PC9kaXY+XHJcbiAgXHQ8dGltZXI+PC90aW1lcj5cclxuICBgLFxyXG4gIGRpcmVjdGl2ZXM6IFtUaW1lckNvbXBvbmVudCxQbGF5ZXIxU3RhdHNDb21wb25lbnQsUGxheWVyMlN0YXRzQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRzQ29tcG9uZW50IHt9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
