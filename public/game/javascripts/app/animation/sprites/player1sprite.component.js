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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9zcHJpdGVzL3BsYXllcjFzcHJpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBU2xFO0lBU0UsZ0NBQVksRUFBYztRQVQ1QixpQkEyYUM7UUFqYUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxrQkFBa0IsRUFBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFD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Qix5QkEyYWxDLENBQUEiLCJmaWxlIjoiYW5pbWF0aW9uL3Nwcml0ZXMvcGxheWVyMXNwcml0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxWaWV3Q2hpbGQsRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGxheWVyMXNwcml0ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNhbnZhcyAjbXlDYW52YXMgaWQ9XCJwbGF5ZXIxQW5pbWF0aW9uXCI+PC9jYW52YXM+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFBsYXllcjFTcHJpdGVDb21wb25lbnR7XG4gIEBWaWV3Q2hpbGQoJ215Q2FudmFzJykgY2FudmFzOkVsZW1lbnRSZWY7XG5cbiAgdGltZXJPYnNlcnZhYmxlOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xuICBwbGF5ZXJPYnNlcnZhYmxlOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+OyBcbiAgVVJMOnN0cmluZztcbiAgYWN0aW9uOnN0cmluZztcbiAgY2xhc3M6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFmOkFuZ3VsYXJGaXJlKXtcbiAgICB0aGlzLlVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIHRoaXMudGltZXJPYnNlcnZhYmxlID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9UaW1lcicse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xuICAgIHRoaXMudGltZXJPYnNlcnZhYmxlLnN1YnNjcmliZShzbmFwID0+e1xuICAgICAgaWYgKHNuYXAudmFsKCk9PTApIHtcbiAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuY2xhc3MsdGhpcy5hY3Rpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmltYXRlU3RhbmNlKHRoaXMuY2xhc3MpO1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5wbGF5ZXJPYnNlcnZhYmxlID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9QbGF5ZXJzL3BsYXllcjEnLHtwcmVzZXJ2ZVNuYXBzaG90OnRydWV9KTtcbiAgICB0aGlzLnBsYXllck9ic2VydmFibGUuc3Vic2NyaWJlKHNuYXAgPT57XG4gICAgICB0aGlzLmFjdGlvbj1zbmFwLnZhbCgpLmFjdGlvbjtcbiAgICAgIHRoaXMuY2xhc3M9c25hcC52YWwoKS5wbGF5ZXJDbGFzcztcbiAgICAgIC8qIGNoZWNrIGlmIHN0aWxsIGFsaXZlICovXG4gICAgICBpZiAoc25hcC52YWwoKS5jdXJyZW50SGl0cG9pbnRzIDwgMCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWZlYXQodGhpcy5jbGFzcyk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFuaW1hdGUocGxheWVyQ2xhc3MscGxheWVyQWN0aW9uKXtcbiAgICAvKiBTZXQgdXAgY2FudmFzIHZhcmlhYmxlcyAqL1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIHZhciBjaGFyYWN0ZXIsY2hhcmFjdGVySW1hZ2U7XG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AoKXtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgICAgY2hhcmFjdGVyLnVwZGF0ZSgpO1xuICAgICAgY2hhcmFjdGVyLnJlbmRlcigpO1xuICAgIH1cbiAgICAvKiBBbmltYXRlIGJhc2VkIG9uIHBsYXllciBhbmQgYWN0aW9uICovXG4gICAgc3dpdGNoKHBsYXllckNsYXNzKXtcbiAgICAgIC8vIGVsZW1lbnRhbGlzdCA6IHBpY2NvbG9cbiAgICAgIGNhc2UgKFwiRWxlbWVudGFsaXN0XCIpOlxuICAgICAgICBzd2l0Y2gocGxheWVyQWN0aW9uKXtcbiAgICAgICAgICBjYXNlKFwic3RyaWtlXCIpOlxuICAgICAgICAgICAgLy8gR2V0IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gMTUwO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XG4gICAgICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgICAgICAgICAgIHdpZHRoOiA0NTAsXG4gICAgICAgICAgICAgIGhlaWdodDogMTYyLFxuICAgICAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXG4gICAgICAgICAgICAgIG51bWJlck9mRnJhbWVzOiAzLFxuICAgICAgICAgICAgICB0aWNrc1BlckZyYW1lOiA0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL3BpY2NvbG8vcGljY29sby1wdW5jaC5wbmdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UoXCJzcGVjaWFsXCIpOlxuICAgICAgICAgICAgLy8gR2V0IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gMTkwO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XG4gICAgICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgICAgICAgICAgIHdpZHRoOiAzODAsXG4gICAgICAgICAgICAgIGhlaWdodDogMTYyLFxuICAgICAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXG4gICAgICAgICAgICAgIG51bWJlck9mRnJhbWVzOiAyLFxuICAgICAgICAgICAgICB0aWNrc1BlckZyYW1lOiAyMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMS9waWNjb2xvL3BpY2NvbG8tbWFnaWMucG5nXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlKFwiZGVmZW5kXCIpOlxuICAgICAgICAgICAgLy8gR2V0IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gMTIwO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XG4gICAgICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgICAgICAgICAgIHdpZHRoOiAyNDAsXG4gICAgICAgICAgICAgIGhlaWdodDogMTYyLFxuICAgICAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXG4gICAgICAgICAgICAgIG51bWJlck9mRnJhbWVzOiAyLFxuICAgICAgICAgICAgICB0aWNrc1BlckZyYW1lOiAyMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMS9waWNjb2xvL3BpY2NvbG8tZGVmZW5kLnBuZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVN0YW5jZShwbGF5ZXJDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBoaWdod2F5bWFuIDogdHJ1bmtzXG4gICAgICBjYXNlIChcIkhpZ2h3YXltYW5cIik6XG4gICAgICAgIHN3aXRjaChwbGF5ZXJBY3Rpb24pe1xuICAgICAgICAgIGNhc2UoXCJzdHJpa2VcIik6XG4gICAgICAgICAgICAvLyBHZXQgY2FudmFzXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSAxODU7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGVcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcbiAgICAgICAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcbiAgICAgICAgICAgICAgd2lkdGg6IDU1NixcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNjIsXG4gICAgICAgICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcbiAgICAgICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDMsXG4gICAgICAgICAgICAgIHRpY2tzUGVyRnJhbWU6IDhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvdHJ1bmtzL3RydW5rcy1wdW5jaC5wbmdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UoXCJzcGVjaWFsXCIpOlxuICAgICAgICAgICAgLy8gR2V0IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gMTkwO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XG4gICAgICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgICAgICAgICAgIHdpZHRoOiAzODAsXG4gICAgICAgICAgICAgIGhlaWdodDogMTYyLFxuICAgICAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXG4gICAgICAgICAgICAgIG51bWJlck9mRnJhbWVzOiAyLFxuICAgICAgICAgICAgICB0aWNrc1BlckZyYW1lOiAyMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMS90cnVua3MvdHJ1bmtzLW1hZ2ljLnBuZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZShcImRlZmVuZFwiKTpcbiAgICAgICAgICAgIC8vIEdldCBjYW52YXNcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IDEyMDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxuICAgICAgICAgICAgY2hhcmFjdGVyID0gdGhpcy5zcHJpdGUoe1xuICAgICAgICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxuICAgICAgICAgICAgICB3aWR0aDogMjQwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDE2MixcbiAgICAgICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxuICAgICAgICAgICAgICBudW1iZXJPZkZyYW1lczogMixcbiAgICAgICAgICAgICAgdGlja3NQZXJGcmFtZTogMjBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvdHJ1bmtzL3RydW5rcy1kZWZlbmQucG5nXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5hbmltYXRlU3RhbmNlKHBsYXllckNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIC8vIHBhcmFnb24gOiBnb2hhblxuICAgICAgY2FzZSAoXCJQYXJhZ29uXCIpOlxuICAgICAgICBzd2l0Y2gocGxheWVyQWN0aW9uKXtcbiAgICAgICAgICBjYXNlKFwic3RyaWtlXCIpOlxuICAgICAgICAgICAgLy8gR2V0IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gMTU0O1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XG4gICAgICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgICAgICAgICAgIHdpZHRoOiA2MTYsXG4gICAgICAgICAgICAgIGhlaWdodDogMTYyLFxuICAgICAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXG4gICAgICAgICAgICAgIG51bWJlck9mRnJhbWVzOiA0LFxuICAgICAgICAgICAgICB0aWNrc1BlckZyYW1lOiA4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL2dvaGFuL2dvaGFuLXB1bmNoLnBuZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZShcInNwZWNpYWxcIik6XG4gICAgICAgICAgICAvLyBHZXQgY2FudmFzXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSAxNDA7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxuICAgICAgICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzcHJpdGVcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcbiAgICAgICAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcbiAgICAgICAgICAgICAgd2lkdGg6IDI4MCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNjIsXG4gICAgICAgICAgICAgIGltYWdlOiBjaGFyYWN0ZXJJbWFnZSxcbiAgICAgICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDIsXG4gICAgICAgICAgICAgIHRpY2tzUGVyRnJhbWU6IDIwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL2dvaGFuL2dvaGFuLW1hZ2ljLnBuZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZShcImRlZmVuZFwiKTpcbiAgICAgICAgICAgIC8vIEdldCBjYW52YXNcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IDEyMDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XG4gICAgICAgICAgICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxuICAgICAgICAgICAgY2hhcmFjdGVyID0gdGhpcy5zcHJpdGUoe1xuICAgICAgICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxuICAgICAgICAgICAgICB3aWR0aDogMjQwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDE2MixcbiAgICAgICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxuICAgICAgICAgICAgICBudW1iZXJPZkZyYW1lczogMixcbiAgICAgICAgICAgICAgdGlja3NQZXJGcmFtZTogMjBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcbiAgICAgICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvZ29oYW4vZ29oYW4tZGVmZW5kLnBuZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVN0YW5jZShwbGF5ZXJDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZURlZmVhdChwbGF5ZXJDbGFzcyl7XG4gICAgLyogU2V0IHVwIGNhbnZhcyB2YXJpYWJsZXMgKi9cbiAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICB2YXIgY2hhcmFjdGVyLGNoYXJhY3RlckltYWdlO1xuICAgIGZ1bmN0aW9uIGdhbWVMb29wKCl7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICAgIGNoYXJhY3Rlci51cGRhdGUoKTtcbiAgICAgIGNoYXJhY3Rlci5yZW5kZXIoKTtcbiAgICB9XG4gICAgc3dpdGNoKHBsYXllckNsYXNzKXtcbiAgICAgIGNhc2UoXCJFbGVtZW50YWxpc3RcIik6XG4gICAgICAgIC8vIEdldCBjYW52YXNcbiAgICAgICAgY2FudmFzLndpZHRoID0gMTYyO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xuICAgICAgICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XG4gICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIENyZWF0ZSBzcHJpdGVcbiAgICAgICAgY2hhcmFjdGVyID0gdGhpcy5zcHJpdGUoe1xuICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgICAgICAgd2lkdGg6IGNhbnZhcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxuICAgICAgICAgIG51bWJlck9mRnJhbWVzOiAxLFxuICAgICAgICAgIHRpY2tzUGVyRnJhbWU6IDEwXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxuICAgICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XG4gICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvcGljY29sby9waWNjb2xvLWRlZmVhdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlKFwiSGlnaHdheW1hblwiKTpcbiAgICAgICAgLy8gR2V0IGNhbnZhc1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNzc7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XG4gICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcbiAgICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxuICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XG4gICAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcbiAgICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcbiAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXG4gICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDEsXG4gICAgICAgICAgdGlja3NQZXJGcmFtZTogMTBcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XG4gICAgICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcbiAgICAgICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMS90cnVua3MvdHJ1bmtzLWRlZmVhdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlKFwiUGFyYWdvblwiKTpcbiAgICAgICAgLy8gR2V0IGNhbnZhc1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjI7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxNjI7XG4gICAgICAgIC8vIENyZWF0ZSBzcHJpdGUgc2hlZXRcbiAgICAgICAgY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZVxuICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLnNwcml0ZSh7XG4gICAgICAgICAgY29udGV4dDogY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcbiAgICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcbiAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXG4gICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDEsXG4gICAgICAgICAgdGlja3NQZXJGcmFtZTogMTBcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIExvYWQgc3ByaXRlIHNoZWV0XG4gICAgICAgIGNoYXJhY3RlckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdhbWVMb29wKTtcbiAgICAgICAgY2hhcmFjdGVySW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3ByaXRlcy9wbGF5ZXItMS9nb2hhbi9nb2hhbi1kZWZlYXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVTdGFuY2UocGxheWVyQ2xhc3Mpe1xuICAgIC8qIFNldCB1cCBjYW52YXMgdmFyaWFibGVzICovXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdmFyIGNoYXJhY3RlcixjaGFyYWN0ZXJJbWFnZTtcbiAgICBmdW5jdGlvbiBnYW1lTG9vcCgpe1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgICBjaGFyYWN0ZXIudXBkYXRlKCk7XG4gICAgICBjaGFyYWN0ZXIucmVuZGVyKCk7XG4gICAgfVxuICAgIHN3aXRjaChwbGF5ZXJDbGFzcyl7XG4gICAgICBjYXNlKFwiRWxlbWVudGFsaXN0XCIpOlxuICAgICAgICAvLyBHZXQgY2FudmFzXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDEyNTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcbiAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxuICAgICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvLyBDcmVhdGUgc3ByaXRlXG4gICAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcbiAgICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxuICAgICAgICAgIHdpZHRoOiAzMzEsXG4gICAgICAgICAgaGVpZ2h0OiAxNjIsXG4gICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxuICAgICAgICAgIG51bWJlck9mRnJhbWVzOiAzLFxuICAgICAgICAgIHRpY2tzUGVyRnJhbWU6IDQsXG4gICAgICAgICAgbG9vcDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcbiAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xuICAgICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL3BpY2NvbG8vcGljY29sby1zdGFuZGluZy5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlKFwiSGlnaHdheW1hblwiKTpcbiAgICAgICAgLy8gR2V0IGNhbnZhc1xuICAgICAgICBjYW52YXMud2lkdGggPSA5OTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDE2MjtcbiAgICAgICAgLy8gQ3JlYXRlIHNwcml0ZSBzaGVldFxuICAgICAgICBjaGFyYWN0ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvLyBDcmVhdGUgc3ByaXRlXG4gICAgICAgIGNoYXJhY3RlciA9IHRoaXMuc3ByaXRlKHtcbiAgICAgICAgICBjb250ZXh0OiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxuICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgaGVpZ2h0OiAxNjIsXG4gICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlckltYWdlLFxuICAgICAgICAgIG51bWJlck9mRnJhbWVzOiAzLFxuICAgICAgICAgIHRpY2tzUGVyRnJhbWU6IDUsXG4gICAgICAgICAgbG9vcDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gTG9hZCBzcHJpdGUgc2hlZXRcbiAgICAgICAgY2hhcmFjdGVySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2FtZUxvb3ApO1xuICAgICAgICBjaGFyYWN0ZXJJbWFnZS5zcmMgPSBcImltYWdlcy9zcHJpdGVzL3BsYXllci0xL3RydW5rcy90cnVua3Mtc3RhbmRpbmcucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZShcIlBhcmFnb25cIik6XG4gICAgICAgIC8vIEdldCBjYW52YXNcbiAgICAgICAgY2FudmFzLndpZHRoID0gMTI1O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTYyO1xuICAgICAgICAvLyBDcmVhdGUgc3ByaXRlIHNoZWV0XG4gICAgICAgIGNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIENyZWF0ZSBzcHJpdGVcbiAgICAgICAgY2hhcmFjdGVyID0gdGhpcy5zcHJpdGUoe1xuICAgICAgICAgIGNvbnRleHQ6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgICAgICAgd2lkdGg6IDM3MyxcbiAgICAgICAgICBoZWlnaHQ6IDE2MixcbiAgICAgICAgICBpbWFnZTogY2hhcmFjdGVySW1hZ2UsXG4gICAgICAgICAgbnVtYmVyT2ZGcmFtZXM6IDQsXG4gICAgICAgICAgdGlja3NQZXJGcmFtZTogNCxcbiAgICAgICAgICBsb29wOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBMb2FkIHNwcml0ZSBzaGVldFxuICAgICAgICBjaGFyYWN0ZXJJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lTG9vcCk7XG4gICAgICAgIGNoYXJhY3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL3Nwcml0ZXMvcGxheWVyLTEvZ29oYW4vZ29oYW4tc3RhbmRpbmcucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNwcml0ZShvcHRpb25zKSB7XG4gICAgICB2YXIgc3ByaXRlT2JqID0ge1xuICAgICAgICBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxuICAgICAgICBpbWFnZTogb3B0aW9ucy5pbWFnZSxcbiAgICAgICAgbG9vcDogb3B0aW9ucy5sb29wLFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7fVxuICAgICAgfSxcbiAgICAgICAgZnJhbWVJbmRleCA9IDAsXG4gICAgICAgIHRpY2tDb3VudCA9IDAsXG4gICAgICAgIHRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMCxcbiAgICAgICAgbnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XG4gICAgICBcbiAgICAgIHNwcml0ZU9iai51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpY2tDb3VudCArPSAxO1xuICAgICAgICBpZiAodGlja0NvdW50ID4gdGlja3NQZXJGcmFtZSkge1xuICAgICAgICAgIHRpY2tDb3VudCA9IDA7XG4gICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZnJhbWUgaW5kZXggaXMgaW4gcmFuZ2VcbiAgICAgICAgICBpZiAoZnJhbWVJbmRleCA8IG51bWJlck9mRnJhbWVzIC0gMSkgeyAgXG4gICAgICAgICAgICAgIC8vIEdvIHRvIHRoZSBuZXh0IGZyYW1lXG4gICAgICAgICAgICAgIGZyYW1lSW5kZXggKz0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNwcml0ZU9iai5sb29wKSB7XG4gICAgICAgICAgICAgIGZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc3ByaXRlT2JqLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGNhbnZhc1xuICAgICAgICBzcHJpdGVPYmouY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc3ByaXRlT2JqLndpZHRoLCBzcHJpdGVPYmouaGVpZ2h0KTtcbiAgICAgICAgLy8gRHJhdyB0aGUgYW5pbWF0aW9uXG4gICAgICAgIHNwcml0ZU9iai5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICBzcHJpdGVPYmouaW1hZ2UsXG4gICAgICAgICAgZnJhbWVJbmRleCAqIHNwcml0ZU9iai53aWR0aCAvIG51bWJlck9mRnJhbWVzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXG4gICAgICAgICAgc3ByaXRlT2JqLmhlaWdodCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgc3ByaXRlT2JqLndpZHRoIC8gbnVtYmVyT2ZGcmFtZXMsXG4gICAgICAgICAgc3ByaXRlT2JqLmhlaWdodCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gc3ByaXRlT2JqO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
