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
        canvas = document.getElementById("characterAnimation");
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
        characterImage.src = "images/sprites/player-1/gohan/gohan-standing.png";
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
        canvas = document.getElementById("characterAnimation");
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
        characterImage.src = "images/sprites/player-1/gohan/gohan-punch.png";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcjIvc3ByaXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQW1CMUM7SUFHRTtJQUVBLENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxTQUFTLEVBQ1gsY0FBYyxFQUNkLE1BQU0sQ0FBQztRQUVUO1lBQ0UsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNuQixTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUVELGdCQUFnQixPQUFPO1lBQ3JCLElBQUksU0FBUyxHQUFHO2dCQUNkLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztnQkFDeEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07Z0JBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztnQkFDcEIsTUFBTSxFQUFFLGNBQVksQ0FBQztnQkFDckIsTUFBTSxFQUFFLGNBQVksQ0FBQzthQUN0QixFQUNDLFVBQVUsR0FBRyxDQUFDLEVBQ2QsU0FBUyxHQUFHLENBQUMsRUFDYixhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQzFDLGNBQWMsR0FBRyxPQUFPLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztZQUUvQyxTQUFTLENBQUMsTUFBTSxHQUFHO2dCQUNqQixTQUFTLElBQUksQ0FBQyxDQUFDO2dCQUNmLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUM5QixTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUVkLEVBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFbEMsVUFBVSxJQUFJLENBQUMsQ0FBQztvQkFDcEIsQ0FBQztvQkFB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UztZQUNuQixRQUFRLEVBQUUsb2ZBWVA7U0FDSixDQUFDOzt3QkFBQTtJQTZLRix1QkFBQztBQUFELENBM0tBLEFBMktDLElBQUE7QUEzS1ksd0JBQWdCLG1CQTJLNUIsQ0FBQSIsImZpbGUiOiJwbGF5ZXIyL3Nwcml0ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Nwcml0ZXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHNwcml0ZXMtY29udGFpbmVyXCI+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJjaGFyYWN0ZXJBbmltYXRpb25cIj48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhbmltYXRlU3RhbmRpbmcoKVwiPlN0YW5kaW5nPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhbmltYXRlQXR0YWNrKClcIj5BdHRhY2s8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJtYWdpY1wiPk1hZ2ljPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGFtYWdlXCI+RGFtYWdlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGVmZWF0XCI+RGVmZWF0ZWQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZXNDb21wb25lbnQgeyBcclxuICBjaGFyYWN0ZXJBY3Rpb246IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBhbmltYXRlU3RhbmRpbmcoKSB7XHJcbiAgICB2YXIgY2hhcmFjdGVyLFxyXG4gICAgICBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgY2FudmFzO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICAgICAgY2hhcmFjdGVyLnVwZGF0ZSgpO1xyXG4gICAgICBjaGFyYWN0ZXIucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBzcHJpdGUob3B0aW9ucykge1xyXG4gICAgICB2YXIgc3ByaXRlT2JqID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IG9wdGlvbnMuY29udGV4dCxcclxuICAgICAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxyXG4gICAgICAgIGltYWdlOiBvcHRpb25zLmltYWdlLFxyXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oKSB7fSxcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge31cclxuICAgICAgfSxcclxuICAgICAgICBmcmFtZUluZGV4ID0gMCxcclxuICAgICAgICB0aWNrQ291bnQgPSAwLFxyXG4gICAgICAgIHRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMCxcclxuICAgICAgICBudW1iZXJPZkZyYW1lcyA9IG9wdGlvbnMubnVtYmVyT2ZGcmFtZXMgfHwgMTtcclxuICAgICAgXHJcbiAgICAgIHNwcml0ZU9iai51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGlja0NvdW50ICs9IDE7XHJcbiAgICAgICAgaWYgKHRpY2tDb3VudCA+IHRpY2tzUGVyRnJhbWUpIHtcclxuICAgICAgICAgIHRpY2tDb3VudCA9IDA7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBmcmFtZSBpbmRleCBpcyBpbiByYW5nZVxyXG4gICAgICAgICAgaWYgKGZyYW1lSW5kZXggPCBudW1iZXJPZkZyYW1lcyAtIDEpIHsgIFxyXG4gICAgICAgICAgICAgIC8vIEdvIHRvIHRoZSBuZXh0IGZyYW1lXHJcbiAgICAgICAgICAgICAgZnJhbWVJbmRleCArPSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBmcmFtZUluZGV4ID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBzcHJpdGVPYmoucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyBDbGVhciB0aGUgY2FudmFzXHJcbiAgICAgICAgc3ByaXRlT2JqLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNwcml0ZU9iai53aWR0aCwgc3ByaXRlT2JqLmhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRHJhdyB0aGUgYW5pbWF0aW9uXHJcbiAgICAgICAgc3ByaXRlT2JqLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgc3ByaXRlT2JqLmltYWdlLFxyXG4gICAgICAgICAgZnJhbWVJbmRleCAqIHNwcml0ZU9iai53aWR0aCAvIG51bWJlck9mRnJhbWVzLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIHNwcml0ZU9iai53aWR0aCAvIG51bWJlck9mRnJhbWVzLFxyXG4gICAgICAgICAgc3ByaXRlT2JqLmhlaWdodCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgICBzcHJpdGVPYmouaGVpZ2h0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBzcHJpdGVPYmo7XHJcbiAgICAgIH1cclxuICBcclxuICAgIC8vIEdldCBjYW52YXNcclxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcmFjdGVyQW5pbWF0aW9uXCIpO1xyXG4gICAgY2FudmFzLndpZHRoID0gMTI1O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IDE2MjtcclxuICBcclxuICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7ICBcclxuICBcclxuICAgIC8vIENyZWF0ZSBzcHJpdGVcclxuICAgIGNoYXJhY3RlciA9IHNwcml0ZSh7XHJcbiAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgIHdpZHRoOiAzNzMsXHJcbiAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXHJcbiAgICAgIG51bWJlck9mRnJhbWVzOiA0LFxyXG4gICAgICB0aWNrc1BlckZyYW1lOiA0XHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL2dvaGFuL2dvaGFuLXN0YW5kaW5nLnBuZ1wiO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZUF0dGFjaygpIHtcclxuICAgIHZhciBjaGFyYWN0ZXIsXHJcbiAgICAgIGNoYXJhY3RlckltYWdlLFxyXG4gICAgICBjYW52YXM7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgICBjaGFyYWN0ZXIudXBkYXRlKCk7XHJcbiAgICAgIGNoYXJhY3Rlci5yZW5kZXIoKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHNwcml0ZShvcHRpb25zKSB7XHJcbiAgICAgIHZhciBzcHJpdGVPYmogPSB7XHJcbiAgICAgICAgY29udGV4dDogb3B0aW9ucy5jb250ZXh0LFxyXG4gICAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXHJcbiAgICAgICAgaW1hZ2U6IG9wdGlvbnMuaW1hZ2UsXHJcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7fVxyXG4gICAgICB9LFxyXG4gICAgICAgIGZyYW1lSW5kZXggPSAwLFxyXG4gICAgICAgIHRpY2tDb3VudCA9IDAsXHJcbiAgICAgICAgdGlja3NQZXJGcmFtZSA9IG9wdGlvbnMudGlja3NQZXJGcmFtZSB8fCAwLFxyXG4gICAgICAgIG51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xyXG4gICAgICBcclxuICAgICAgc3ByaXRlT2JqLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aWNrQ291bnQgKz0gMTtcclxuICAgICAgICBpZiAodGlja0NvdW50ID4gdGlja3NQZXJGcmFtZSkge1xyXG4gICAgICAgICAgdGlja0NvdW50ID0gMDtcclxuICAgICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGZyYW1lIGluZGV4IGlzIGluIHJhbmdlXHJcbiAgICAgICAgICBpZiAoZnJhbWVJbmRleCA8IG51bWJlck9mRnJhbWVzIC0gMSkgeyAgXHJcbiAgICAgICAgICAgICAgLy8gR28gdG8gdGhlIG5leHQgZnJhbWVcclxuICAgICAgICAgICAgICBmcmFtZUluZGV4ICs9IDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGZyYW1lSW5kZXggPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHNwcml0ZU9iai5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIENsZWFyIHRoZSBjYW52YXNcclxuICAgICAgICBzcHJpdGVPYmouY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc3ByaXRlT2JqLndpZHRoLCBzcHJpdGVPYmouaGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBEcmF3IHRoZSBhbmltYXRpb25cclxuICAgICAgICBzcHJpdGVPYmouY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICBzcHJpdGVPYmouaW1hZ2UsXHJcbiAgICAgICAgICBmcmFtZUluZGV4ICogc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgICBzcHJpdGVPYmouaGVpZ2h0LFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICAgIHNwcml0ZU9iai5oZWlnaHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZU9iajtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgLy8gR2V0IGNhbnZhc1xyXG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFyYWN0ZXJBbmltYXRpb25cIik7XHJcbiAgICBjYW52YXMud2lkdGggPSAxMzM7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTsgIFxyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgY2hhcmFjdGVyID0gc3ByaXRlKHtcclxuICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgd2lkdGg6IDU4OCxcclxuICAgICAgaGVpZ2h0OiAxNjIsXHJcbiAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgbnVtYmVyT2ZGcmFtZXM6IDMuOSxcclxuICAgICAgdGlja3NQZXJGcmFtZTogOFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMS9nb2hhbi9nb2hhbi1wdW5jaC5wbmdcIjtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
