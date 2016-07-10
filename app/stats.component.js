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
var common_1 = require('@angular/common');
var Champion = (function () {
    function Champion() {
    }
    return Champion;
}());
exports.Champion = Champion;
var CHAMPIONS = [
    { id: 1,
        type: 'Elementalist',
        hp: 50 },
    { id: 2,
        type: 'Paragon',
        hp: 30 },
];
var StatsComponent = (function () {
    function StatsComponent() {
        this.playerHP = 100;
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent.prototype.ngAfterViewInit = function () {
    };
    StatsComponent.prototype.ngOnChanges = function () {
        this.renderProgress(this.playerHP);
    };
    StatsComponent.prototype.renderStatBar = function (value) {
        value = Math.floor(value);
        console.log(value);
    };
    StatsComponent.prototype.renderProgress = function (progress) {
        progress = Math.floor(progress);
        if (progress < 25) {
            var angle = -90 + (progress / 100) * 360;
            $(".animate-0-25-b").css("transform", "rotate(" + angle + "deg)");
        }
        else if (progress >= 25 && progress < 50) {
            var angle = -90 + ((progress - 25) / 100) * 360;
            $(".animate-0-25-b").css("transform", "rotate(0deg)");
            $(".animate-25-50-b").css("transform", "rotate(" + angle + "deg)");
        }
        else if (progress >= 50 && progress < 75) {
            var angle = -90 + ((progress - 50) / 100) * 360;
            $(".animate-25-50-b, .animate-0-25-b").css("transform", "rotate(0deg)");
            $(".animate-50-75-b").css("transform", "rotate(" + angle + "deg)");
        }
        else if (progress >= 75 && progress <= 100) {
            var angle = -90 + ((progress - 75) / 100) * 360;
            $(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b").css("transform", "rotate(0deg)");
            $(".animate-75-100-b").css("transform", "rotate(" + angle + "deg)");
        }
        $(".text").html(progress + "%");
    };
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'stats',
            templateUrl: 'app/stats.component.html',
            properties: ['playerHP'],
            events: ['playerHPChange'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=stats.component.js.map