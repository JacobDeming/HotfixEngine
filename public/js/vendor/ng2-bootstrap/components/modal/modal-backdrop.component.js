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
var modal_options_class_1 = require('./modal-options.class');
var ModalBackdropOptions = (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
exports.ModalBackdropOptions = ModalBackdropOptions;
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(options, element) {
        this.isAnimated = true;
        this.isShown = false;
        this.isAnimated = options.animate;
        this.element = element;
    }
    ModalBackdropComponent = __decorate([
        core_1.Component({
            selector: 'bs-modal-backdrop',
            directives: [common_1.NgClass],
            template: "\n<div class=\"" + modal_options_class_1.ClassName.BACKDROP + "\"\n  [class." + modal_options_class_1.ClassName.IN + "]=\"isShown\"\n  [class." + modal_options_class_1.ClassName.FADE + "]=\"isAnimated\"></div>"
        }), 
        __metadata('design:paramtypes', [ModalBackdropOptions, core_1.ElementRef])
    ], ModalBackdropComponent);
    return ModalBackdropComponent;
}());
exports.ModalBackdropComponent = ModalBackdropComponent;
