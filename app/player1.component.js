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
var stats_component_1 = require('./stats.component');
var sprites_component_1 = require('./sprites.component');
var Player1Component = (function () {
    function Player1Component() {
    }
    Player1Component = __decorate([
        core_1.Component({
            selector: 'player1',
            templateUrl: 'app/player1.component.html',
            directives: [
                stats_component_1.StatsComponent,
                sprites_component_1.SpritesComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Player1Component);
    return Player1Component;
}());
exports.Player1Component = Player1Component;
//# sourceMappingURL=player1.component.js.map