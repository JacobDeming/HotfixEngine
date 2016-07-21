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
                _this.animate(_this.class, _this.action);
            }
            else {
                _this.animateStance(_this.class);
            }
        });
        this.playerObservable = af.database.object('/' + this.URL.split('/game/')[1] + '/Players/player1', { preserveSnapshot: true });
        this.playerObservable.subscribe(function (snap) {
            _this.action = snap.val().action;
            _this.class = snap.val().playerClass;
            if (snap.val().currentHitpoints < 0) {
                _this.animateDefeat(_this.class);
            }
        });
    }
    Player1SpriteComponent.prototype.animate = function (playerClass, playerAction) {
        var canvas = this.canvas.nativeElement;
        var character, characterImage;
        function gameLoop() {
            window.requestAnimationFrame(gameLoop);
            character.update();
            character.render();
        }
        switch (playerClass) {
            case ("Elementalist"):
                switch (playerAction) {
                    case ("strike"):
                        canvas.width = 150;
                        canvas.height = 162;
                        characterImage = new Image();
                        character = this.sprite({
                            context: canvas.getContext("2d"),
                            width: 450,
                            height: 162,
                            image: characterImage,
                            numberOfFrames: 3,
                            ticksPerFrame: 4
                        });
                        characterImage.addEventListener("load", gameLoop);
                        characterImage.src = "images/sprites/player-1/piccolo/piccolo-punch.png";
                        break;
                    case ("special"):
                        canvas.width = 190;
                        canvas.height = 162;
                        characterImage = new Image();
                        character = this.sprite({
                            context: canvas.getContext("2d"),
                            width: 380,
                            height: 162,
                            image: characterImage,
                            numberOfFrames: 2,
                            ticksPerFrame: 20
                        });
                        characterImage.addEventListener("load", gameLoop);
                        characterImage.src = "images/sprites/player-1/piccolo/piccolo-magic.png";
                        break;
                    case ("defend"):
                        canvas.width = 120;
                        canvas.height = 162;
                        characterImage = new Image();
                        character = this.sprite({
                            context: canvas.getContext("2d"),
                            width: 240,
                            height: 162,
                            image: characterImage,
                            numberOfFrames: 2,
                            ticksPerFrame: 20
                        });
                        characterImage.addEventListener("load", gameLoop);
                        characterImage.src = "images/sprites/player-1/piccolo/piccolo-defend.png";
                        break;
                    default:
                        this.animateStance(playerClass);
                }
                break;
            case ("Highwayman"):
                switch (playerAction) {
                    case ("strike"):
                        canvas.width = 185;
                        canvas.height = 162;
                        characterImage = new Image();
                        character = this.sprite({
                            context: canvas.getContext("2d"),
                            width: 556,
                            height: 162,
                            image: characterImage,
                            numberOfFrames: 3,
                            ticksPerFrame: 8
                        });
                        characterImage.addEventListener("load", gameLoop);
                        characterImage.src = "images/sprites/player-1/trunks/trunks-punch.png";
                        break;
                    case ("special"):
                        canvas.width = 190;
                        canvas.height = 162;
                        characterImage = new Image();
                        character = this.sprite({
                            context: canvas.getContext("2d"),
                            width: 380,
                            height: 162,
                            image: characterImage,
                            numberOfFrames: 2,
                            ticksPerFrame: 20
                        });
                        characterImage.addEventListener("load", gameLoop);
                        characterImage.src = "images/sprites/player-1/trunks/trunks-magic.png";
                        break;
                    case ("defend"):
                        canvas.width = 120;
                        canvas.height = 162;
                        characterImage = new Image();
                        character = this.sprite({
                            context: canvas.getContext("2d"),
                            width: 240,
                            height: 162,
                            image: characterImage,
                            numberOfFrames: 2,
                            ticksPerFrame: 20
                        });
                        characterImage.addEventListener("load", gameLoop);
                        characterImage.src = "images/sprites/player-1/trunks/trunks-defend.png";
                        break;
                    default:
                        this.animateStance(playerClass);
                }
                break;
            case ("Paragon"):
                switch (playerAction) {
                    case ("strike"):
                        canvas.width = 154;
                        canvas.height = 162;
                        characterImage = new Image();
                        character = this.sprite({
                            context: canvas.getContext("2d"),
                            width: 616,
                            height: 162,
                            image: characterImage,
                            numberOfFrames: 4,
                            ticksPerFrame: 8
                        });
                        characterImage.addEventListener("load", gameLoop);
                        characterImage.src = "images/sprites/player-1/gohan/gohan-punch.png";
                        break;
                    case ("special"):
                        canvas.width = 140;
                        canvas.height = 162;
                        characterImage = new Image();
                        character = this.sprite({
                            context: canvas.getContext("2d"),
                            width: 280,
                            height: 162,
                            image: characterImage,
                            numberOfFrames: 2,
                            ticksPerFrame: 20
                        });
                        characterImage.addEventListener("load", gameLoop);
                        characterImage.src = "images/sprites/player-1/gohan/gohan-magic.png";
                        break;
                    case ("defend"):
                        canvas.width = 120;
                        canvas.height = 162;
                        characterImage = new Image();
                        character = this.sprite({
                            context: canvas.getContext("2d"),
                            width: 240,
                            height: 162,
                            image: characterImage,
                            numberOfFrames: 2,
                            ticksPerFrame: 20
                        });
                        characterImage.addEventListener("load", gameLoop);
                        characterImage.src = "images/sprites/player-1/gohan/gohan-defend.png";
                        break;
                    default:
                        this.animateStance(playerClass);
                }
                break;
        }
    };
    Player1SpriteComponent.prototype.animateDefeat = function (playerClass) {
        var canvas = this.canvas.nativeElement;
        var character, characterImage;
        function gameLoop() {
            window.requestAnimationFrame(gameLoop);
            character.update();
            character.render();
        }
        switch (playerClass) {
            case ("Elementalist"):
                canvas.width = 162;
                canvas.height = 162;
                characterImage = new Image();
                character = this.sprite({
                    context: canvas.getContext("2d"),
                    width: canvas.width,
                    height: canvas.height,
                    image: characterImage,
                    numberOfFrames: 1,
                    ticksPerFrame: 10
                });
                characterImage.addEventListener("load", gameLoop);
                characterImage.src = "images/sprites/player-1/piccolo/piccolo-defeat.png";
                break;
            case ("Highwayman"):
                canvas.width = 177;
                canvas.height = 162;
                characterImage = new Image();
                character = this.sprite({
                    context: canvas.getContext("2d"),
                    width: canvas.width,
                    height: canvas.height,
                    image: characterImage,
                    numberOfFrames: 1,
                    ticksPerFrame: 10
                });
                characterImage.addEventListener("load", gameLoop);
                characterImage.src = "images/sprites/player-1/trunks/trunks-defeat.png";
                break;
            case ("Paragon"):
                canvas.width = 162;
                canvas.height = 162;
                characterImage = new Image();
                character = this.sprite({
                    context: canvas.getContext("2d"),
                    width: canvas.width,
                    height: canvas.height,
                    image: characterImage,
                    numberOfFrames: 1,
                    ticksPerFrame: 10
                });
                characterImage.addEventListener("load", gameLoop);
                characterImage.src = "images/sprites/player-1/gohan/gohan-defeat.png";
                break;
        }
    };
    Player1SpriteComponent.prototype.animateStance = function (playerClass) {
        var canvas = this.canvas.nativeElement;
        var character, characterImage;
        function gameLoop() {
            window.requestAnimationFrame(gameLoop);
            character.update();
            character.render();
        }
        switch (playerClass) {
            case ("Elementalist"):
                canvas.width = 125;
                canvas.height = 162;
                characterImage = new Image();
                character = this.sprite({
                    context: canvas.getContext("2d"),
                    width: 331,
                    height: 162,
                    image: characterImage,
                    numberOfFrames: 3,
                    ticksPerFrame: 4,
                    loop: true
                });
                characterImage.addEventListener("load", gameLoop);
                characterImage.src = "images/sprites/player-1/piccolo/piccolo-standing.png";
                break;
            case ("Highwayman"):
                canvas.width = 99;
                canvas.height = 162;
                characterImage = new Image();
                character = this.sprite({
                    context: canvas.getContext("2d"),
                    width: 300,
                    height: 162,
                    image: characterImage,
                    numberOfFrames: 3,
                    ticksPerFrame: 5,
                    loop: true
                });
                characterImage.addEventListener("load", gameLoop);
                characterImage.src = "images/sprites/player-1/trunks/trunks-standing.png";
                break;
            case ("Paragon"):
                canvas.width = 125;
                canvas.height = 162;
                characterImage = new Image();
                character = this.sprite({
                    context: canvas.getContext("2d"),
                    width: 373,
                    height: 162,
                    image: characterImage,
                    numberOfFrames: 4,
                    ticksPerFrame: 4,
                    loop: true
                });
                characterImage.addEventListener("load", gameLoop);
                characterImage.src = "images/sprites/player-1/gohan/gohan-standing.png";
                break;
        }
    };
    Player1SpriteComponent.prototype.sprite = function (options) {
        var spriteObj = {
            context: options.context,
            width: options.width,
            height: options.height,
            image: options.image,
            loop: options.loop,
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
                else if (spriteObj.loop) {
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
    __decorate([
        core_1.ViewChild('myCanvas'), 
        __metadata('design:type', core_1.ElementRef)
    ], Player1SpriteComponent.prototype, "canvas", void 0);
    Player1SpriteComponent = __decorate([
        core_1.Component({
            selector: 'player1sprite',
            template: "\n    <canvas #myCanvas id=\"player1Animation\"></canvas>\n    "
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], Player1SpriteComponent);
    return Player1SpriteComponent;
}());
exports.Player1SpriteComponent = Player1SpriteComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9zcHJpdGVzL3BsYXllcjFzcHJpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBU2xFO0lBU0UsZ0NBQVksRUFBYztRQVQ1QixpQkEyYUM7UUFqYUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxrQkFBa0IsRUFBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFD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Qix5QkEyYWxDLENBQUEiLCJmaWxlIjoiYW5pbWF0aW9uL3Nwcml0ZXMvcGxheWVyMXNwcml0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxWaWV3Q2hpbGQsRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QW5ndWxhckZpcmUsRmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlfSBmcm9tICdhbmd1bGFyZmlyZTInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwbGF5ZXIxc3ByaXRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGNhbnZhcyAjbXlDYW52YXMgaWQ9XCJwbGF5ZXIxQW5pbWF0aW9uXCI+PC9jYW52YXM+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyMVNwcml0ZUNvbXBvbmVudHtcclxuICBAVmlld0NoaWxkKCdteUNhbnZhcycpIGNhbnZhczpFbGVtZW50UmVmO1xyXG5cclxuICB0aW1lck9ic2VydmFibGU6RmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47XHJcbiAgcGxheWVyT2JzZXJ2YWJsZTpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjsgXHJcbiAgVVJMOnN0cmluZztcclxuICBhY3Rpb246c3RyaW5nO1xyXG4gIGNsYXNzOnN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoYWY6QW5ndWxhckZpcmUpe1xyXG4gICAgdGhpcy5VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHRoaXMudGltZXJPYnNlcnZhYmxlID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9UaW1lcicse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgdGhpcy50aW1lck9ic2VydmFibGUuc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIGlmIChzbmFwLnZhbCgpPT0wKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuY2xhc3MsdGhpcy5hY3Rpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVN0YW5jZSh0aGlzLmNsYXNzKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMucGxheWVyT2JzZXJ2YWJsZSA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKycvUGxheWVycy9wbGF5ZXIxJyx7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLnBsYXllck9ic2VydmFibGUuc3Vic2NyaWJlKHNuYXAgPT57XHJcbiAgICAgIHRoaXMuYWN0aW9uPXNuYXAudmFsKCkuYWN0aW9uO1xyXG4gICAgICB0aGlzLmNsYXNzPXNuYXAudmFsKCkucGxheWVyQ2xhc3M7XHJcbiAgICAgIC8qIGNoZWNrIGlmIHN0aWxsIGFsaXZlICovXHJcbiAgICAgIGlmIChzbmFwLnZhbCgpLmN1cnJlbnRIaXRwb2ludHMgPCAwKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlRGVmZWF0KHRoaXMuY2xhc3MpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZShwbGF5ZXJDbGFzcyxwbGF5ZXJBY3Rpb24pe1xyXG4gICAgLyogU2V0IHVwIGNhbnZhcyB2YXJpYWJsZXMgKi9cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50O1xyXG4gICAgdmFyIGNoYXJhY3RlcixjaGFyYWN0ZXJJbWFnZTtcclxuICAgIGZ1bmN0aW9uIGdhbWVMb29wKCl7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgICBjaGFyYWN0ZXIudXBkYXRlKCk7XHJcbiAgICAgIGNoYXJhY3Rlci5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIC8qIEFuaW1hdGUgYmFzZWQgb24gcGxheWVyIGFuZCBhY3Rpb24gKi9cclxuICAgIHN3aXRjaChwbGF5ZXJDbGFzcyl7XHJcbiAgICAgIC8vIGVsZW1lbnRhbGlzdCA6IHBpY2NvbG9cclxuICAgICAgY2FzZSAoXCJFbGVtZW50YWxpc3RcIik6XHJcbiAgICAgICAgc3dpdGNoKHBsYXllckFjdGlvbil7XHJcbiAgICAgICAgICBjYXNlKFwic3RyaWtlXCIpOlxyXG4gICAgICAgICAgICAvLyBHZXQgY2FudmFzXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IDE1MDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlXHJcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcclxuICAgICAgICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA0NTAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNjIsXHJcbiAgICAgICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxyXG4gICAgICAgICAgICAgIG51bWJlck9mRnJhbWVzOiAzLFxyXG4gICAgICAgICAgICAgIHRpY2tzUGVyRnJhbWU6IDRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMS9waWNjb2xvL3BpY2NvbG8tcHVuY2gucG5nXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZShcInNwZWNpYWxcIik6XHJcbiAgICAgICAgICAgIC8vIEdldCBjYW52YXNcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gMTkwO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGVcclxuICAgICAgICAgICAgY2hhcmFjdGVyID0gdGhpcy5zcHJpdGUoe1xyXG4gICAgICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDM4MCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE2MixcclxuICAgICAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXHJcbiAgICAgICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDIsXHJcbiAgICAgICAgICAgICAgdGlja3NQZXJGcmFtZTogMjBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMS9waWNjb2xvL3BpY2NvbG8tbWFnaWMucG5nXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZShcImRlZmVuZFwiKTpcclxuICAgICAgICAgICAgLy8gR2V0IGNhbnZhc1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSAxMjA7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICAgICAgICB3aWR0aDogMjQwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgICAgICAgICBudW1iZXJPZkZyYW1lczogMixcclxuICAgICAgICAgICAgICB0aWNrc1BlckZyYW1lOiAyMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL3BpY2NvbG8vcGljY29sby1kZWZlbmQucG5nXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlU3RhbmNlKHBsYXllckNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIGhpZ2h3YXltYW4gOiB0cnVua3NcclxuICAgICAgY2FzZSAoXCJIaWdod2F5bWFuXCIpOlxyXG4gICAgICAgIHN3aXRjaChwbGF5ZXJBY3Rpb24pe1xyXG4gICAgICAgICAgY2FzZShcInN0cmlrZVwiKTpcclxuICAgICAgICAgICAgLy8gR2V0IGNhbnZhc1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSAxODU7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICAgICAgICB3aWR0aDogNTU2LFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgICAgICAgICBudW1iZXJPZkZyYW1lczogMyxcclxuICAgICAgICAgICAgICB0aWNrc1BlckZyYW1lOiA4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvdHJ1bmtzL3RydW5rcy1wdW5jaC5wbmdcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlKFwic3BlY2lhbFwiKTpcclxuICAgICAgICAgICAgLy8gR2V0IGNhbnZhc1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSAxOTA7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICAgICAgICB3aWR0aDogMzgwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgICAgICAgICBudW1iZXJPZkZyYW1lczogMixcclxuICAgICAgICAgICAgICB0aWNrc1BlckZyYW1lOiAyMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL3RydW5rcy90cnVua3MtbWFnaWMucG5nXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZShcImRlZmVuZFwiKTpcclxuICAgICAgICAgICAgLy8gR2V0IGNhbnZhc1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSAxMjA7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICAgICAgICB3aWR0aDogMjQwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgICAgICAgICBudW1iZXJPZkZyYW1lczogMixcclxuICAgICAgICAgICAgICB0aWNrc1BlckZyYW1lOiAyMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL3RydW5rcy90cnVua3MtZGVmZW5kLnBuZ1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVN0YW5jZShwbGF5ZXJDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBwYXJhZ29uIDogZ29oYW5cclxuICAgICAgY2FzZSAoXCJQYXJhZ29uXCIpOlxyXG4gICAgICAgIHN3aXRjaChwbGF5ZXJBY3Rpb24pe1xyXG4gICAgICAgICAgY2FzZShcInN0cmlrZVwiKTpcclxuICAgICAgICAgICAgLy8gR2V0IGNhbnZhc1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSAxNTQ7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICAgICAgICB3aWR0aDogNjE2LFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgICAgICAgICBudW1iZXJPZkZyYW1lczogNCxcclxuICAgICAgICAgICAgICB0aWNrc1BlckZyYW1lOiA4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvZ29oYW4vZ29oYW4tcHVuY2gucG5nXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZShcInNwZWNpYWxcIik6XHJcbiAgICAgICAgICAgIC8vIEdldCBjYW52YXNcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gMTQwO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGVcclxuICAgICAgICAgICAgY2hhcmFjdGVyID0gdGhpcy5zcHJpdGUoe1xyXG4gICAgICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI4MCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE2MixcclxuICAgICAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXHJcbiAgICAgICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDIsXHJcbiAgICAgICAgICAgICAgdGlja3NQZXJGcmFtZTogMjBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMS9nb2hhbi9nb2hhbi1tYWdpYy5wbmdcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlKFwiZGVmZW5kXCIpOlxyXG4gICAgICAgICAgICAvLyBHZXQgY2FudmFzXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IDEyMDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlXHJcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcclxuICAgICAgICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNDAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNjIsXHJcbiAgICAgICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxyXG4gICAgICAgICAgICAgIG51bWJlck9mRnJhbWVzOiAyLFxyXG4gICAgICAgICAgICAgIHRpY2tzUGVyRnJhbWU6IDIwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvZ29oYW4vZ29oYW4tZGVmZW5kLnBuZ1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVN0YW5jZShwbGF5ZXJDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZURlZmVhdChwbGF5ZXJDbGFzcyl7XHJcbiAgICAvKiBTZXQgdXAgY2FudmFzIHZhcmlhYmxlcyAqL1xyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB2YXIgY2hhcmFjdGVyLGNoYXJhY3RlckltYWdlO1xyXG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AoKXtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3Rlci51cGRhdGUoKTtcclxuICAgICAgY2hhcmFjdGVyLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoKHBsYXllckNsYXNzKXtcclxuICAgICAgY2FzZShcIkVsZW1lbnRhbGlzdFwiKTpcclxuICAgICAgICAvLyBHZXQgY2FudmFzXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gMTYyO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcclxuICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxyXG4gICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDEsXHJcbiAgICAgICAgICB0aWNrc1BlckZyYW1lOiAxMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvcGljY29sby9waWNjb2xvLWRlZmVhdC5wbmdcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcIkhpZ2h3YXltYW5cIik6XHJcbiAgICAgICAgLy8gR2V0IGNhbnZhc1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE3NztcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIC8vIENyZWF0ZSBzcHJpdGVcclxuICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gICAgICAgICAgd2lkdGg6IGNhbnZhcy53aWR0aCxcclxuICAgICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcclxuICAgICAgICAgIG51bWJlck9mRnJhbWVzOiAxLFxyXG4gICAgICAgICAgdGlja3NQZXJGcmFtZTogMTBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxyXG4gICAgICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcclxuICAgICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL3RydW5rcy90cnVua3MtZGVmZWF0LnBuZ1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlKFwiUGFyYWdvblwiKTpcclxuICAgICAgICAvLyBHZXQgY2FudmFzXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gMTYyO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcclxuICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxyXG4gICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDEsXHJcbiAgICAgICAgICB0aWNrc1BlckZyYW1lOiAxMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvZ29oYW4vZ29oYW4tZGVmZWF0LnBuZ1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZVN0YW5jZShwbGF5ZXJDbGFzcyl7XHJcbiAgICAvKiBTZXQgdXAgY2FudmFzIHZhcmlhYmxlcyAqL1xyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB2YXIgY2hhcmFjdGVyLGNoYXJhY3RlckltYWdlO1xyXG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AoKXtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICAgIGNoYXJhY3Rlci51cGRhdGUoKTtcclxuICAgICAgY2hhcmFjdGVyLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoKHBsYXllckNsYXNzKXtcclxuICAgICAgY2FzZShcIkVsZW1lbnRhbGlzdFwiKTpcclxuICAgICAgICAvLyBHZXQgY2FudmFzXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gMTI1O1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxyXG4gICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxyXG4gICAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcclxuICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgICB3aWR0aDogMzMxLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxNjIsXHJcbiAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXHJcbiAgICAgICAgICBudW1iZXJPZkZyYW1lczogMyxcclxuICAgICAgICAgIHRpY2tzUGVyRnJhbWU6IDQsXHJcbiAgICAgICAgICBsb29wOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcclxuICAgICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XHJcbiAgICAgICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMS9waWNjb2xvL3BpY2NvbG8tc3RhbmRpbmcucG5nXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UoXCJIaWdod2F5bWFuXCIpOlxyXG4gICAgICAgIC8vIEdldCBjYW52YXNcclxuICAgICAgICBjYW52YXMud2lkdGggPSA5OTtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIC8vIENyZWF0ZSBzcHJpdGVcclxuICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxyXG4gICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDMsXHJcbiAgICAgICAgICB0aWNrc1BlckZyYW1lOiA1LFxyXG4gICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvdHJ1bmtzL3RydW5rcy1zdGFuZGluZy5wbmdcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcIlBhcmFnb25cIik6XHJcbiAgICAgICAgLy8gR2V0IGNhbnZhc1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDEyNTtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xyXG4gICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcclxuICAgICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIC8vIENyZWF0ZSBzcHJpdGVcclxuICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XHJcbiAgICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gICAgICAgICAgd2lkdGg6IDM3MyxcclxuICAgICAgICAgIGhlaWdodDogMTYyLFxyXG4gICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxyXG4gICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDQsXHJcbiAgICAgICAgICB0aWNrc1BlckZyYW1lOiA0LFxyXG4gICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XHJcbiAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xyXG4gICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvZ29oYW4vZ29oYW4tc3RhbmRpbmcucG5nXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzcHJpdGUob3B0aW9ucykge1xyXG4gICAgICB2YXIgc3ByaXRlT2JqID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IG9wdGlvbnMuY29udGV4dCxcclxuICAgICAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxyXG4gICAgICAgIGltYWdlOiBvcHRpb25zLmltYWdlLFxyXG4gICAgICAgIGxvb3A6IG9wdGlvbnMubG9vcCxcclxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHt9XHJcbiAgICAgIH0sXHJcbiAgICAgICAgZnJhbWVJbmRleCA9IDAsXHJcbiAgICAgICAgdGlja0NvdW50ID0gMCxcclxuICAgICAgICB0aWNrc1BlckZyYW1lID0gb3B0aW9ucy50aWNrc1BlckZyYW1lIHx8IDAsXHJcbiAgICAgICAgbnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcbiAgICAgIFxyXG4gICAgICBzcHJpdGVPYmoudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpY2tDb3VudCArPSAxO1xyXG4gICAgICAgIGlmICh0aWNrQ291bnQgPiB0aWNrc1BlckZyYW1lKSB7XHJcbiAgICAgICAgICB0aWNrQ291bnQgPSAwO1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZnJhbWUgaW5kZXggaXMgaW4gcmFuZ2VcclxuICAgICAgICAgIGlmIChmcmFtZUluZGV4IDwgbnVtYmVyT2ZGcmFtZXMgLSAxKSB7ICBcclxuICAgICAgICAgICAgICAvLyBHbyB0byB0aGUgbmV4dCBmcmFtZVxyXG4gICAgICAgICAgICAgIGZyYW1lSW5kZXggKz0gMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc3ByaXRlT2JqLmxvb3ApIHtcclxuICAgICAgICAgICAgICBmcmFtZUluZGV4ID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzcHJpdGVPYmoucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIENsZWFyIHRoZSBjYW52YXNcclxuICAgICAgICBzcHJpdGVPYmouY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc3ByaXRlT2JqLndpZHRoLCBzcHJpdGVPYmouaGVpZ2h0KTtcclxuICAgICAgICAvLyBEcmF3IHRoZSBhbmltYXRpb25cclxuICAgICAgICBzcHJpdGVPYmouY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICBzcHJpdGVPYmouaW1hZ2UsXHJcbiAgICAgICAgICBmcmFtZUluZGV4ICogc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgICAgICBzcHJpdGVPYmouaGVpZ2h0LFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBzcHJpdGVPYmoud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcclxuICAgICAgICAgIHNwcml0ZU9iai5oZWlnaHQpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIHNwcml0ZU9iajtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
