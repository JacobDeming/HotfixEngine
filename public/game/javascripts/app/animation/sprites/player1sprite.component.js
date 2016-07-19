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
var angularfire2_1 = require('angularfire2');
var Player1SpriteComponent = (function () {
    function Player1SpriteComponent(af) {
        var _this = this;
        this.URL = window.location.href;
        this.timerObservable = af.database.object('/' + this.URL.split('/game/')[1] + '/Timer', { preserveSnapshot: true });
        this.timerObservable.subscribe(function (snap) {
            if (snap.val() == 0) {
            }
            else {
                _this.animateStanding();
            }
        });
        this.playerObservable = af.database.object('/' + this.URL.split('/game/')[1] + '/Players/player1', { preserveSnapshot: true });
        this.playerObservable.subscribe(function (snap) {
            _this.action = snap.val().action;
            _this.class = snap.val().playerClass;
        });
    }
    Player1SpriteComponent.prototype.sprite = function (options) {
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
    };
    Player1SpriteComponent.prototype.animateStanding = function () {
        var character, characterImage, canvas;
        function gameLoop() {
            window.requestAnimationFrame(gameLoop);
            character.update();
            character.render();
        }
        console.log("Got in here");
        if (this.class == "Paragon") {
            canvas = document.getElementById("player1Animation");
            canvas.width = 125;
            canvas.height = 162;
            characterImage = new Image();
            character = this.sprite({
                context: canvas.getContext("2d"),
                width: 373,
                height: 162,
                image: characterImage,
                numberOfFrames: 4,
                ticksPerFrame: 4
            });
            console.log(characterImage);
            console.log(character);
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/gohan/gohan-standing.png";
        }
        if (this.class == "Elementalist") {
            canvas = document.getElementById("player1Animation");
            canvas.width = 125;
            canvas.height = 162;
            characterImage = new Image();
            character = this.sprite({
                context: canvas.getContext("2d"),
                width: 331,
                height: 162,
                image: characterImage,
                numberOfFrames: 3,
                ticksPerFrame: 4
            });
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/piccolo/piccolo-standing.png";
        }
        if (this.class == "Highwayman") {
            canvas = document.getElementById("player1Animation");
            canvas.width = 125;
            canvas.height = 162;
            characterImage = new Image();
            character = this.sprite({
                context: canvas.getContext("2d"),
                width: 292,
                height: 162,
                image: characterImage,
                numberOfFrames: 2.9,
                ticksPerFrame: 5
            });
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/trunks/trunks-standing.png";
        }
    };
    Player1SpriteComponent = __decorate([
        core_1.Component({
            selector: 'player1sprite',
            template: "\n    <div class=\"col-md-1 col-md-offset-5\">\n      <canvas id=\"player1Animation\"></canvas>\n      <button type=\"button\" (click)=\"animateStanding()\">Standing</button>\n      <button type=\"button\" (click)=\"animateAttack()\">Attack</button>\n      <button type=\"button\" id=\"magic\">Magic</button>\n      <button type=\"button\" id=\"damage\">Damage</button>\n      <button type=\"button\" id=\"defeat\">Defeated</button>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], Player1SpriteComponent);
    return Player1SpriteComponent;
}());
exports.Player1SpriteComponent = Player1SpriteComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9zcHJpdGVzL3BsYXllcjFzcHJpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBZ0JsRTtJQU9FLGdDQUFZLEVBQWM7UUFQNUIsaUJBeUtDO1FBaktHLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsUUFBUSxFQUFDLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDakMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFFbEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLGtCQUFrQixFQUFDLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN2SCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNsQyxLQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUs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TUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFHcEIsY0FBYyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFHN0IsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3RCLE9BQU8sRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDaEMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLGNBQWMsRUFBRSxHQUFHO2dCQUNuQixhQUFhLEVBQUUsQ0FBQzthQUNqQixDQUFDLENBQUM7WUFHSCxjQUFjLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELGNBQWMsQ0FBQyxHQUFHLEdBQUcsb0RBQW9ELENBQUM7UUFDeEUsQ0FBQztJQUNQLENBQUM7SUE3Skg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLG9jQVNQO1NBQ0osQ0FBQzs7OEJBQUE7SUEyS0YsNkJBQUM7QUFBRCxDQXpLQSxBQXlLQyxJQUFBO0FBektZLDhCQUFzQix5QkF5S2xDLENBQUEiLCJmaWxlIjoiYW5pbWF0aW9uL3Nwcml0ZXMvcGxheWVyMXNwcml0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmd1bGFyRmlyZSxGaXJlYmFzZU9iamVjdE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BsYXllcjFzcHJpdGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEgY29sLW1kLW9mZnNldC01XCI+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJwbGF5ZXIxQW5pbWF0aW9uXCI+PC9jYW52YXM+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhbmltYXRlU3RhbmRpbmcoKVwiPlN0YW5kaW5nPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhbmltYXRlQXR0YWNrKClcIj5BdHRhY2s8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJtYWdpY1wiPk1hZ2ljPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGFtYWdlXCI+RGFtYWdlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGVmZWF0XCI+RGVmZWF0ZWQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllcjFTcHJpdGVDb21wb25lbnQge1xyXG4gIHRpbWVyT2JzZXJ2YWJsZTpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBwbGF5ZXJPYnNlcnZhYmxlOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+OyBcclxuICBVUkw6c3RyaW5nO1xyXG4gIGFjdGlvbjpzdHJpbmc7XHJcbiAgY2xhc3M6c3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhZjpBbmd1bGFyRmlyZSkge1xyXG4gICAgdGhpcy5VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHRoaXMudGltZXJPYnNlcnZhYmxlID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9UaW1lcicse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgdGhpcy50aW1lck9ic2VydmFibGUuc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIGlmKHNuYXAudmFsKCk9PTApe1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVN0YW5kaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLnBsYXllck9ic2VydmFibGUgPSBhZi5kYXRhYmFzZS5vYmplY3QoJy8nK3RoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXSsnL1BsYXllcnMvcGxheWVyMScse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgdGhpcy5wbGF5ZXJPYnNlcnZhYmxlLnN1YnNjcmliZShzbmFwID0+e1xyXG4gICAgICB0aGlzLmFjdGlvbj1zbmFwLnZhbCgpLmFjdGlvbjtcclxuICAgICAgdGhpcy5jbGFzcz1zbmFwLnZhbCgpLnBsYXllckNsYXNzO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNwcml0ZShvcHRpb25zKSB7XHJcbiAgICB2YXIgc3ByaXRlT2JqID0ge1xyXG4gICAgICBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQsXHJcbiAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxyXG4gICAgICBpbWFnZTogb3B0aW9ucy5pbWFnZSxcclxuICAgICAgdXBkYXRlOiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge31cclxuICAgIH0sXHJcbiAgICAgIGZyYW1lSW5kZXggPSAwLFxyXG4gICAgICB0aWNrQ291bnQgPSAwLFxyXG4gICAgICB0aWNrc1BlckZyYW1lID0gb3B0aW9ucy50aWNrc1BlckZyYW1lIHx8IDAsXHJcbiAgICAgIG51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xyXG4gICAgXHJcbiAgICBzcHJpdGVPYmoudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aWNrQ291bnQgKz0gMTtcclxuICAgICAgaWYgKHRpY2tDb3VudCA+IHRpY2tzUGVyRnJhbWUpIHtcclxuICAgICAgICB0aWNrQ291bnQgPSAwO1xyXG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGZyYW1lIGluZGV4IGlzIGluIHJhbmdlXHJcbiAgICAgICAgaWYgKGZyYW1lSW5kZXggPCBudW1iZXJPZkZyYW1lcyAtIDEpIHsgIFxyXG4gICAgICAgICAgICAvLyBHbyB0byB0aGUgbmV4dCBmcmFtZVxyXG4gICAgICAgICAgICBmcmFtZUluZGV4ICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZnJhbWVJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgc3ByaXRlT2JqLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gQ2xlYXIgdGhlIGNhbnZhc1xyXG4gICAgICBzcHJpdGVPYmouY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc3ByaXRlT2JqLndpZHRoLCBzcHJpdGVPYmouaGVpZ2h0KTtcclxuICAgICAgLy8gRHJhdyB0aGUgYW5pbWF0aW9uXHJcbiAgICAgIHNwcml0ZU9iai5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICBzcHJpdGVPYmouaW1hZ2UsXHJcbiAgICAgICAgZnJhbWVJbmRleCAqIHNwcml0ZU9iai53aWR0aCAvIG51bWJlck9mRnJhbWVzLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgc3ByaXRlT2JqLmhlaWdodCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgc3ByaXRlT2JqLmhlaWdodCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBzcHJpdGVPYmo7XHJcbiAgICB9XHJcblxyXG4gIGFuaW1hdGVTdGFuZGluZygpIHtcclxuICAgIHZhciBjaGFyYWN0ZXIsY2hhcmFjdGVySW1hZ2UsY2FudmFzO1xyXG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AoKXtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3Rlci51cGRhdGUoKTtcclxuICAgICAgY2hhcmFjdGVyLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJHb3QgaW4gaGVyZVwiKTtcclxuICAgIGlmKHRoaXMuY2xhc3M9PVwiUGFyYWdvblwiKXtcclxuICAgICAgLy8gR2V0IGNhbnZhc1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjFBbmltYXRpb25cIik7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IDEyNTtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcclxuICAgIFxyXG4gICAgICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XHJcbiAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7ICBcclxuICAgIFxyXG4gICAgICAvLyBDcmVhdGUgc3ByaXRlXHJcbiAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcclxuICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gICAgICAgIHdpZHRoOiAzNzMsXHJcbiAgICAgICAgaGVpZ2h0OiAxNjIsXHJcbiAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxyXG4gICAgICAgIG51bWJlck9mRnJhbWVzOiA0LFxyXG4gICAgICAgIHRpY2tzUGVyRnJhbWU6IDRcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgICAgIGNvbnNvbGUubG9nKGNoYXJhY3RlckltYWdlKTtcclxuICAgICAgY29uc29sZS5sb2coY2hhcmFjdGVyKTtcclxuICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL2dvaGFuL2dvaGFuLXN0YW5kaW5nLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5jbGFzcz09XCJFbGVtZW50YWxpc3RcIil7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMUFuaW1hdGlvblwiKTtcclxuICAgICAgY2FudmFzLndpZHRoID0gMTI1O1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gICAgICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XHJcbiAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7ICBcclxuICAgICAgXHJcbiAgICAgIC8vIENyZWF0ZSBzcHJpdGVcclxuICAgICAgY2hhcmFjdGVyID0gdGhpcy5zcHJpdGUoe1xyXG4gICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgd2lkdGg6IDMzMSxcclxuICAgICAgICBoZWlnaHQ6IDE2MixcclxuICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXHJcbiAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDMsXHJcbiAgICAgICAgdGlja3NQZXJGcmFtZTogNFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcclxuICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL3BpY2NvbG8vcGljY29sby1zdGFuZGluZy5wbmdcIjtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuY2xhc3M9PVwiSGlnaHdheW1hblwiKXtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxQW5pbWF0aW9uXCIpO1xyXG4gICAgICBjYW52YXMud2lkdGggPSAxMjU7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XHJcbiAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7ICBcclxuICAgICAgXHJcbiAgICAgIC8vIENyZWF0ZSBzcHJpdGVcclxuICAgICAgY2hhcmFjdGVyID0gdGhpcy5zcHJpdGUoe1xyXG4gICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgd2lkdGg6IDI5MixcclxuICAgICAgICBoZWlnaHQ6IDE2MixcclxuICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXHJcbiAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDIuOSxcclxuICAgICAgICB0aWNrc1BlckZyYW1lOiA1XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcclxuICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL3RydW5rcy90cnVua3Mtc3RhbmRpbmcucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYW5pbWF0ZUF0dGFjaygpIHtcclxuICAvLyAgIC8vIEdldCBjYW52YXNcclxuICAvLyAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMUFuaW1hdGlvblwiKTtcclxuICAvLyAgIGNhbnZhcy53aWR0aCA9IDEzMztcclxuICAvLyAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgXHJcbiAgLy8gICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XHJcbiAgLy8gICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpOyAgXHJcbiAgXHJcbiAgLy8gICAvLyBDcmVhdGUgc3ByaXRlXHJcbiAgLy8gICBjaGFyYWN0ZXIgPSBzcHJpdGUoe1xyXG4gIC8vICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gIC8vICAgICB3aWR0aDogNTg4LFxyXG4gIC8vICAgICBoZWlnaHQ6IDE2MixcclxuICAvLyAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxyXG4gIC8vICAgICBudW1iZXJPZkZyYW1lczogMy45LFxyXG4gIC8vICAgICB0aWNrc1BlckZyYW1lOiA4XHJcbiAgLy8gICB9KTtcclxuICBcclxuICAvLyAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgLy8gICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgLy8gICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL2dvaGFuL2dvaGFuLXB1bmNoLnBuZ1wiO1xyXG4gIC8vIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
