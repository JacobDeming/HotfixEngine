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
var typeahead_utils_1 = require('./typeahead-utils');
var typeahead_container_component_1 = require('./typeahead-container.component');
var typeahead_options_class_1 = require('./typeahead-options.class');
var lang_1 = require('@angular/core/src/facade/lang');
/* tslint:disable */
var KeyboardEvent = lang_1.global.KeyboardEvent;
/* tslint:enable */
// https://github.com/angular/angular/blob/master/modules/@angular/src/core/forms/directives/shared.ts
function setProperty(renderer, elementRef, propName, propValue) {
    renderer.setElementProperty(elementRef.nativeElement, propName, propValue);
}
var TypeaheadDirective = (function () {
    function TypeaheadDirective(cd, viewContainerRef, element, renderer, loader) {
        this.typeaheadLoading = new core_1.EventEmitter(false);
        this.typeaheadNoResults = new core_1.EventEmitter(false);
        this.typeaheadOnSelect = new core_1.EventEmitter(false);
        this.typeaheadMinLength = void 0;
        this.typeaheadAsync = void 0;
        this.typeaheadLatinize = true;
        this.typeaheadSingleWords = true;
        this.typeaheadWordDelimiters = ' ';
        this.typeaheadPhraseDelimiters = '\'"';
        this.isTypeaheadOptionsListActive = false;
        this._matches = [];
        this.placement = 'bottom-left';
        this.element = element;
        this.cd = cd;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.loader = loader;
    }
    TypeaheadDirective.prototype.onChange = function (e) {
        if (this.container) {
            // esc
            if (e.keyCode === 27) {
                this.hide();
                return;
            }
            // up
            if (e.keyCode === 38) {
                this.container.prevActiveMatch();
                return;
            }
            // down
            if (e.keyCode === 40) {
                this.container.nextActiveMatch();
                return;
            }
            // enter
            if (e.keyCode === 13) {
                this.container.selectActiveMatch();
                return;
            }
        }
        // Ensure that we have typed enough characters before triggering the
        // matchers
        if (this.cd.model.toString().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            if (this.typeaheadAsync === true) {
                this.debouncer();
            }
            if (!this.typeaheadAsync) {
                this.processMatches();
                this.finalizeAsyncCall();
            }
        }
        else {
            // Not enough characters typed? Hide the popup.
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onFocus = function () {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            if (this.typeaheadAsync === true) {
                this.debouncer();
            }
            if (!this.typeaheadAsync) {
                this.processMatches();
                this.finalizeAsyncCall();
            }
        }
    };
    TypeaheadDirective.prototype.onBlur = function () {
        if (this.container && !this.container.isFocused) {
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onKeydown = function (e) {
        // no container - no problems
        if (!this.container) {
            return;
        }
        // if items is visible - prevent form submition
        if (e.keyCode === 13) {
            e.preventDefault();
            return;
        }
        // if shift + tab, close items list
        if (e.shiftKey && e.keyCode === 9) {
            this.hide();
            return;
        }
        // if tab select current item
        if (!e.shiftKey && e.keyCode === 9) {
            this.container.selectActiveMatch();
            return;
        }
    };
    TypeaheadDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength = this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === void 0 && typeof this.typeahead !== 'function') {
            this.typeaheadAsync = false;
        }
        // async should be true for any case of function
        if (typeof this.typeahead === 'function') {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync === true) {
            this.debouncer = this.debounce(function () {
                if (typeof _this.typeahead === 'function') {
                    _this.typeahead()
                        .then(function (matches) {
                        _this._matches = [];
                        for (var i = 0; i < matches.length; i++) {
                            _this._matches.push(matches[i]);
                            if (_this._matches.length > _this.typeaheadOptionsLimit - 1) {
                                break;
                            }
                        }
                        _this.finalizeAsyncCall();
                    });
                }
                // source is array
                if (typeof _this.typeahead === 'object' && _this.typeahead.length) {
                    _this.processMatches();
                    _this.finalizeAsyncCall();
                }
            }, 100);
        }
    };
    TypeaheadDirective.prototype.show = function (matches) {
        var _this = this;
        var options = new typeahead_options_class_1.TypeaheadOptions({
            typeaheadRef: this,
            placement: this.placement,
            animation: false
        });
        var binding = core_1.ReflectiveInjector.resolve([
            core_1.provide(typeahead_options_class_1.TypeaheadOptions, { useValue: options })
        ]);
        this.popup = this.loader
            .loadNextToLocation(typeahead_container_component_1.TypeaheadContainerComponent, this.viewContainerRef, binding)
            .then(function (componentRef) {
            componentRef.instance.position(_this.viewContainerRef.element);
            _this.container = componentRef.instance;
            _this.container.parent = _this;
            // This improves the speedas it won't have to be done for each list item
            var normalizedQuery = (_this.typeaheadLatinize
                ? typeahead_utils_1.TypeaheadUtils.latinize(_this.cd.model)
                : _this.cd.model).toString()
                .toLowerCase();
            _this.container.query = _this.typeaheadSingleWords
                ? typeahead_utils_1.TypeaheadUtils.tokenize(normalizedQuery, _this.typeaheadWordDelimiters, _this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            _this.container.matches = matches;
            _this.container.field = _this.typeaheadOptionField;
            _this.element.nativeElement.focus();
            return componentRef;
        });
    };
    TypeaheadDirective.prototype.hide = function () {
        var _this = this;
        if (this.container) {
            this.popup.then(function (componentRef) {
                componentRef.destroy();
                _this.container = void 0;
                return componentRef;
            });
        }
    };
    TypeaheadDirective.prototype.changeModel = function (value) {
        var valueStr = ((typeof value === 'object' && this.typeaheadOptionField)
            ? value[this.typeaheadOptionField]
            : value).toString();
        this.cd.viewToModelUpdate(valueStr);
        setProperty(this.renderer, this.element, 'value', valueStr);
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadDirective.prototype.debounce = function (func, wait) {
        var timeout;
        var args;
        var timestamp;
        var waitOriginal = wait;
        return function () {
            // save details of latest call
            args = [].slice.call(arguments, 0);
            timestamp = Date.now();
            // this trick is about implementing of 'typeaheadWaitMs'
            // in this case we have adaptive 'wait' parameter
            // we should use standard 'wait'('waitOriginal') in case of
            // popup is opened, otherwise - 'typeaheadWaitMs' parameter
            wait = this.container ? waitOriginal : this.typeaheadWaitMs;
            // this is where the magic happens
            var later = function () {
                // how long ago was the last call
                var last = Date.now() - timestamp;
                // if the latest call was less that the wait period ago
                // then we reset the timeout to wait for the difference
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                }
                else {
                    timeout = void 0;
                    func.apply(this, args);
                }
            };
            // we only need to set the timer now if one isn't already running
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
        };
    };
    TypeaheadDirective.prototype.processMatches = function () {
        this._matches = [];
        if (!this.typeahead) {
            return;
        }
        if (!this.cd.model) {
            for (var i = 0; i < Math.min(this.typeaheadOptionsLimit, this.typeahead.length); i++) {
                this._matches.push(this.typeahead[i]);
            }
            return;
        }
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        var normalizedQuery = (this.typeaheadLatinize
            ? typeahead_utils_1.TypeaheadUtils.latinize(this.cd.model)
            : this.cd.model).toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? typeahead_utils_1.TypeaheadUtils.tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        for (var i = 0; i < this.typeahead.length; i++) {
            var match = void 0;
            if (typeof this.typeahead[i] === 'object' &&
                this.typeahead[i][this.typeaheadOptionField]) {
                match = this.typeaheadLatinize
                    ? typeahead_utils_1.TypeaheadUtils.latinize(this.typeahead[i][this.typeaheadOptionField].toString())
                    : this.typeahead[i][this.typeaheadOptionField].toString();
            }
            if (typeof this.typeahead[i] === 'string') {
                match = this.typeaheadLatinize
                    ? typeahead_utils_1.TypeaheadUtils.latinize(this.typeahead[i].toString())
                    : this.typeahead[i].toString();
            }
            if (!match) {
                console.log('Invalid match type', typeof this.typeahead[i], this.typeaheadOptionField);
                continue;
            }
            if (this.testMatch(match.toLowerCase(), normalizedQuery)) {
                this._matches.push(this.typeahead[i]);
                if (this._matches.length > this.typeaheadOptionsLimit - 1) {
                    break;
                }
            }
        }
    };
    TypeaheadDirective.prototype.testMatch = function (match, test) {
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        else {
            return match.indexOf(test) >= 0;
        }
    };
    TypeaheadDirective.prototype.finalizeAsyncCall = function () {
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(this.cd.model.toString().length >=
            this.typeaheadMinLength && this.matches.length <= 0);
        if (this._matches.length <= 0) {
            this.hide();
            return;
        }
        if (this.container && this._matches.length > 0) {
            // This improves the speedas it won't have to be done for each list item
            var normalizedQuery = (this.typeaheadLatinize
                ? typeahead_utils_1.TypeaheadUtils.latinize(this.cd.model)
                : this.cd.model).toString()
                .toLowerCase();
            this.container.query = this.typeaheadSingleWords
                ? typeahead_utils_1.TypeaheadUtils.tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this.container.matches = this._matches;
        }
        if (!this.container && this._matches.length > 0) {
            this.show(this._matches);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TypeaheadDirective.prototype, "typeaheadLoading", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TypeaheadDirective.prototype, "typeaheadNoResults", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TypeaheadDirective.prototype, "typeaheadOnSelect", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TypeaheadDirective.prototype, "typeahead", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TypeaheadDirective.prototype, "typeaheadMinLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TypeaheadDirective.prototype, "typeaheadWaitMs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TypeaheadDirective.prototype, "typeaheadOptionsLimit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TypeaheadDirective.prototype, "typeaheadOptionField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadAsync", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadLatinize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadSingleWords", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TypeaheadDirective.prototype, "typeaheadWordDelimiters", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TypeaheadDirective.prototype, "typeaheadPhraseDelimiters", void 0);
    __decorate([
        core_1.HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TypeaheadDirective.prototype, "onChange", null);
    __decorate([
        core_1.HostListener('focus', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TypeaheadDirective.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TypeaheadDirective.prototype, "onBlur", null);
    __decorate([
        core_1.HostListener('keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TypeaheadDirective.prototype, "onKeydown", null);
    TypeaheadDirective = __decorate([
        core_1.Directive({
            selector: '[typeahead][ngModel]'
        }), 
        __metadata('design:paramtypes', [common_1.NgModel, core_1.ViewContainerRef, core_1.ElementRef, core_1.Renderer, core_1.DynamicComponentLoader])
    ], TypeaheadDirective);
    return TypeaheadDirective;
}());
exports.TypeaheadDirective = TypeaheadDirective;
