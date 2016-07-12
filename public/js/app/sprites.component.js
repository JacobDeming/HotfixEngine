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
            var spriteObj = {
                context: options.context,
                width: options.width,
                height: options.height,
                image: options.image,
                update: function () { },
                render: function () { }
            }, frameIndex = 0, tickCount = 0, ticksPerFrame = options.ticksPerFrame || 0, numberOfFrames = options.numberOfFrames || 1;
            spriteObj.update = function () {
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
            spriteObj.render = function () {
                // Clear the canvas
                spriteObj.context.clearRect(0, 0, spriteObj.width, spriteObj.height);
                // Draw the animation
                spriteObj.context.drawImage(spriteObj.image, frameIndex * spriteObj.width / numberOfFrames, 0, spriteObj.width / numberOfFrames, spriteObj.height, 0, 0, spriteObj.width / numberOfFrames, spriteObj.height);
            };
            return spriteObj;
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
    SpritesComponent.prototype.animateAttack = function () {
        var character, characterImage, canvas;
        function gameLoop() {
            window.requestAnimationFrame(gameLoop);
            character.update();
            character.render();
        }
        function sprite(options) {
            var spriteObj = {
                context: options.context,
                width: options.width,
                height: options.height,
                image: options.image,
                update: function () { },
                render: function () { }
            }, frameIndex = 0, tickCount = 0, ticksPerFrame = options.ticksPerFrame || 0, numberOfFrames = options.numberOfFrames || 1;
            spriteObj.update = function () {
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
            spriteObj.render = function () {
                // Clear the canvas
                spriteObj.context.clearRect(0, 0, spriteObj.width, spriteObj.height);
                // Draw the animation
                spriteObj.context.drawImage(spriteObj.image, frameIndex * spriteObj.width / numberOfFrames, 0, spriteObj.width / numberOfFrames, spriteObj.height, 0, 0, spriteObj.width / numberOfFrames, spriteObj.height);
            };
            return spriteObj;
        }
        // Get canvas
        canvas = document.getElementById("characterAnimation");
        canvas.width = 133;
        canvas.height = 162;
        // Create sprite sheet
        characterImage = new Image();
        // Create sprite
        character = sprite({
            context: canvas.getContext("2d"),
            width: 588,
            height: 162,
            image: characterImage,
            numberOfFrames: 3.9,
            ticksPerFrame: 8
        });
        // Load sprite sheet
        characterImage.addEventListener("load", gameLoop);
        characterImage.src = "app/sprites/player-1/gohan/gohan-punch.png";
    };
    SpritesComponent = __decorate([
        core_1.Component({
            selector: 'sprites',
            template: "\n    <div class=\"container sprites-container\">\n      <canvas id=\"characterAnimation\"></canvas>\n    </div>\n    \n    <div class=\"row\">\n      <button type=\"button\" (click)=\"animateStanding()\">Standing</button>\n      <button type=\"button\" (click)=\"animateAttack()\">Attack</button>\n      <button type=\"button\" id=\"magic\">Magic</button>\n      <button type=\"button\" id=\"damage\">Damage</button>\n      <button type=\"button\" id=\"defeat\">Defeated</button>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SpritesComponent);
    return SpritesComponent;
}());
exports.SpritesComponent = SpritesComponent;

//# sourceMappingURL=data:application/json;base64,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LEVBQUUsR0FBRztZQUNuQixhQUFhLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7UUFFSCxvQkFBb0I7UUFDcEIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsRCxjQUFjLENBQUMsR0FBRyxHQUFHLDRDQUE0QyxDQUFDO0lBQ3BFLENBQUM7SUExTEg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLG9mQVlQO1NBQ0osQ0FBQzs7d0JBQUE7SUE2S0YsdUJBQUM7QUFBRCxDQTNLQSxBQTJLQyxJQUFBO0FBM0tZLHdCQUFnQixtQkEySzVCLENBQUEiLCJmaWxlIjoic3ByaXRlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3ByaXRlcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgc3ByaXRlcy1jb250YWluZXJcIj5cclxuICAgICAgPGNhbnZhcyBpZD1cImNoYXJhY3RlckFuaW1hdGlvblwiPjwvY2FudmFzPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFuaW1hdGVTdGFuZGluZygpXCI+U3RhbmRpbmc8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFuaW1hdGVBdHRhY2soKVwiPkF0dGFjazwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cIm1hZ2ljXCI+TWFnaWM8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkYW1hZ2VcIj5EYW1hZ2U8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWZlYXRcIj5EZWZlYXRlZDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlc0NvbXBvbmVudCB7IFxyXG4gIGNoYXJhY3RlckFjdGlvbjogc3RyaW5nXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGFuaW1hdGVTdGFuZGluZygpIHtcclxuICAgIHZhciBjaGFyYWN0ZXIsXHJcbiAgICAgIGNoYXJhY3RlckltYWdlLFxyXG4gICAgICBjYW52YXM7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgICBjaGFyYWN0ZXIudXBkYXRlKCk7XHJcbiAgICAgIGNoYXJhY3Rlci5yZW5kZXIoKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHNwcml0ZShvcHRpb25zKSB7XHJcbiAgICAgIHZhciBzcHJpdGVPYmogPSB7XHJcbiAgICAgICAgY29udGV4dDogb3B0aW9ucy5jb250ZXh0LFxyXG4gICAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXHJcbiAgICAgICAgaW1hZ2U6IG9wdGlvbnMuaW1hZ2UsXHJcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7fVxyXG4gICAgICB9LFxyXG4gICAgICAgIGZyYW1lSW5kZXggPSAwLFxyXG4gICAgICAgIHRpY2tDb3VudCA9IDAsXHJcbiAgICAgICAgdGlja3NQZXJGcmFtZSA9IG9wdGlvbnMudGlja3NQZXJGcmFtZSB8fCAwLFxyXG4gICAgICAgIG51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xyXG4gICAgICBcclxuICAgICAgc3ByaXRlT2JqLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aWNrQ291bnQgKz0gMTtcclxuICAgICAgICBpZiAodGlja0NvdW50ID4gdGlja3NQZXJGcmFtZSkge1xyXG4gICAgICAgICAgdGlja0NvdW50ID0gMDtcclxuICAgICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGZyYW1lIGluZGV4IGlzIGluIHJhbmdlXHJcbiAgICAgICAgICBpZiAoZnJhbWVJbmRleCA8IG51bWJlck9mRnJhbWVzIC0gMSkgeyAgXHJcbiAgICAgICAgICAgICAgLy8gR28gdG8gdGhlIG5leHQgZnJhbWVcclxuICAgICAgICAgICAgICBmcmFtZUluZGV4ICs9IDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGZyYW1lSW5kZXggPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHNwcml0ZU9iai5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIENsZWFyIHRoZSBjYW52YXNcclxuICAgICAgICBzcHJpdGVPYmouY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc3ByaXRlT2JqLndpZHRoLCBzcHJpdGVPYmouaGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBEcmF3IHRoZSBhbmltYXRpb25cclxuICAgICAgICBzcHJpdGVPYmouY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICBzcHJpdGVPYmouaW1hZ2UsXHJcbiAgICAgICAgICBmcmFtZUluZGV4ICogc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgICBzcHJpdGVPYmouaGVpZ2h0LFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICAgIHNwcml0ZU9iai5oZWlnaHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZU9iajtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgLy8gR2V0IGNhbnZhc1xyXG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFyYWN0ZXJBbmltYXRpb25cIik7XHJcbiAgICBjYW52YXMud2lkdGggPSAxMjU7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTsgIFxyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgY2hhcmFjdGVyID0gc3ByaXRlKHtcclxuICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgd2lkdGg6IDM3MyxcclxuICAgICAgaGVpZ2h0OiAxNjIsXHJcbiAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgbnVtYmVyT2ZGcmFtZXM6IDQsXHJcbiAgICAgIHRpY2tzUGVyRnJhbWU6IDRcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcclxuICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcclxuICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiYXBwL3Nwcml0ZXMvcGxheWVyLTEvZ29oYW4vZ29oYW4tc3RhbmRpbmcucG5nXCI7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlQXR0YWNrKCkge1xyXG4gICAgdmFyIGNoYXJhY3RlcixcclxuICAgICAgY2hhcmFjdGVySW1hZ2UsXHJcbiAgICAgIGNhbnZhcztcclxuXHJcbiAgICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3Rlci51cGRhdGUoKTtcclxuICAgICAgY2hhcmFjdGVyLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gc3ByaXRlKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIHNwcml0ZU9iaiA9IHtcclxuICAgICAgICBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQsXHJcbiAgICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCxcclxuICAgICAgICBpbWFnZTogb3B0aW9ucy5pbWFnZSxcclxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHt9XHJcbiAgICAgIH0sXHJcbiAgICAgICAgZnJhbWVJbmRleCA9IDAsXHJcbiAgICAgICAgdGlja0NvdW50ID0gMCxcclxuICAgICAgICB0aWNrc1BlckZyYW1lID0gb3B0aW9ucy50aWNrc1BlckZyYW1lIHx8IDAsXHJcbiAgICAgICAgbnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcbiAgICAgIFxyXG4gICAgICBzcHJpdGVPYmoudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpY2tDb3VudCArPSAxO1xyXG4gICAgICAgIGlmICh0aWNrQ291bnQgPiB0aWNrc1BlckZyYW1lKSB7XHJcbiAgICAgICAgICB0aWNrQ291bnQgPSAwO1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZnJhbWUgaW5kZXggaXMgaW4gcmFuZ2VcclxuICAgICAgICAgIGlmIChmcmFtZUluZGV4IDwgbnVtYmVyT2ZGcmFtZXMgLSAxKSB7ICBcclxuICAgICAgICAgICAgICAvLyBHbyB0byB0aGUgbmV4dCBmcmFtZVxyXG4gICAgICAgICAgICAgIGZyYW1lSW5kZXggKz0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZnJhbWVJbmRleCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgc3ByaXRlT2JqLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGNhbnZhc1xyXG4gICAgICAgIHNwcml0ZU9iai5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzcHJpdGVPYmoud2lkdGgsIHNwcml0ZU9iai5oZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIERyYXcgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgIHNwcml0ZU9iai5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgIHNwcml0ZU9iai5pbWFnZSxcclxuICAgICAgICAgIGZyYW1lSW5kZXggKiBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICAgIHNwcml0ZU9iai5oZWlnaHQsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIHNwcml0ZU9iai53aWR0aCAvIG51bWJlck9mRnJhbWVzLFxyXG4gICAgICAgICAgc3ByaXRlT2JqLmhlaWdodCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gc3ByaXRlT2JqO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAvLyBHZXQgY2FudmFzXHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJhY3RlckFuaW1hdGlvblwiKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IDEzMztcclxuICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgXHJcbiAgICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XHJcbiAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpOyAgXHJcbiAgXHJcbiAgICAvLyBDcmVhdGUgc3ByaXRlXHJcbiAgICBjaGFyYWN0ZXIgPSBzcHJpdGUoe1xyXG4gICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gICAgICB3aWR0aDogNTg4LFxyXG4gICAgICBoZWlnaHQ6IDE2MixcclxuICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxyXG4gICAgICBudW1iZXJPZkZyYW1lczogMy45LFxyXG4gICAgICB0aWNrc1BlckZyYW1lOiA4XHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImFwcC9zcHJpdGVzL3BsYXllci0xL2dvaGFuL2dvaGFuLXB1bmNoLnBuZ1wiO1xyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
