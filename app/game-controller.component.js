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
var GameControllerComponent = (function () {
    function GameControllerComponent() {
    }
    GameControllerComponent = __decorate([
        core_1.Component({
            selector: 'game-controller',
            template: "\n    <div class=\"container game-controller-container\">\n      <h4>Game Controller</h4>\n      <!-- Rectangular switch -->\n      <label class=\"switch\">\n        <input type=\"checkbox\">\n        <div class=\"slider\"></div>\n      </label>\n      <!-- Rounded switch -->\n      <label class=\"switch\">\n        <input type=\"checkbox\">\n        <div class=\"slider round\"></div>\n      </label>\n    </div>\n    ",
            styles: ["\n    .game-controller-container {\n      position: fixed\n      bottom: 0\n      right: 0\n    }\n    \n    /* The switch - the box around the slider */\n    .switch {\n      position: relative;\n      display: inline-block;\n      width: 60px;\n      height: 34px;\n    }\n\n    /* Hide default HTML checkbox */\n    .switch input {display:none;}\n\n    /* The slider */\n    .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ccc;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n\n    .slider:before {\n      position: absolute;\n      content: \"\";\n      height: 26px;\n      width: 26px;\n      left: 4px;\n      bottom: 4px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n\n    input:checked + .slider {\n      background-color: #2196F3;\n    }\n\n    input:focus + .slider {\n      box-shadow: 0 0 1px #2196F3;\n    }\n\n    input:checked + .slider:before {\n      -webkit-transform: translateX(26px);\n      -ms-transform: translateX(26px);\n      transform: translateX(26px);\n    }\n\n    /* Rounded sliders */\n    .slider.round {\n      border-radius: 34px;\n    }\n\n    .slider.round:before {\n      border-radius: 50%;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], GameControllerComponent);
    return GameControllerComponent;
}());
exports.GameControllerComponent = GameControllerComponent;
//# sourceMappingURL=game-controller.component.js.map