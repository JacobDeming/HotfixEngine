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
var SpritesComponent = (function () {
    function SpritesComponent() {
    }
    SpritesComponent.prototype.animateStanding = function () {
        var character, characterImage, canvas;
        function gameLoop() {
            window.requestAnimationFrame(gameLoop);
            character.update();
            character.render();
        }
        function sprite(options) {
            var that = {}, frameIndex = 0, tickCount = 0, ticksPerFrame = options.ticksPerFrame || 0, numberOfFrames = options.numberOfFrames || 1;
            that.context = options.context;
            that.width = options.width;
            that.height = options.height;
            that.image = options.image;
            that.update = function () {
                tickCount += 1;
                if (tickCount > ticksPerFrame) {
                    tickCount = 0;
                    // If the current frame index is in range
                    if (frameIndex < numberOfFrames - 1) {
                        // Go to the next frame
                        frameIndex += 1;
                    }
                    else {
                        frameIndex = 0;
                    }
                }
            };
            that.render = function () {
                // Clear the canvas
                that.context.clearRect(0, 0, that.width, that.height);
                // Draw the animation
                that.context.drawImage(that.image, frameIndex * that.width / numberOfFrames, 0, that.width / numberOfFrames, that.height, 0, 0, that.width / numberOfFrames, that.height);
            };
            return that;
        }
        // Get canvas
        canvas = document.getElementById("characterAnimation");
        canvas.width = 125;
        canvas.height = 162;
        // Create sprite sheet
        characterImage = new Image();
        // Create sprite
        character = sprite({
            context: canvas.getContext("2d"),
            width: 373,
            height: 162,
            image: characterImage,
            numberOfFrames: 4,
            ticksPerFrame: 4
        });
        // Load sprite sheet
        characterImage.addEventListener("load", gameLoop);
        characterImage.src = "app/sprites/player-1/gohan/gohan-standing.png";
    };
    SpritesComponent = __decorate([
        core_1.Component({
            selector: 'sprites',
            template: "\n    <div class=\"container sprites-container\">\n      <canvas id=\"characterAnimation\"></canvas>\n    </div>\n    \n    <div class=\"row\">\n      <button type=\"button\" (click)=\"animateStanding()\">Standing</button>\n      <button type=\"button\" id=\"attack\">Attack</button>\n      <button type=\"button\" id=\"magic\">Magic</button>\n      <button type=\"button\" id=\"damage\">Damage</button>\n      <button type=\"button\" id=\"defeat\">Defeated</button>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SpritesComponent);
    return SpritesComponent;
}());
exports.SpritesComponent = SpritesComponent;
//# sourceMappingURL=sprites.component.js.map