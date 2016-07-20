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
var Player2SpriteComponent = (function () {
    function Player2SpriteComponent(af) {
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
        this.playerObservable = af.database.object('/' + this.URL.split('/game/')[1] + '/Players/player2', { preserveSnapshot: true });
        this.playerObservable.subscribe(function (snap) {
            _this.action = snap.val().action;
            _this.class = snap.val().playerClass;
        });
    }
    Player2SpriteComponent.prototype.sprite = function (options) {
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
    Player2SpriteComponent.prototype.animateStanding = function () {
        var character, characterImage, canvas;
        function gameLoop() {
            window.requestAnimationFrame(gameLoop);
            character.update();
            character.render();
        }
        if (this.class == "Paragon") {
            canvas = document.getElementById("player2Animation");
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
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-2/gohan/gohan-standing.png";
        }
        if (this.class == "Elementalist") {
            canvas = document.getElementById("player2Animation");
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
            characterImage.src = "images/sprites/player-2/piccolo/piccolo-standing.png";
        }
        if (this.class == "Highwayman") {
            canvas = document.getElementById("player2Animation");
            canvas.width = 95;
            canvas.height = 162;
            characterImage = new Image();
            character = this.sprite({
                context: canvas.getContext("2d"),
                width: 292,
                height: 162,
                image: characterImage,
                numberOfFrames: 3,
                ticksPerFrame: 5
            });
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-2/trunks/trunks-standing.png";
        }
    };
    Player2SpriteComponent = __decorate([
        core_1.Component({
            selector: 'player2sprite',
            template: "\n    <canvas id=\"player2Animation\"></canvas>\n    "
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], Player2SpriteComponent);
    return Player2SpriteComponent;
}());
exports.Player2SpriteComponent = Player2SpriteComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9zcHJpdGVzL3BsYXllcjJzcHJpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBU2xFO0lBT0UsZ0NBQVksRUFBYztRQVA1QixpQkE2SUM7UUFySUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNqQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUVsQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsa0JBQWtCLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2xDLEtBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxD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Q0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNoQyxLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsY0FBYztnQkFDckIsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLGFBQWEsRUFBRSxDQUFDO2FBQ2pCLENBQUMsQ0FBQztZQUdILGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEQsY0FBYyxDQUFDLEdBQUcsR0FBRyxvREFBb0QsQ0FBQztRQUN4RSxDQUFDO0lBQ1AsQ0FBQztJQW5KSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsdURBRVA7U0FDSixDQUFDOzs4QkFBQTtJQStJRiw2QkFBQztBQUFELENBN0lBLEFBNklDLElBQUE7QUE3SVksOEJBQXNCLHlCQTZJbEMsQ0FBQSIsImZpbGUiOiJhbmltYXRpb24vc3ByaXRlcy9wbGF5ZXIyc3ByaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGxheWVyMnNwcml0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxjYW52YXMgaWQ9XCJwbGF5ZXIyQW5pbWF0aW9uXCI+PC9jYW52YXM+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyMlNwcml0ZUNvbXBvbmVudCB7XHJcbiAgdGltZXJPYnNlcnZhYmxlOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHBsYXllck9ic2VydmFibGU6RmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47IFxyXG4gIFVSTDpzdHJpbmc7XHJcbiAgYWN0aW9uOnN0cmluZztcclxuICBjbGFzczpzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFmOkFuZ3VsYXJGaXJlKSB7XHJcbiAgICB0aGlzLlVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdGhpcy50aW1lck9ic2VydmFibGUgPSBhZi5kYXRhYmFzZS5vYmplY3QoJy8nK3RoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXSsnL1RpbWVyJyx7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLnRpbWVyT2JzZXJ2YWJsZS5zdWJzY3JpYmUoc25hcCA9PntcclxuICAgICAgaWYoc25hcC52YWwoKT09MCl7XHJcbiAgICAgICAgLy8gdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlU3RhbmRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMucGxheWVyT2JzZXJ2YWJsZSA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKycvUGxheWVycy9wbGF5ZXIyJyx7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLnBsYXllck9ic2VydmFibGUuc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIHRoaXMuYWN0aW9uPXNuYXAudmFsKCkuYWN0aW9uO1xyXG4gICAgICB0aGlzLmNsYXNzPXNuYXAudmFsKCkucGxheWVyQ2xhc3M7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3ByaXRlKG9wdGlvbnMpIHtcclxuICAgIHZhciBzcHJpdGVPYmogPSB7XHJcbiAgICAgIGNvbnRleHQ6IG9wdGlvbnMuY29udGV4dCxcclxuICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXHJcbiAgICAgIGltYWdlOiBvcHRpb25zLmltYWdlLFxyXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7fVxyXG4gICAgfSxcclxuICAgICAgZnJhbWVJbmRleCA9IDAsXHJcbiAgICAgIHRpY2tDb3VudCA9IDAsXHJcbiAgICAgIHRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMCxcclxuICAgICAgbnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcbiAgICBcclxuICAgIHNwcml0ZU9iai51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRpY2tDb3VudCArPSAxO1xyXG4gICAgICBpZiAodGlja0NvdW50ID4gdGlja3NQZXJGcmFtZSkge1xyXG4gICAgICAgIHRpY2tDb3VudCA9IDA7XHJcbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZnJhbWUgaW5kZXggaXMgaW4gcmFuZ2VcclxuICAgICAgICBpZiAoZnJhbWVJbmRleCA8IG51bWJlck9mRnJhbWVzIC0gMSkgeyAgXHJcbiAgICAgICAgICAgIC8vIEdvIHRvIHRoZSBuZXh0IGZyYW1lXHJcbiAgICAgICAgICAgIGZyYW1lSW5kZXggKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmcmFtZUluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBzcHJpdGVPYmoucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBDbGVhciB0aGUgY2FudmFzXHJcbiAgICAgIHNwcml0ZU9iai5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzcHJpdGVPYmoud2lkdGgsIHNwcml0ZU9iai5oZWlnaHQpO1xyXG4gICAgICAvLyBEcmF3IHRoZSBhbmltYXRpb25cclxuICAgICAgc3ByaXRlT2JqLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgIHNwcml0ZU9iai5pbWFnZSxcclxuICAgICAgICBmcmFtZUluZGV4ICogc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICBzcHJpdGVPYmouaGVpZ2h0LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICBzcHJpdGVPYmouaGVpZ2h0KTtcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIHNwcml0ZU9iajtcclxuICAgIH1cclxuXHJcbiAgYW5pbWF0ZVN0YW5kaW5nKCkge1xyXG4gICAgdmFyIGNoYXJhY3RlcixjaGFyYWN0ZXJJbWFnZSxjYW52YXM7XHJcbiAgICBmdW5jdGlvbiBnYW1lTG9vcCgpe1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICAgICAgY2hhcmFjdGVyLnVwZGF0ZSgpO1xyXG4gICAgICBjaGFyYWN0ZXIucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmNsYXNzPT1cIlBhcmFnb25cIil7XHJcbiAgICAgIC8vIEdldCBjYW52YXNcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIyQW5pbWF0aW9uXCIpO1xyXG4gICAgICBjYW52YXMud2lkdGggPSAxMjU7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICBcclxuICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpOyAgXHJcbiAgICBcclxuICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICB3aWR0aDogMzczLFxyXG4gICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgICBudW1iZXJPZkZyYW1lczogNCxcclxuICAgICAgICB0aWNrc1BlckZyYW1lOiA0XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTIvZ29oYW4vZ29oYW4tc3RhbmRpbmcucG5nXCI7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmNsYXNzPT1cIkVsZW1lbnRhbGlzdFwiKXtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIyQW5pbWF0aW9uXCIpO1xyXG4gICAgICBjYW52YXMud2lkdGggPSAxMjU7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTsgIFxyXG4gICAgICBcclxuICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICB3aWR0aDogMzMxLFxyXG4gICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgICBudW1iZXJPZkZyYW1lczogMyxcclxuICAgICAgICB0aWNrc1BlckZyYW1lOiA0XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTIvcGljY29sby9waWNjb2xvLXN0YW5kaW5nLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5jbGFzcz09XCJIaWdod2F5bWFuXCIpe1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjJBbmltYXRpb25cIik7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IDk1O1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gICAgICBcclxuICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpOyAgXHJcbiAgICAgIFxyXG4gICAgICAvLyBDcmVhdGUgc3ByaXRlXHJcbiAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcclxuICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gICAgICAgIHdpZHRoOiAyOTIsXHJcbiAgICAgICAgaGVpZ2h0OiAxNjIsXHJcbiAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxyXG4gICAgICAgIG51bWJlck9mRnJhbWVzOiAzLFxyXG4gICAgICAgIHRpY2tzUGVyRnJhbWU6IDVcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTIvdHJ1bmtzL3RydW5rcy1zdGFuZGluZy5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
