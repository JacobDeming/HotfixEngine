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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBTWUsZUFBZSxDQUFDLENBQUE7QUFFL0IsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFJbEQ7SUFBQTtJQUlBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxnQkFBUSxXQUlwQixDQUFBO0FBRUQsSUFBTSxTQUFTLEdBQWU7SUFDN0IsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNKLElBQUksRUFBRSxjQUFjO1FBQ3BCLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDWCxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ0osSUFBSSxFQUFFLFNBQVM7UUFDZixFQUFFLEVBQUUsRUFBRSxFQUFFO0NBQ1gsQ0FBQztBQVVGO0lBR0U7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUV0QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCx3Q0FBZSxHQUFmO0lBRUEsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBSUQsc0NBQWEsR0FBYixVQUFjLEtBQUs7UUFDakIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBS0QsdUNBQWMsR0FBZCxVQUFlLFFBQVE7UUFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLEdBQUMsR0FBRyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsU0FBUyxHQUFDLEtBQUssR0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBRSxFQUFFLElBQUksUUFBUSxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUMsR0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUM7WUFDMUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLFNBQVMsR0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUUsRUFBRSxJQUFJLFFBQVEsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDLEdBQUMsR0FBRyxDQUFDLEdBQUMsR0FBRyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxTQUFTLEdBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFFLEVBQUUsSUFBSSxRQUFRLElBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxHQUFDLEdBQUcsQ0FBQztZQUMxQyxDQUFDLENBQUMscURBQXFELENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3pGLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsU0FBUyxHQUFDLEtBQUssR0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQTVESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUN4QixNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxQixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxDQUFDO1NBQzlCLENBQUM7O3NCQUFBO0lBdURGLHFCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQXJEWSxzQkFBYyxpQkFxRDFCLENBQUEiLCJmaWxlIjoic3RhdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIENvbXBvbmVudCwgXHJcbiAgICAgICAgICBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgRXZlbnRFbWl0dGVyLCBcclxuICAgICAgICAgIE9uSW5pdCwgXHJcbiAgICAgICAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgICAgICAgT25DaGFuZ2VzXHJcbiAgICAgICAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5kZWNsYXJlIHZhciAkOkpRdWVyeVN0YXRpYztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFtcGlvbiB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgaHA6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQ0hBTVBJT05TOiBDaGFtcGlvbltdID0gW1xyXG4geyBpZDogMSwgXHJcbiAgICB0eXBlOiAnRWxlbWVudGFsaXN0JyxcclxuICAgIGhwOiA1MCB9LFxyXG4geyBpZDogMiwgXHJcbiAgICB0eXBlOiAnUGFyYWdvbicsXHJcbiAgICBocDogMzAgfSxcclxuXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3RhdHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL3N0YXRzLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm9wZXJ0aWVzOiBbJ3BsYXllckhQJ10sXHJcbiAgZXZlbnRzOiBbJ3BsYXllckhQQ2hhbmdlJ10sXHJcbiAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHsgXHJcbiAgcGxheWVySFA6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnBsYXllckhQID0gMTAwO1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5yZW5kZXJQcm9ncmVzcyh0aGlzLnBsYXllckhQKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmVuZGVyU3RhdEJhcih2YWx1ZSkge1xyXG4gICAgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIHJlbmRlclByb2dyZXNzKHByb2dyZXNzKSB7XHJcbiAgICBwcm9ncmVzcyA9IE1hdGguZmxvb3IocHJvZ3Jlc3MpO1xyXG4gICAgaWYgKHByb2dyZXNzPDI1KSB7XHJcbiAgICAgIHZhciBhbmdsZSA9IC05MCArIChwcm9ncmVzcy8xMDApKjM2MDtcclxuICAgICAgJChcIi5hbmltYXRlLTAtMjUtYlwiKS5jc3MoXCJ0cmFuc2Zvcm1cIixcInJvdGF0ZShcIithbmdsZStcImRlZylcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9ncmVzcz49MjUgJiYgcHJvZ3Jlc3M8NTApIHtcclxuICAgICAgdmFyIGFuZ2xlID0gLTkwICsgKChwcm9ncmVzcy0yNSkvMTAwKSozNjA7XHJcbiAgICAgICQoXCIuYW5pbWF0ZS0wLTI1LWJcIikuY3NzKFwidHJhbnNmb3JtXCIsXCJyb3RhdGUoMGRlZylcIik7XHJcbiAgICAgICQoXCIuYW5pbWF0ZS0yNS01MC1iXCIpLmNzcyhcInRyYW5zZm9ybVwiLFwicm90YXRlKFwiK2FuZ2xlK1wiZGVnKVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb2dyZXNzPj01MCAmJiBwcm9ncmVzczw3NSkge1xyXG4gICAgICB2YXIgYW5nbGUgPSAtOTAgKyAoKHByb2dyZXNzLTUwKS8xMDApKjM2MDtcclxuICAgICAgJChcIi5hbmltYXRlLTI1LTUwLWIsIC5hbmltYXRlLTAtMjUtYlwiKS5jc3MoXCJ0cmFuc2Zvcm1cIixcInJvdGF0ZSgwZGVnKVwiKTtcclxuICAgICAgJChcIi5hbmltYXRlLTUwLTc1LWJcIikuY3NzKFwidHJhbnNmb3JtXCIsXCJyb3RhdGUoXCIrYW5nbGUrXCJkZWcpXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvZ3Jlc3M+PTc1ICYmIHByb2dyZXNzPD0xMDApIHtcclxuICAgICAgdmFyIGFuZ2xlID0gLTkwICsgKChwcm9ncmVzcy03NSkvMTAwKSozNjA7XHJcbiAgICAgICQoXCIuYW5pbWF0ZS01MC03NS1iLCAuYW5pbWF0ZS0yNS01MC1iLCAuYW5pbWF0ZS0wLTI1LWJcIikuY3NzKFwidHJhbnNmb3JtXCIsXCJyb3RhdGUoMGRlZylcIik7XHJcbiAgICAgICQoXCIuYW5pbWF0ZS03NS0xMDAtYlwiKS5jc3MoXCJ0cmFuc2Zvcm1cIixcInJvdGF0ZShcIithbmdsZStcImRlZylcIik7XHJcbiAgICB9XHJcbiAgICAkKFwiLnRleHRcIikuaHRtbChwcm9ncmVzcytcIiVcIik7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
