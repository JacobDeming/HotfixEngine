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
var Player2SpriteComponent = (function () {
    function Player2SpriteComponent() {
    }
    Player2SpriteComponent.prototype.animateStanding = function () {
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
                    if (frameIndex < numberOfFrames - 1) {
                        frameIndex += 1;
                    }
                    else {
                        frameIndex = 0;
                    }
                }
            };
            spriteObj.render = function () {
                spriteObj.context.clearRect(0, 0, spriteObj.width, spriteObj.height);
                spriteObj.context.drawImage(spriteObj.image, frameIndex * spriteObj.width / numberOfFrames, 0, spriteObj.width / numberOfFrames, spriteObj.height, 0, 0, spriteObj.width / numberOfFrames, spriteObj.height);
            };
            return spriteObj;
        }
        canvas = document.getElementById("player2Animation");
        canvas.width = 125;
        canvas.height = 162;
        characterImage = new Image();
        character = sprite({
            context: canvas.getContext("2d"),
            width: 373,
            height: 162,
            image: characterImage,
            numberOfFrames: 4,
            ticksPerFrame: 4
        });
        characterImage.addEventListener("load", gameLoop);
        characterImage.src = "images/sprites/player-2/gohan/gohan-standing.png";
    };
    Player2SpriteComponent.prototype.animateAttack = function () {
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
                    if (frameIndex < numberOfFrames - 1) {
                        frameIndex += 1;
                    }
                    else {
                        frameIndex = 0;
                    }
                }
            };
            spriteObj.render = function () {
                spriteObj.context.clearRect(0, 0, spriteObj.width, spriteObj.height);
                spriteObj.context.drawImage(spriteObj.image, frameIndex * spriteObj.width / numberOfFrames, 0, spriteObj.width / numberOfFrames, spriteObj.height, 0, 0, spriteObj.width / numberOfFrames, spriteObj.height);
            };
            return spriteObj;
        }
        canvas = document.getElementById("player2Animation");
        canvas.width = 133;
        canvas.height = 162;
        characterImage = new Image();
        character = sprite({
            context: canvas.getContext("2d"),
            width: 588,
            height: 162,
            image: characterImage,
            numberOfFrames: 3.9,
            ticksPerFrame: 8
        });
        characterImage.addEventListener("load", gameLoop);
        characterImage.src = "images/sprites/player-2/gohan/gohan-punch.png";
    };
    Player2SpriteComponent = __decorate([
        core_1.Component({
            selector: 'player2sprite',
            template: "\n    <div class=\"col-md-1\">\n      <canvas id=\"player2Animation\"></canvas>\n      <button type=\"button\" (click)=\"animateStanding()\">Standing</button>\n      <button type=\"button\" (click)=\"animateAttack()\">Attack</button>\n      <button type=\"button\" id=\"magic\">Magic</button>\n      <button type=\"button\" id=\"damage\">Damage</button>\n      <button type=\"button\" id=\"defeat\">Defeated</button>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Player2SpriteComponent);
    return Player2SpriteComponent;
}());
exports.Player2SpriteComponent = Player2SpriteComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9zcHJpdGVzL3BsYXllcjJzcHJpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFnQjFDO0lBR0U7SUFFQSxDQUFDO0lBRUQsZ0RBQWUsR0FBZjtRQUNFLElBQUksU0FBUyxFQUNYLGNBQWMsRUFDZCxNQUFNLENBQUM7UUFFVDtZQUNFLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFFRCxnQkFBZ0IsT0FBTztZQUNyQixJQUFJLFNBQVMsR0FBRztnQkFDZCxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87Z0JBQ3hCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztnQkFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3BCLE1BQU0sRUFBRSxjQUFZLENBQUM7Z0JBQ3JCLE1BQU0sRUFBRSxjQUFZLENBQUM7YUFDdEIsRUFDQyxVQUFVLEdBQUcsQ0FBQyxFQUNkLFNBQVMsR0FBRyxDQUFDLEVBQ2IsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUMxQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7WUFFL0MsU0FBUyxDQUFDLE1BQU0sR0FBRztnQkFDakIsU0FBUyxJQUFJLENBQUMsQ0FBQztnQkFDZixFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFFZCxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRWxDLFVBQVUsSUFBSSxDQUFDLENBQUM7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Q1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLG9iQVNQO1NBQ0osQ0FBQzs7OEJBQUE7SUE2S0YsNkJBQUM7QUFBRCxDQTNLQSxBQTJLQyxJQUFBO0FBM0tZLDhCQUFzQix5QkEyS2xDLENBQUEiLCJmaWxlIjoiYW5pbWF0aW9uL3Nwcml0ZXMvcGxheWVyMnNwcml0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGxheWVyMnNwcml0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMVwiPlxyXG4gICAgICA8Y2FudmFzIGlkPVwicGxheWVyMkFuaW1hdGlvblwiPjwvY2FudmFzPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiYW5pbWF0ZVN0YW5kaW5nKClcIj5TdGFuZGluZzwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiYW5pbWF0ZUF0dGFjaygpXCI+QXR0YWNrPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwibWFnaWNcIj5NYWdpYzwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRhbWFnZVwiPkRhbWFnZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRlZmVhdFwiPkRlZmVhdGVkPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIyU3ByaXRlQ29tcG9uZW50IHsgXHJcbiAgY2hhcmFjdGVyQWN0aW9uOiBzdHJpbmdcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZVN0YW5kaW5nKCkge1xyXG4gICAgdmFyIGNoYXJhY3RlcixcclxuICAgICAgY2hhcmFjdGVySW1hZ2UsXHJcbiAgICAgIGNhbnZhcztcclxuXHJcbiAgICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3Rlci51cGRhdGUoKTtcclxuICAgICAgY2hhcmFjdGVyLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gc3ByaXRlKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIHNwcml0ZU9iaiA9IHtcclxuICAgICAgICBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQsXHJcbiAgICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCxcclxuICAgICAgICBpbWFnZTogb3B0aW9ucy5pbWFnZSxcclxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHt9XHJcbiAgICAgIH0sXHJcbiAgICAgICAgZnJhbWVJbmRleCA9IDAsXHJcbiAgICAgICAgdGlja0NvdW50ID0gMCxcclxuICAgICAgICB0aWNrc1BlckZyYW1lID0gb3B0aW9ucy50aWNrc1BlckZyYW1lIHx8IDAsXHJcbiAgICAgICAgbnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcbiAgICAgIFxyXG4gICAgICBzcHJpdGVPYmoudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpY2tDb3VudCArPSAxO1xyXG4gICAgICAgIGlmICh0aWNrQ291bnQgPiB0aWNrc1BlckZyYW1lKSB7XHJcbiAgICAgICAgICB0aWNrQ291bnQgPSAwO1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZnJhbWUgaW5kZXggaXMgaW4gcmFuZ2VcclxuICAgICAgICAgIGlmIChmcmFtZUluZGV4IDwgbnVtYmVyT2ZGcmFtZXMgLSAxKSB7ICBcclxuICAgICAgICAgICAgICAvLyBHbyB0byB0aGUgbmV4dCBmcmFtZVxyXG4gICAgICAgICAgICAgIGZyYW1lSW5kZXggKz0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZnJhbWVJbmRleCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgc3ByaXRlT2JqLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGNhbnZhc1xyXG4gICAgICAgIHNwcml0ZU9iai5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzcHJpdGVPYmoud2lkdGgsIHNwcml0ZU9iai5oZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIERyYXcgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgIHNwcml0ZU9iai5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgIHNwcml0ZU9iai5pbWFnZSxcclxuICAgICAgICAgIGZyYW1lSW5kZXggKiBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICAgIHNwcml0ZU9iai5oZWlnaHQsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIHNwcml0ZU9iai53aWR0aCAvIG51bWJlck9mRnJhbWVzLFxyXG4gICAgICAgICAgc3ByaXRlT2JqLmhlaWdodCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gc3ByaXRlT2JqO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAvLyBHZXQgY2FudmFzXHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjJBbmltYXRpb25cIik7XHJcbiAgICBjYW52YXMud2lkdGggPSAxMjU7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTsgIFxyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgY2hhcmFjdGVyID0gc3ByaXRlKHtcclxuICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgd2lkdGg6IDM3MyxcclxuICAgICAgaGVpZ2h0OiAxNjIsXHJcbiAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgbnVtYmVyT2ZGcmFtZXM6IDQsXHJcbiAgICAgIHRpY2tzUGVyRnJhbWU6IDRcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcclxuICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcclxuICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTIvZ29oYW4vZ29oYW4tc3RhbmRpbmcucG5nXCI7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlQXR0YWNrKCkge1xyXG4gICAgdmFyIGNoYXJhY3RlcixcclxuICAgICAgY2hhcmFjdGVySW1hZ2UsXHJcbiAgICAgIGNhbnZhcztcclxuXHJcbiAgICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3Rlci51cGRhdGUoKTtcclxuICAgICAgY2hhcmFjdGVyLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gc3ByaXRlKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIHNwcml0ZU9iaiA9IHtcclxuICAgICAgICBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQsXHJcbiAgICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCxcclxuICAgICAgICBpbWFnZTogb3B0aW9ucy5pbWFnZSxcclxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHt9XHJcbiAgICAgIH0sXHJcbiAgICAgICAgZnJhbWVJbmRleCA9IDAsXHJcbiAgICAgICAgdGlja0NvdW50ID0gMCxcclxuICAgICAgICB0aWNrc1BlckZyYW1lID0gb3B0aW9ucy50aWNrc1BlckZyYW1lIHx8IDAsXHJcbiAgICAgICAgbnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcbiAgICAgIFxyXG4gICAgICBzcHJpdGVPYmoudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpY2tDb3VudCArPSAxO1xyXG4gICAgICAgIGlmICh0aWNrQ291bnQgPiB0aWNrc1BlckZyYW1lKSB7XHJcbiAgICAgICAgICB0aWNrQ291bnQgPSAwO1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZnJhbWUgaW5kZXggaXMgaW4gcmFuZ2VcclxuICAgICAgICAgIGlmIChmcmFtZUluZGV4IDwgbnVtYmVyT2ZGcmFtZXMgLSAxKSB7ICBcclxuICAgICAgICAgICAgICAvLyBHbyB0byB0aGUgbmV4dCBmcmFtZVxyXG4gICAgICAgICAgICAgIGZyYW1lSW5kZXggKz0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZnJhbWVJbmRleCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgc3ByaXRlT2JqLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGNhbnZhc1xyXG4gICAgICAgIHNwcml0ZU9iai5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzcHJpdGVPYmoud2lkdGgsIHNwcml0ZU9iai5oZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIERyYXcgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgIHNwcml0ZU9iai5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgIHNwcml0ZU9iai5pbWFnZSxcclxuICAgICAgICAgIGZyYW1lSW5kZXggKiBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICAgIHNwcml0ZU9iai5oZWlnaHQsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIHNwcml0ZU9iai53aWR0aCAvIG51bWJlck9mRnJhbWVzLFxyXG4gICAgICAgICAgc3ByaXRlT2JqLmhlaWdodCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gc3ByaXRlT2JqO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAvLyBHZXQgY2FudmFzXHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjJBbmltYXRpb25cIik7XHJcbiAgICBjYW52YXMud2lkdGggPSAxMzM7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTsgIFxyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgY2hhcmFjdGVyID0gc3ByaXRlKHtcclxuICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgd2lkdGg6IDU4OCxcclxuICAgICAgaGVpZ2h0OiAxNjIsXHJcbiAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgbnVtYmVyT2ZGcmFtZXM6IDMuOSxcclxuICAgICAgdGlja3NQZXJGcmFtZTogOFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMi9nb2hhbi9nb2hhbi1wdW5jaC5wbmdcIjtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
