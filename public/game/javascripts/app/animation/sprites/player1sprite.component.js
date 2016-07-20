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
            template: "\n    <canvas id=\"player1Animation\"></canvas>\n    "
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], Player1SpriteComponent);
    return Player1SpriteComponent;
}());
exports.Player1SpriteComponent = Player1SpriteComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9zcHJpdGVzL3BsYXllcjFzcHJpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBU2xFO0lBT0UsZ0NBQVksRUFBYztRQVA1QixpQkF5S0M7UUFqS0csSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNqQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUVsQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsa0JBQWtCLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2xDLEtBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxD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QUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUdwQixjQUFjLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUc3QixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDdEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNoQyxLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsY0FBYztnQkFDckIsY0FBYyxFQUFFLEdBQUc7Z0JBQ25CLGFBQWEsRUFBRSxDQUFDO2FBQ2pCLENBQUMsQ0FBQztZQUdILGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEQsY0FBYyxDQUFDLEdBQUcsR0FBRyxvREFBb0QsQ0FBQztRQUN4RSxDQUFDO0lBQ1AsQ0FBQztJQXRKSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsdURBRVA7U0FDSixDQUFDOzs4QkFBQTtJQTJLRiw2QkFBQztBQUFELENBektBLEFBeUtDLElBQUE7QUF6S1ksOEJBQXNCLHlCQXlLbEMsQ0FBQSIsImZpbGUiOiJhbmltYXRpb24vc3ByaXRlcy9wbGF5ZXIxc3ByaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGxheWVyMXNwcml0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxjYW52YXMgaWQ9XCJwbGF5ZXIxQW5pbWF0aW9uXCI+PC9jYW52YXM+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyMVNwcml0ZUNvbXBvbmVudCB7XHJcbiAgdGltZXJPYnNlcnZhYmxlOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHBsYXllck9ic2VydmFibGU6RmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47IFxyXG4gIFVSTDpzdHJpbmc7XHJcbiAgYWN0aW9uOnN0cmluZztcclxuICBjbGFzczpzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFmOkFuZ3VsYXJGaXJlKSB7XHJcbiAgICB0aGlzLlVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdGhpcy50aW1lck9ic2VydmFibGUgPSBhZi5kYXRhYmFzZS5vYmplY3QoJy8nK3RoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXSsnL1RpbWVyJyx7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLnRpbWVyT2JzZXJ2YWJsZS5zdWJzY3JpYmUoc25hcCA9PntcclxuICAgICAgaWYoc25hcC52YWwoKT09MCl7XHJcbiAgICAgICAgLy8gdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlU3RhbmRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMucGxheWVyT2JzZXJ2YWJsZSA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKycvUGxheWVycy9wbGF5ZXIxJyx7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLnBsYXllck9ic2VydmFibGUuc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIHRoaXMuYWN0aW9uPXNuYXAudmFsKCkuYWN0aW9uO1xyXG4gICAgICB0aGlzLmNsYXNzPXNuYXAudmFsKCkucGxheWVyQ2xhc3M7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3ByaXRlKG9wdGlvbnMpIHtcclxuICAgIHZhciBzcHJpdGVPYmogPSB7XHJcbiAgICAgIGNvbnRleHQ6IG9wdGlvbnMuY29udGV4dCxcclxuICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXHJcbiAgICAgIGltYWdlOiBvcHRpb25zLmltYWdlLFxyXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7fVxyXG4gICAgfSxcclxuICAgICAgZnJhbWVJbmRleCA9IDAsXHJcbiAgICAgIHRpY2tDb3VudCA9IDAsXHJcbiAgICAgIHRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMCxcclxuICAgICAgbnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcbiAgICBcclxuICAgIHNwcml0ZU9iai51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRpY2tDb3VudCArPSAxO1xyXG4gICAgICBpZiAodGlja0NvdW50ID4gdGlja3NQZXJGcmFtZSkge1xyXG4gICAgICAgIHRpY2tDb3VudCA9IDA7XHJcbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZnJhbWUgaW5kZXggaXMgaW4gcmFuZ2VcclxuICAgICAgICBpZiAoZnJhbWVJbmRleCA8IG51bWJlck9mRnJhbWVzIC0gMSkgeyAgXHJcbiAgICAgICAgICAgIC8vIEdvIHRvIHRoZSBuZXh0IGZyYW1lXHJcbiAgICAgICAgICAgIGZyYW1lSW5kZXggKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmcmFtZUluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBzcHJpdGVPYmoucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBDbGVhciB0aGUgY2FudmFzXHJcbiAgICAgIHNwcml0ZU9iai5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzcHJpdGVPYmoud2lkdGgsIHNwcml0ZU9iai5oZWlnaHQpO1xyXG4gICAgICAvLyBEcmF3IHRoZSBhbmltYXRpb25cclxuICAgICAgc3ByaXRlT2JqLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgIHNwcml0ZU9iai5pbWFnZSxcclxuICAgICAgICBmcmFtZUluZGV4ICogc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICBzcHJpdGVPYmouaGVpZ2h0LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICBzcHJpdGVPYmouaGVpZ2h0KTtcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIHNwcml0ZU9iajtcclxuICAgIH1cclxuXHJcbiAgYW5pbWF0ZVN0YW5kaW5nKCkge1xyXG4gICAgdmFyIGNoYXJhY3RlcixjaGFyYWN0ZXJJbWFnZSxjYW52YXM7XHJcbiAgICBmdW5jdGlvbiBnYW1lTG9vcCgpe1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICAgICAgY2hhcmFjdGVyLnVwZGF0ZSgpO1xyXG4gICAgICBjaGFyYWN0ZXIucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIkdvdCBpbiBoZXJlXCIpO1xyXG4gICAgaWYodGhpcy5jbGFzcz09XCJQYXJhZ29uXCIpe1xyXG4gICAgICAvLyBHZXQgY2FudmFzXHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMUFuaW1hdGlvblwiKTtcclxuICAgICAgY2FudmFzLndpZHRoID0gMTI1O1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gICAgXHJcbiAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTsgIFxyXG4gICAgXHJcbiAgICAgIC8vIENyZWF0ZSBzcHJpdGVcclxuICAgICAgY2hhcmFjdGVyID0gdGhpcy5zcHJpdGUoe1xyXG4gICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgd2lkdGg6IDM3MyxcclxuICAgICAgICBoZWlnaHQ6IDE2MixcclxuICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXHJcbiAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDQsXHJcbiAgICAgICAgdGlja3NQZXJGcmFtZTogNFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcclxuICAgICAgY29uc29sZS5sb2coY2hhcmFjdGVySW1hZ2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjaGFyYWN0ZXIpO1xyXG4gICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvZ29oYW4vZ29oYW4tc3RhbmRpbmcucG5nXCI7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmNsYXNzPT1cIkVsZW1lbnRhbGlzdFwiKXtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxQW5pbWF0aW9uXCIpO1xyXG4gICAgICBjYW52YXMud2lkdGggPSAxMjU7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTsgIFxyXG4gICAgICBcclxuICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICB3aWR0aDogMzMxLFxyXG4gICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgICBudW1iZXJPZkZyYW1lczogMyxcclxuICAgICAgICB0aWNrc1BlckZyYW1lOiA0XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvcGljY29sby9waWNjb2xvLXN0YW5kaW5nLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5jbGFzcz09XCJIaWdod2F5bWFuXCIpe1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjFBbmltYXRpb25cIik7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IDEyNTtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcclxuICAgICAgXHJcbiAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTsgIFxyXG4gICAgICBcclxuICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICB3aWR0aDogMjkyLFxyXG4gICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgICBudW1iZXJPZkZyYW1lczogMi45LFxyXG4gICAgICAgIHRpY2tzUGVyRnJhbWU6IDVcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvdHJ1bmtzL3RydW5rcy1zdGFuZGluZy5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBhbmltYXRlQXR0YWNrKCkge1xyXG4gIC8vICAgLy8gR2V0IGNhbnZhc1xyXG4gIC8vICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxQW5pbWF0aW9uXCIpO1xyXG4gIC8vICAgY2FudmFzLndpZHRoID0gMTMzO1xyXG4gIC8vICAgY2FudmFzLmhlaWdodCA9IDE2MjtcclxuICBcclxuICAvLyAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAvLyAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7ICBcclxuICBcclxuICAvLyAgIC8vIENyZWF0ZSBzcHJpdGVcclxuICAvLyAgIGNoYXJhY3RlciA9IHNwcml0ZSh7XHJcbiAgLy8gICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgLy8gICAgIHdpZHRoOiA1ODgsXHJcbiAgLy8gICAgIGhlaWdodDogMTYyLFxyXG4gIC8vICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXHJcbiAgLy8gICAgIG51bWJlck9mRnJhbWVzOiAzLjksXHJcbiAgLy8gICAgIHRpY2tzUGVyRnJhbWU6IDhcclxuICAvLyAgIH0pO1xyXG4gIFxyXG4gIC8vICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcclxuICAvLyAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcclxuICAvLyAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvZ29oYW4vZ29oYW4tcHVuY2gucG5nXCI7XHJcbiAgLy8gfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
