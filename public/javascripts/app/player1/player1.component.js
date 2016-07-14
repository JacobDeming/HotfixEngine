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
var stats_component_1 = require('./stats/stats.component');
var sprites_component_1 = require('./sprites.component');
var Player1Component = (function () {
    function Player1Component() {
    }
    Player1Component = __decorate([
        core_1.Component({
            selector: 'player1',
            template: "\n  <stats></stats>\n  <sprites></sprites>\n  ",
            directives: [stats_component_1.StatsComponent, sprites_component_1.SpritesComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Player1Component);
    return Player1Component;
}());
exports.Player1Component = Player1Component;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcjEvcGxheWVyMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUUxQyxnQ0FBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQVdyRDtJQUFBO0lBQStCLENBQUM7SUFUaEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFDLGdEQUdSO1lBQ0QsVUFBVSxFQUFFLENBQUMsZ0NBQWMsRUFBQyxvQ0FBZ0IsQ0FBQztTQUM5QyxDQUFDOzt3QkFBQTtJQUU2Qix1QkFBQztBQUFELENBQS9CLEFBQWdDLElBQUE7QUFBbkIsd0JBQWdCLG1CQUFHLENBQUEiLCJmaWxlIjoicGxheWVyMS9wbGF5ZXIxLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtTdGF0c0NvbXBvbmVudH0gZnJvbSAnLi9zdGF0cy9zdGF0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Nwcml0ZXNDb21wb25lbnR9IGZyb20gJy4vc3ByaXRlcy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwbGF5ZXIxJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgPHN0YXRzPjwvc3RhdHM+XHJcbiAgPHNwcml0ZXM+PC9zcHJpdGVzPlxyXG4gIGAsXHJcbiAgZGlyZWN0aXZlczogW1N0YXRzQ29tcG9uZW50LFNwcml0ZXNDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyMUNvbXBvbmVudCB7fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
