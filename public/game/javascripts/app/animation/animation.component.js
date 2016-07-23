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
var player1sprite_component_1 = require('./sprites/player1sprite.component');
var player2sprite_component_1 = require('./sprites/player2sprite.component');
var AnimationComponent = (function () {
    function AnimationComponent(af) {
        var _this = this;
        this.URL = window.location.href;
        this.onOff = af.database.object('/' + this.URL.split('/game/')[1] + '/Globals/OnOff', { preserveSnapshot: true });
        this.onOff.subscribe(function (snap) {
            if (_this.environmentSnapshot.fog !== snap.val().fog) {
                if (snap.val().fog == true) {
                    _this.turnOn("fog");
                }
                else {
                    _this.turnOff("fog");
                }
            }
            if (_this.environmentSnapshot.lightning !== snap.val().lightning) {
                if (snap.val().lightning == true) {
                    _this.turnOn("lightning");
                }
                else {
                    _this.turnOff("lightning");
                }
            }
            if (_this.environmentSnapshot.quake !== snap.val().quake) {
                if (snap.val().quake == true) {
                    _this.turnOn("quake");
                }
                else {
                    _this.turnOff("quake");
                }
            }
            if (_this.environmentSnapshot.rain !== snap.val().rain) {
                if (snap.val().rain == true) {
                    _this.turnOn("rain");
                }
                else {
                    _this.turnOff("rain");
                }
            }
            if (_this.environmentSnapshot.snow !== snap.val().snow) {
                if (snap.val().snow == true) {
                    _this.turnOn("snow");
                }
                else {
                    _this.turnOff("snow");
                }
            }
            if (_this.environmentSnapshot.storm !== snap.val().storm) {
                if (snap.val().storm == true) {
                    _this.turnOn("storm");
                }
                else {
                    _this.turnOff("storm");
                }
            }
            _this.environmentSnapshot = snap.val();
        });
    }
    AnimationComponent.prototype.ngOnInit = function () {
        this.environmentSnapshot = {
            fog: false,
            lightning: false,
            quake: false,
            rain: false,
            snow: false,
            storm: false
        };
        this.turnOff("fog");
        this.fog();
        this.turnOff("lightning");
        this.lightning();
        this.turnOff("rain");
        this.rain();
        this.turnOff("snow");
        this.snow();
        this.turnOff("storm");
        this.storm();
    };
    AnimationComponent.prototype.turnOn = function (x) {
        switch (x) {
            case ("fog"):
                $("#fogCanvas").show();
                this.fog();
                break;
            case ("lightning"):
                $("#lightningCanvas").show();
                break;
            case ("quake"):
                this.quake();
                break;
            case ("rain"):
                $("#rainCanvas").show();
                break;
            case ("snow"):
                $("#snowCanvas").show();
                break;
            case ("storm"):
                $("#stormCanvas").show();
                break;
        }
    };
    AnimationComponent.prototype.turnOff = function (x) {
        switch (x) {
            case ("fog"):
                $("#fogCanvas").hide();
                break;
            case ("lightning"):
                $("#lightningCanvas").hide();
                break;
            case ("quake"):
                $(".game-container").finish();
                break;
            case ("rain"):
                $("#rainCanvas").hide();
                break;
            case ("snow"):
                $("#snowCanvas").hide();
                break;
            case ("storm"):
                $("#stormCanvas").hide();
                break;
        }
    };
    AnimationComponent.prototype.fog = function () {
        var canvasWidth = 1600;
        var canvasHeight = 200;
        var pCount = 0;
        var pCollection = new Array();
        var puffs = 1;
        var particlesPerPuff = 2000;
        var smokeImage = new Image();
        smokeImage.src = "images/smoke2.png";
        for (var i1 = 0; i1 < puffs; i1++) {
            var puffDelay = i1 * 1500;
            for (var i2 = 0; i2 < particlesPerPuff; i2++) {
                addNewParticle((i2 * 50) + puffDelay);
            }
        }
        draw(new Date().getTime(), 3000);
        function addNewParticle(delay) {
            var p = {
                top: 0,
                left: 0,
                start: 0,
                life: 0,
                speedUp: 0,
                speedRight: 0,
                rot: 0,
                red: 0,
                blue: 0,
                green: 0,
                startOpacity: 0,
                newTop: 0,
                newLeft: 0,
                size: 0,
                growth: 0
            };
            p.top = canvasHeight;
            p.left = randBetween(-200, 800);
            p.start = new Date().getTime() + delay;
            p.life = 8000;
            p.speedUp = 30;
            p.speedRight = randBetween(0, 20);
            p.rot = randBetween(-1, 1);
            p.red = Math.floor(randBetween(0, 255));
            p.blue = Math.floor(randBetween(0, 255));
            p.green = Math.floor(randBetween(0, 255));
            p.startOpacity = .3;
            p.newTop = p.top;
            p.newLeft = p.left;
            p.size = 200;
            p.growth = 10;
            pCollection[pCount] = p;
            pCount++;
        }
        function draw(startT, totalT) {
            var timeDelta = new Date().getTime() - startT;
            var stillAlive = false;
            var c = document.getElementById("fogCanvas");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, c.width, c.height);
            c.width = c.width;
            for (var i = 0; i < pCount; i++) {
                var p = pCollection[i];
                var td = new Date().getTime() - p.start;
                var frac = td / p.life;
                if (td > 0) {
                    if (td <= p.life) {
                        stillAlive = true;
                    }
                    var newTop = p.top - (p.speedUp * (td / 1000));
                    var newLeft = p.left + (p.speedRight * (td / 1000));
                    var newOpacity = Math.max(p.startOpacity * (1 - frac), 0);
                    var newSize = Math.floor(p.size + (p.growth * (td / 1000)));
                    p.newTop = newTop;
                    p.newLeft = newLeft;
                    ctx.fillStyle = 'rgba(150,150,150,' + newOpacity + ')';
                    ctx.globalAlpha = newOpacity;
                    ctx.drawImage(smokeImage, newLeft, newTop, newSize, newSize);
                }
                else {
                    td = new Date().getTime() - p.start;
                }
            }
            if (stillAlive) {
                requestAnimationFrame(function () { draw(startT, totalT); });
            }
        }
        function randBetween(n1, n2) {
            var r = (Math.random() * (n2 - n1)) + n1;
            return r;
        }
        function randOffset(n, variance) {
            var max = 1 + variance;
            var min = 1 - variance;
            var r = Math.random() * (max - min) + min;
            return n * r;
        }
    };
    AnimationComponent.prototype.lightning = function () {
        $("#lightningCanvas").attr("width", "960").attr("height", "720");
        (function () {
            var boltFadeDuration, boltFlashDuration, bolts, canvas, context, flashOpacity, fps, height, lastFrame, launchBolt, recursiveLaunchBolt, scale, setCanvasSize, tick, totalBoltDuration, width;
            canvas = document.getElementById("lightningCanvas");
            context = canvas.getContext("2d");
            width = 0.0;
            height = 0.0;
            scale = 1.0;
            fps = 45.0;
            lastFrame = new Date().getTime();
            flashOpacity = 0.0;
            boltFlashDuration = 0.25;
            boltFadeDuration = 0.5;
            totalBoltDuration = boltFlashDuration + boltFadeDuration;
            bolts = [];
            setCanvasSize = function () {
                var bolt, j, len;
                canvas.setAttribute("width", window.outerWidth);
                canvas.setAttribute("height", window.outerHeight);
                for (j = 0, len = bolts.length; j < len; j++) {
                    bolt = bolts[j];
                    bolt.canvas.width = window.outerWidth;
                    bolt.canvas.height = window.outerHeight;
                }
                width = Math.ceil(window.outerWidth / scale);
                return height = Math.ceil(window.outerHeight / scale);
            };
            launchBolt = function (x, y, length, direction) {
                var boltCanvas, boltContext;
                flashOpacity = 0.15 + Math.random() * 0.2;
                boltCanvas = document.createElement("canvas");
                boltCanvas.width = window.innerWidth;
                boltCanvas.height = window.innerHeight;
                boltContext = boltCanvas.getContext("2d");
                boltContext.scale(scale, scale);
                bolts.push({
                    canvas: boltCanvas,
                    duration: 0.0
                });
                return recursiveLaunchBolt(x, y, length, direction, boltContext);
            };
            recursiveLaunchBolt = function (x, y, length, direction, boltContext) {
                var boltInterval, originalDirection;
                originalDirection = direction;
                return boltInterval = setInterval((function () {
                    var alpha, i, x1, y1;
                    if (length <= 0) {
                        clearInterval(boltInterval);
                        return;
                    }
                    i = 0;
                    while (i++ < Math.floor(45 / scale) && length > 0) {
                        x1 = Math.floor(x);
                        y1 = Math.floor(y);
                        x += Math.cos(direction);
                        y -= Math.sin(direction);
                        length--;
                        if (x1 !== Math.floor(x) || y1 !== Math.floor(y)) {
                            alpha = Math.min(1.0, length / 350.0);
                            boltContext.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
                            boltContext.fillRect(x1, y1, 1.0, 1.0);
                            direction = originalDirection + (-Math.PI / 8.0 + Math.random() * (Math.PI / 4.0));
                            if (Math.random() > 0.98) {
                                recursiveLaunchBolt(x1, y1, length * (0.3 + Math.random() * 0.4), originalDirection + (-Math.PI / 6.0 + Math.random() * (Math.PI / 3.0)), boltContext);
                            }
                            else if (Math.random() > 0.95) {
                                recursiveLaunchBolt(x1, y1, length, originalDirection + (-Math.PI / 6.0 + Math.random() * (Math.PI / 3.0)), boltContext);
                                length = 0;
                            }
                        }
                    }
                    return void 0;
                }), 10);
            };
            tick = function () {
                var bolt, elapsed, frame, i, j, len, length, x, y;
                frame = new Date().getTime();
                elapsed = (frame - lastFrame) / 1000.0;
                lastFrame = frame;
                context.clearRect(0.0, 0.0, window.innerWidth, window.innerHeight);
                if (Math.random() > 0.98) {
                    x = Math.floor(-10.0 + Math.random() * (width + 20.0));
                    y = Math.floor(5.0 + Math.random() * (height / 3.0));
                    length = Math.floor(height / 2.0 + Math.random() * (height / 3.0));
                    launchBolt(x, y, length, Math.PI * 3.0 / 2.0);
                }
                if (flashOpacity > 0.0) {
                    context.fillStyle = "rgba(255, 255, 255, " + flashOpacity + ")";
                    context.fillRect(0.0, 0.0, window.innerWidth, window.innerHeight);
                    flashOpacity = Math.max(0.0, flashOpacity - 2.0 * elapsed);
                }
                for (i = j = 0, len = bolts.length; j < len; i = ++j) {
                    bolt = bolts[i];
                    bolt.duration += elapsed;
                    if (bolt.duration >= totalBoltDuration) {
                        bolts.splice(i, 1);
                        i--;
                        return;
                    }
                    context.globalAlpha = Math.max(0.0, Math.min(1.0, (totalBoltDuration - bolt.duration) / boltFadeDuration));
                    context.drawImage(bolt.canvas, 0.0, 0.0);
                }
                return void 0;
            };
            window.addEventListener("resize", setCanvasSize);
            setCanvasSize();
            setInterval(tick, 1000.0 / fps);
        }).call(this);
    };
    AnimationComponent.prototype.quake = function () {
        $(".game-container").effect("shake", { times: 10 }, 5000);
    };
    AnimationComponent.prototype.rain = function () {
        $("#rainCanvas").attr("width", "800").attr("height", "600");
        window.requestAnimFrame =
            window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        var rain = [], drops = [];
        var gravity = 1;
        var wind = 0;
        var rain_chance = 0.4;
        var canvas = document.getElementById('rainCanvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = canvas.width;
        var Vector = function (x, y) {
            this.x = x || 0;
            this.y = y || 0;
        };
        Vector.prototype.add = function (v) {
            if (v.x != null && v.y != null) {
                this.x += v.x;
                this.y += v.y;
            }
            else {
                this.x += v;
                this.y += v;
            }
            return this;
        };
        Vector.prototype.copy = function () {
            return new Vector(this.x, this.y);
        };
        var Rain = function () {
            this.pos = new Vector(Math.random() * canvas.width, -50);
            this.prev = this.pos;
            this.vel = new Vector();
        };
        Rain.prototype.update = function () {
            this.prev = this.pos.copy();
            this.vel.y += gravity;
            this.vel.x += wind;
            this.pos.add(this.vel);
        };
        Rain.prototype.draw = function () {
            ctx.beginPath();
            ctx.moveTo(this.pos.x, this.pos.y);
            ctx.lineTo(this.prev.x, this.prev.y);
            ctx.stroke();
        };
        var Drop = function (x, y) {
            var dist = Math.random() * 7;
            var angle = Math.PI + Math.random() * Math.PI;
            this.pos = new Vector(x, y);
            this.vel = new Vector(Math.cos(angle) * dist, Math.sin(angle) * dist);
        };
        Drop.prototype.update = function () {
            this.vel.y += gravity;
            this.vel.x *= 0.95;
            this.vel.y *= 0.95;
            this.pos.add(this.vel);
        };
        Drop.prototype.draw = function () {
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, 1, 0, Math.PI * 2);
            ctx.fill();
        };
        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var i = rain.length;
            while (i--) {
                var raindrop = rain[i];
                raindrop.update();
                if (raindrop.pos.y >= canvas.height) {
                    var n = Math.round(4 + Math.random() * 4);
                    while (n--)
                        drops.push(new Drop(raindrop.pos.x, canvas.height));
                    rain.splice(i, 1);
                }
                raindrop.draw();
            }
            var i = drops.length;
            while (i--) {
                var drop = drops[i];
                drop.update();
                drop.draw();
                if (drop.pos.y > canvas.height)
                    drops.splice(i, 1);
            }
            if (Math.random() < rain_chance)
                rain.push(new Rain());
            requestAnimFrame(update);
        }
        function init() {
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(60,135,235,1)';
            ctx.fillStyle = 'rgba(60,135,235,1)';
            update();
        }
        init();
    };
    AnimationComponent.prototype.snow = function () {
        $("#snowCanvas").addClass("snowing");
    };
    AnimationComponent.prototype.storm = function () {
        $("#stormCanvas").attr("width", "800").attr("height", "600");
        (function () {
            var App, Obstacle, Particle, Vector2D, extend = function (child, parent) { for (var key in parent) {
                if (hasProp.call(parent, key))
                    child[key] = parent[key];
            } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty, bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; };
            Vector2D = (function () {
                function Vector2D(x1, y1) {
                    this.x = x1 != null ? x1 : 0;
                    this.y = y1 != null ? y1 : 0;
                }
                Vector2D.prototype.add = function (vector) {
                    return new Vector2D(this.x + vector.x, this.y + vector.y);
                };
                Vector2D.prototype.subtract = function (vector) {
                    return new Vector2D(this.x - vector.x, this.y - vector.y);
                };
                Vector2D.prototype.multiply = function (n) {
                    return new Vector2D(this.x * n, this.y * n);
                };
                Vector2D.prototype.divide = function (n) {
                    return new Vector2D(this.x / n, this.y / n);
                };
                Vector2D.prototype.clone = function () {
                    return new Vector2D(this.x, this.y);
                };
                return Vector2D;
            })();
            Particle = (function (superClass) {
                extend(Particle, superClass);
                function Particle(x, y, weight) {
                    if (x == null) {
                        x = 0;
                    }
                    if (y == null) {
                        y = 0;
                    }
                    this.weight = weight;
                    if (this.weight == null) {
                        this.weight = Math.random() * 20 + 20;
                    }
                    Particle.__super__.constructor.call(this, x, y);
                }
                Particle.prototype.reset = function (x1, y1) {
                    this.x = x1 != null ? x1 : 0;
                    this.y = y1 != null ? y1 : 0;
                };
                Particle.prototype.update = function (velX, velY) {
                    this.x += velX;
                    return this.y += velY;
                };
                return Particle;
            })(Vector2D);
            App = (function () {
                function App() {
                    this.updateParticles = bind(this.updateParticles, this);
                    var i, j, k;
                    this.canvas = document.getElementById("stormCanvas");
                    this.context = this.canvas.getContext("2d");
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.width = this.canvas.width;
                    this.height = this.canvas.height;
                    this.data = this.context.createImageData(this.width, this.height);
                    this.particles = [];
                    this.obstacles = [];
                    this.strength = 300;
                    this.angle = Math.random() * Math.PI * 2;
                    this.wind = new Vector2D(Math.cos(this.angle) * this.strength, Math.sin(this.angle) * this.strength);
                    this.windVariation = 0;
                    for (i = k = 1; k <= 2500; i = ++k) {
                        this.particles.push(new Particle(Math.random() * this.width, Math.random() * this.height));
                    }
                    this.updateParticles();
                }
                App.prototype.changeDirection = function () {
                    this.windVariation += .002;
                    this.wind.x = Math.sin(this.angle * Math.cos(this.windVariation)) * this.strength;
                    return this.wind.y = Math.cos(this.angle * Math.cos(this.windVariation)) * this.strength;
                };
                App.prototype.updateParticles = function () {
                    var j, k, len1, len2, obstacle, p, ref, ref1, v;
                    ref = this.particles;
                    for (j = 0, len1 = ref.length; j < len1; j++) {
                        p = ref[j];
                        v = this.wind.clone();
                        ref1 = this.obstacles;
                        for (k = 0, len2 = ref1.length; k < len2; k++) {
                            obstacle = ref1[k];
                            v = v.add(obstacle.avoid(p));
                        }
                        v = v.divide(p.weight);
                        p.update(v.x, v.y);
                        if (p.x < 0) {
                            p.reset(this.width, Math.random() * this.height);
                        }
                        else if (p.x > this.width) {
                            p.reset(0, Math.random() * this.height);
                        }
                        else if (p.y < 0) {
                            p.reset(Math.random() * this.width, this.height);
                        }
                        else if (p.y > this.height) {
                            p.reset(Math.random() * this.width, 0);
                        }
                    }
                    this.changeDirection();
                    this.drawParticles();
                    return requestAnimationFrame(this.updateParticles);
                };
                App.prototype.drawParticles = function () {
                    var i, j, len, len1, p, ref;
                    ref = this.particles;
                    for (j = 0, len1 = ref.length; j < len1; j++) {
                        p = ref[j];
                        this.setPixel(this.data, p.x, p.y, 235, 202, 47, 255);
                    }
                    len = this.data.data.length;
                    i = 3;
                    while (i < len) {
                        this.data.data[i] -= 50;
                        i += 4;
                    }
                    return this.context.putImageData(this.data, 0, 0);
                };
                App.prototype.setPixel = function (imageData, x, y, r, g, b, a) {
                    var index;
                    if (x < 0 || x > this.width || y < 0 || y > this.height) {
                        return;
                    }
                    x = Math.round(x);
                    y = Math.round(y);
                    index = (x + y * imageData.width) * 4;
                    imageData.data[index + 0] = r;
                    imageData.data[index + 1] = g;
                    imageData.data[index + 2] = b;
                    imageData.data[index + 3] = a;
                    index = ((x + 1) + (y + 1) * imageData.width) * 4;
                    imageData.data[index + 0] = r;
                    imageData.data[index + 1] = g;
                    imageData.data[index + 2] = b;
                    imageData.data[index + 3] = a;
                    index = ((x - 1) + (y - 1) * imageData.width) * 4;
                    imageData.data[index + 0] = r;
                    imageData.data[index + 1] = g;
                    imageData.data[index + 2] = b;
                    imageData.data[index + 3] = a;
                    index = ((x + 1) + (y - 1) * imageData.width) * 4;
                    imageData.data[index + 0] = r;
                    imageData.data[index + 1] = g;
                    imageData.data[index + 2] = b;
                    imageData.data[index + 3] = a;
                    index = ((x - 1) + (y + 1) * imageData.width) * 4;
                    imageData.data[index + 0] = r;
                    imageData.data[index + 1] = g;
                    imageData.data[index + 2] = b;
                    return imageData.data[index + 3] = a;
                };
                return App;
            })();
            $(function () {
                return new App();
            });
        }).call(this);
    };
    AnimationComponent = __decorate([
        core_1.Component({
            selector: 'animation',
            template: "\n  <div class=\"weather-zone\" id=\"weather\">\n    <canvas class=\"canvas\" id=\"fogCanvas\"></canvas>\n    <canvas class=\"canvas\" id=\"lightningCanvas\"></canvas>\n    <canvas class=\"canvas\" id=\"rainCanvas\"></canvas>\n    <canvas class=\"canvas\" id=\"snowCanvas\"></canvas>\n    <canvas class=\"canvas\" id=\"stormCanvas\"></canvas>\n  </div>\n  <div class=\"sprites-container\">\n    <div class=\"player1\">\n      <player1sprite></player1sprite>\n    </div>\n    <div class=\"player2\">\n      <player2sprite></player2sprite>\n    </div>\n  </div>\n  ",
            styles: ["\n    .canvas {\n      min-height:100%;\n      min-width:100%;\n      position:absolute;\n      bottom:112px;\n    }\n    #fogCanvas{\n      opacity: 1;\n      z-index: -3;\n    }\n    #lightningCanvas {\n      overflow: hidden;\n      position: absolute;\n      z-index: -3;\n    }\n    #rainCanvas {\n      z-index: -3;\n    }\n    #stormCanvas {\n      z-index: -3;\n    }\n\n  "],
            directives: [player1sprite_component_1.Player1SpriteComponent, player2sprite_component_1.Player2SpriteComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], AnimationComponent);
    return AnimationComponent;
}());
exports.AnimationComponent = AnimationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLHdDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pFLHdDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBZ0R6RTtJQVlFLDRCQUFhLEVBQWM7UUFaN0IsaUJBcXRCQztRQXhzQkcsSUFBSSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxnQkFBZ0IsRUFBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBRXZCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ2xELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdB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Q0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsRCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xELFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDO2dCQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFYixDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsQ0FBQyxDQUFDO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFqd0JIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBQyxXQUFXO1lBQ3BCLFFBQVEsRUFBQyxxakJBZ0JSO1lBQ0QsTUFBTSxFQUFDLENBQUMsK1hBdUJQLENBQUM7WUFDRixVQUFVLEVBQUMsQ0FBQyxnREFBc0IsRUFBQyxnREFBc0IsQ0FBQztTQUMzRCxDQUFDOzswQkFBQTtJQXV0QkYseUJBQUM7QUFBRCxDQXJ0QkEsQUFxdEJDLElBQUE7QUFydEJZLDBCQUFrQixxQkFxdEI5QixDQUFBIiwiZmlsZSI6ImFuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmd1bGFyRmlyZSxGaXJlYmFzZU9iamVjdE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XHJcblxyXG5pbXBvcnQge1BsYXllcjFTcHJpdGVDb21wb25lbnR9IGZyb20gJy4vc3ByaXRlcy9wbGF5ZXIxc3ByaXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGxheWVyMlNwcml0ZUNvbXBvbmVudH0gZnJvbSAnLi9zcHJpdGVzL3BsYXllcjJzcHJpdGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOidhbmltYXRpb24nLFxyXG4gIHRlbXBsYXRlOmBcclxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci16b25lXCIgaWQ9XCJ3ZWF0aGVyXCI+XHJcbiAgICA8Y2FudmFzIGNsYXNzPVwiY2FudmFzXCIgaWQ9XCJmb2dDYW52YXNcIj48L2NhbnZhcz5cclxuICAgIDxjYW52YXMgY2xhc3M9XCJjYW52YXNcIiBpZD1cImxpZ2h0bmluZ0NhbnZhc1wiPjwvY2FudmFzPlxyXG4gICAgPGNhbnZhcyBjbGFzcz1cImNhbnZhc1wiIGlkPVwicmFpbkNhbnZhc1wiPjwvY2FudmFzPlxyXG4gICAgPGNhbnZhcyBjbGFzcz1cImNhbnZhc1wiIGlkPVwic25vd0NhbnZhc1wiPjwvY2FudmFzPlxyXG4gICAgPGNhbnZhcyBjbGFzcz1cImNhbnZhc1wiIGlkPVwic3Rvcm1DYW52YXNcIj48L2NhbnZhcz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic3ByaXRlcy1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXIxXCI+XHJcbiAgICAgIDxwbGF5ZXIxc3ByaXRlPjwvcGxheWVyMXNwcml0ZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBsYXllcjJcIj5cclxuICAgICAgPHBsYXllcjJzcHJpdGU+PC9wbGF5ZXIyc3ByaXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6W2BcclxuICAgIC5jYW52YXMge1xyXG4gICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOjExMnB4O1xyXG4gICAgfVxyXG4gICAgI2ZvZ0NhbnZhc3tcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgei1pbmRleDogLTM7XHJcbiAgICB9XHJcbiAgICAjbGlnaHRuaW5nQ2FudmFzIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAtMztcclxuICAgIH1cclxuICAgICNyYWluQ2FudmFzIHtcclxuICAgICAgei1pbmRleDogLTM7XHJcbiAgICB9XHJcbiAgICAjc3Rvcm1DYW52YXMge1xyXG4gICAgICB6LWluZGV4OiAtMztcclxuICAgIH1cclxuXHJcbiAgYF0sXHJcbiAgZGlyZWN0aXZlczpbUGxheWVyMVNwcml0ZUNvbXBvbmVudCxQbGF5ZXIyU3ByaXRlQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgb25PZmY6RmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47XHJcbiAgVVJMOnN0cmluZztcclxuICBlbnZpcm9ubWVudFNuYXBzaG90OiB7XHJcbiAgICBmb2c6Ym9vbGVhbixcclxuICAgIGxpZ2h0bmluZzpib29sZWFuLFxyXG4gICAgcXVha2U6Ym9vbGVhbixcclxuICAgIHJhaW46Ym9vbGVhbixcclxuICAgIHNub3c6Ym9vbGVhbixcclxuICAgIHN0b3JtOmJvb2xlYW5cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvciAoYWY6QW5ndWxhckZpcmUpIHtcclxuICAgIHRoaXMuVVJMPXdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdGhpcy5vbk9mZiA9IGFmLmRhdGFiYXNlLm9iamVjdCgnLycrdGhpcy5VUkwuc3BsaXQoJy9nYW1lLycpWzFdKycvR2xvYmFscy9Pbk9mZicse3ByZXNlcnZlU25hcHNob3Q6dHJ1ZX0pO1xyXG4gICAgdGhpcy5vbk9mZi5zdWJzY3JpYmUoc25hcCA9PntcclxuXHJcbiAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnRTbmFwc2hvdC5mb2cgIT09IHNuYXAudmFsKCkuZm9nKXtcclxuICAgICAgICBpZihzbmFwLnZhbCgpLmZvZz09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLnR1cm5PbihcImZvZ1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50dXJuT2ZmKFwiZm9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmVudmlyb25tZW50U25hcHNob3QubGlnaHRuaW5nICE9PSBzbmFwLnZhbCgpLmxpZ2h0bmluZyl7XHJcbiAgICAgICAgaWYoc25hcC52YWwoKS5saWdodG5pbmc9PXRydWUpe1xyXG4gICAgICAgICAgdGhpcy50dXJuT24oXCJsaWdodG5pbmdcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHVybk9mZihcImxpZ2h0bmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5lbnZpcm9ubWVudFNuYXBzaG90LnF1YWtlICE9PSBzbmFwLnZhbCgpLnF1YWtlKXtcclxuICAgICAgICBpZihzbmFwLnZhbCgpLnF1YWtlPT10cnVlKXtcclxuICAgICAgICAgIHRoaXMudHVybk9uKFwicXVha2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHVybk9mZihcInF1YWtlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmVudmlyb25tZW50U25hcHNob3QucmFpbiAhPT0gc25hcC52YWwoKS5yYWluKXtcclxuICAgICAgICBpZihzbmFwLnZhbCgpLnJhaW49PXRydWUpe1xyXG4gICAgICAgICAgdGhpcy50dXJuT24oXCJyYWluXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnR1cm5PZmYoXCJyYWluXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmVudmlyb25tZW50U25hcHNob3Quc25vdyAhPT0gc25hcC52YWwoKS5zbm93KXtcclxuICAgICAgICBpZihzbmFwLnZhbCgpLnNub3c9PXRydWUpe1xyXG4gICAgICAgICAgdGhpcy50dXJuT24oXCJzbm93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnR1cm5PZmYoXCJzbm93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmVudmlyb25tZW50U25hcHNob3Quc3Rvcm0gIT09IHNuYXAudmFsKCkuc3Rvcm0pe1xyXG4gICAgICAgIGlmKHNuYXAudmFsKCkuc3Rvcm09PXRydWUpe1xyXG4gICAgICAgICAgdGhpcy50dXJuT24oXCJzdG9ybVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50dXJuT2ZmKFwic3Rvcm1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8qIFVwZGF0ZXMgdG8gbmV3IHZhbHVlcyAqL1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50U25hcHNob3QgPSBzbmFwLnZhbCgpO1xyXG4gICAgfSlcclxuICB9XHJcbiBcclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5lbnZpcm9ubWVudFNuYXBzaG90ID0ge1xyXG4gICAgICBmb2c6ZmFsc2UsXHJcbiAgICAgIGxpZ2h0bmluZzpmYWxzZSxcclxuICAgICAgcXVha2U6ZmFsc2UsXHJcbiAgICAgIHJhaW46ZmFsc2UsXHJcbiAgICAgIHNub3c6ZmFsc2UsXHJcbiAgICAgIHN0b3JtOmZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIC8qIEZvZ2dpbmcgKi9cclxuICAgIHRoaXMudHVybk9mZihcImZvZ1wiKTtcclxuICAgIHRoaXMuZm9nKCk7XHJcblxyXG4gICAgLyogTGlnaHRuaW5nICovXHJcbiAgICB0aGlzLnR1cm5PZmYoXCJsaWdodG5pbmdcIik7XHJcbiAgICB0aGlzLmxpZ2h0bmluZygpO1xyXG5cclxuICAgIC8qIFJhaW5pbmcgKi9cclxuICAgIHRoaXMudHVybk9mZihcInJhaW5cIik7XHJcbiAgICB0aGlzLnJhaW4oKTtcclxuXHJcbiAgICAvKiBTbm93aW5nICovXHJcbiAgICB0aGlzLnR1cm5PZmYoXCJzbm93XCIpO1xyXG4gICAgdGhpcy5zbm93KCk7XHJcblxyXG4gICAgLyogU3Rvcm1pbmcgKi9cclxuICAgIHRoaXMudHVybk9mZihcInN0b3JtXCIpO1xyXG4gICAgdGhpcy5zdG9ybSgpO1xyXG4gIH1cclxuXHJcbiAgdHVybk9uKHgpe1xyXG4gICAgc3dpdGNoKHgpe1xyXG4gICAgICBjYXNlKFwiZm9nXCIpOlxyXG4gICAgICAgICQoXCIjZm9nQ2FudmFzXCIpLnNob3coKTtcclxuICAgICAgICB0aGlzLmZvZygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlKFwibGlnaHRuaW5nXCIpOlxyXG4gICAgICAgICQoXCIjbGlnaHRuaW5nQ2FudmFzXCIpLnNob3coKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInF1YWtlXCIpOlxyXG4gICAgICAgIHRoaXMucXVha2UoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInJhaW5cIik6XHJcbiAgICAgICAgJChcIiNyYWluQ2FudmFzXCIpLnNob3coKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInNub3dcIik6XHJcbiAgICAgICAgJChcIiNzbm93Q2FudmFzXCIpLnNob3coKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInN0b3JtXCIpOlxyXG4gICAgICAgICQoXCIjc3Rvcm1DYW52YXNcIikuc2hvdygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHVybk9mZih4KXtcclxuICAgIHN3aXRjaCh4KXtcclxuICAgICAgY2FzZShcImZvZ1wiKTpcclxuICAgICAgICAkKFwiI2ZvZ0NhbnZhc1wiKS5oaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UoXCJsaWdodG5pbmdcIik6XHJcbiAgICAgICAgJChcIiNsaWdodG5pbmdDYW52YXNcIikuaGlkZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlKFwicXVha2VcIik6XHJcbiAgICAgICAgJChcIi5nYW1lLWNvbnRhaW5lclwiKS5maW5pc2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInJhaW5cIik6XHJcbiAgICAgICAgJChcIiNyYWluQ2FudmFzXCIpLmhpZGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInNub3dcIik6XHJcbiAgICAgICAgJChcIiNzbm93Q2FudmFzXCIpLmhpZGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInN0b3JtXCIpOlxyXG4gICAgICAgICQoXCIjc3Rvcm1DYW52YXNcIikuaGlkZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9nKCl7XHJcblxyXG4gICAgdmFyIGNhbnZhc1dpZHRoID0gMTYwMDtcclxuICAgIHZhciBjYW52YXNIZWlnaHQgPSAyMDA7XHJcbiAgICB2YXIgcENvdW50ID0gMDtcclxuICAgIHZhciBwQ29sbGVjdGlvbiA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIHB1ZmZzID0gMTtcclxuICAgIHZhciBwYXJ0aWNsZXNQZXJQdWZmID0gMjAwMDtcclxuICAgIHZhciBzbW9rZUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBzbW9rZUltYWdlLnNyYyA9IFwiaW1hZ2VzL3Ntb2tlMi5wbmdcIjtcclxuXHJcbiAgICBmb3IgKHZhciBpMSA9IDA7IGkxIDwgcHVmZnM7IGkxKyspIHtcclxuICAgICAgdmFyIHB1ZmZEZWxheSA9IGkxICogMTUwMDsgLy8zMDAgbXMgYmV0d2VlbiBwdWZmc1xyXG4gICAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgcGFydGljbGVzUGVyUHVmZjsgaTIrKykge1xyXG4gICAgICAgIGFkZE5ld1BhcnRpY2xlKChpMiAqIDUwKSArIHB1ZmZEZWxheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYXcobmV3IERhdGUoKS5nZXRUaW1lKCksIDMwMDApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE5ld1BhcnRpY2xlKGRlbGF5KSB7XHJcblxyXG4gICAgICB2YXIgcCA9IHtcclxuICAgICAgICB0b3A6MCxcclxuICAgICAgICBsZWZ0OjAsXHJcbiAgICAgICAgc3RhcnQ6MCxcclxuICAgICAgICBsaWZlOjAsXHJcbiAgICAgICAgc3BlZWRVcDowLFxyXG4gICAgICAgIHNwZWVkUmlnaHQ6MCxcclxuICAgICAgICByb3Q6MCxcclxuICAgICAgICByZWQ6MCxcclxuICAgICAgICBibHVlOjAsXHJcbiAgICAgICAgZ3JlZW46MCxcclxuICAgICAgICBzdGFydE9wYWNpdHk6MCxcclxuICAgICAgICBuZXdUb3A6MCxcclxuICAgICAgICBuZXdMZWZ0OjAsXHJcbiAgICAgICAgc2l6ZTowLFxyXG4gICAgICAgIGdyb3d0aDowXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBwLnRvcCA9IGNhbnZhc0hlaWdodDtcclxuICAgICAgcC5sZWZ0ID0gcmFuZEJldHdlZW4oLTIwMCw4MDApO1xyXG5cclxuICAgICAgcC5zdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgZGVsYXk7XHJcbiAgICAgIHAubGlmZSA9IDgwMDA7XHJcbiAgICAgIHAuc3BlZWRVcCA9IDMwO1xyXG4gICAgICBwLnNwZWVkUmlnaHQgPSByYW5kQmV0d2VlbigwLDIwKTtcclxuXHJcbiAgICAgIHAucm90ID0gcmFuZEJldHdlZW4oLTEsMSk7XHJcbiAgICAgIHAucmVkID0gTWF0aC5mbG9vcihyYW5kQmV0d2VlbigwLDI1NSkpO1xyXG4gICAgICBwLmJsdWUgPSBNYXRoLmZsb29yKHJhbmRCZXR3ZWVuKDAsMjU1KSk7XHJcbiAgICAgIHAuZ3JlZW4gPSBNYXRoLmZsb29yKHJhbmRCZXR3ZWVuKDAsMjU1KSk7XHJcblxyXG4gICAgICBwLnN0YXJ0T3BhY2l0eSA9IC4zXHJcbiAgICAgIHAubmV3VG9wID0gcC50b3A7XHJcbiAgICAgIHAubmV3TGVmdCA9IHAubGVmdDtcclxuICAgICAgcC5zaXplID0gMjAwO1xyXG4gICAgICBwLmdyb3d0aCA9IDEwO1xyXG5cclxuICAgICAgcENvbGxlY3Rpb25bcENvdW50XSA9IHA7XHJcbiAgICAgIHBDb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXcoc3RhcnRULCB0b3RhbFQpIHtcclxuICAgICAgLy8gVGltaW5nXHJcbiAgICAgIHZhciB0aW1lRGVsdGEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VDtcclxuICAgICAgdmFyIHN0aWxsQWxpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgIC8vIEdyYWIgYW5kIGNsZWFyIHRoZSBjYW52YXNcclxuICAgICAgdmFyIGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvZ0NhbnZhc1wiKTtcclxuICAgICAgdmFyIGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KTtcclxuICAgICAgYy53aWR0aCA9IGMud2lkdGg7XHJcblxyXG4gICAgICAvLyBMb29wIHRocm91Z2ggcGFydGljbGVzXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcENvdW50OyBpKyspIHtcclxuICAgICAgICAvL0dyYWIgdGhlIHBhcnRpY2xlXHJcbiAgICAgICAgdmFyIHAgPSBwQ29sbGVjdGlvbltpXTtcclxuXHJcbiAgICAgICAgLy8gVGltaW5nXHJcbiAgICAgICAgdmFyIHRkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwLnN0YXJ0O1xyXG4gICAgICAgIHZhciBmcmFjID0gdGQgLyBwLmxpZmU7XHJcblxyXG4gICAgICAgIGlmICh0ZCA+IDApIHtcclxuICAgICAgICAgIGlmICh0ZCA8PSBwLmxpZmUpIHtcclxuICAgICAgICAgICAgc3RpbGxBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gQXR0cmlidXRlcyB0aGF0IGNoYW5nZSBvdmVyIHRpbWVcclxuICAgICAgICAgIHZhciBuZXdUb3AgPSBwLnRvcCAtIChwLnNwZWVkVXAgKiAodGQgLyAxMDAwKSk7XHJcbiAgICAgICAgICB2YXIgbmV3TGVmdCA9IHAubGVmdCArIChwLnNwZWVkUmlnaHQgKiAodGQgLyAxMDAwKSk7XHJcbiAgICAgICAgICB2YXIgbmV3T3BhY2l0eSA9IE1hdGgubWF4KHAuc3RhcnRPcGFjaXR5ICogKDEgLSBmcmFjKSwgMCk7XHJcblxyXG4gICAgICAgICAgdmFyIG5ld1NpemUgPSBNYXRoLmZsb29yKHAuc2l6ZSArIChwLmdyb3d0aCAqICh0ZCAvIDEwMDApKSk7XHJcbiAgICAgICAgICBwLm5ld1RvcCA9IG5ld1RvcDtcclxuICAgICAgICAgIHAubmV3TGVmdCA9IG5ld0xlZnQ7XHJcblxyXG4gICAgICAgICAgLy8gRHJhdyFcclxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxNTAsMTUwLDE1MCwnICsgbmV3T3BhY2l0eSArICcpJztcclxuICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IG5ld09wYWNpdHk7XHJcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHNtb2tlSW1hZ2UsIG5ld0xlZnQsIG5ld1RvcCwgbmV3U2l6ZSwgbmV3U2l6ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwLnN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVwZWF0IGlmIHRoZXJlJ3Mgc3RpbGwgYSBsaXZpbmcgcGFydGljbGVcclxuICAgICAgaWYgKHN0aWxsQWxpdmUpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtkcmF3KHN0YXJ0VCx0b3RhbFQpO30pOyBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJhbmRCZXR3ZWVuKG4xLCBuMikge1xyXG4gICAgICB2YXIgciA9IChNYXRoLnJhbmRvbSgpICogKG4yIC0gbjEpKSArIG4xO1xyXG4gICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByYW5kT2Zmc2V0KG4sIHZhcmlhbmNlKSB7XHJcbiAgICAgIC8vZS5nLiB2YXJpYW5jZSBjb3VsZCBiZSAwLjEgdG8gZ28gYmV0d2VlbiAwLjkgYW5kIDEuMVxyXG4gICAgICB2YXIgbWF4ID0gMSArIHZhcmlhbmNlO1xyXG4gICAgICB2YXIgbWluID0gMSAtIHZhcmlhbmNlO1xyXG4gICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgICAgcmV0dXJuIG4gKiByO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGlnaHRuaW5nKCl7XHJcbiAgICAkKFwiI2xpZ2h0bmluZ0NhbnZhc1wiKS5hdHRyKFwid2lkdGhcIiwgXCI5NjBcIikuYXR0cihcImhlaWdodFwiLCBcIjcyMFwiKTtcclxuXHJcbiAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIGJvbHRGYWRlRHVyYXRpb24sIGJvbHRGbGFzaER1cmF0aW9uLCBib2x0cywgY2FudmFzLCBjb250ZXh0LCBmbGFzaE9wYWNpdHksIGZwcywgaGVpZ2h0LCBsYXN0RnJhbWUsIGxhdW5jaEJvbHQsIHJlY3Vyc2l2ZUxhdW5jaEJvbHQsIHNjYWxlLCBzZXRDYW52YXNTaXplLCB0aWNrLCB0b3RhbEJvbHREdXJhdGlvbiwgd2lkdGg7XHJcblxyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpZ2h0bmluZ0NhbnZhc1wiKTtcclxuICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgIHdpZHRoID0gMC4wO1xyXG4gICAgICBoZWlnaHQgPSAwLjA7XHJcbiAgICAgIHNjYWxlID0gMS4wO1xyXG4gICAgICBmcHMgPSA0NS4wO1xyXG4gICAgICBsYXN0RnJhbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgZmxhc2hPcGFjaXR5ID0gMC4wO1xyXG4gICAgICBib2x0Rmxhc2hEdXJhdGlvbiA9IDAuMjU7XHJcbiAgICAgIGJvbHRGYWRlRHVyYXRpb24gPSAwLjU7XHJcbiAgICAgIHRvdGFsQm9sdER1cmF0aW9uID0gYm9sdEZsYXNoRHVyYXRpb24gKyBib2x0RmFkZUR1cmF0aW9uO1xyXG4gICAgICBib2x0cyA9IFtdO1xyXG5cclxuICAgICAgc2V0Q2FudmFzU2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBib2x0LCBqLCBsZW47XHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpbmRvdy5vdXRlcldpZHRoKTtcclxuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHdpbmRvdy5vdXRlckhlaWdodCk7XHJcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gYm9sdHMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcclxuICAgICAgICAgIGJvbHQgPSBib2x0c1tqXTtcclxuICAgICAgICAgIGJvbHQuY2FudmFzLndpZHRoID0gd2luZG93Lm91dGVyV2lkdGg7XHJcbiAgICAgICAgICBib2x0LmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cub3V0ZXJIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpZHRoID0gTWF0aC5jZWlsKHdpbmRvdy5vdXRlcldpZHRoIC8gc2NhbGUpO1xyXG4gICAgICAgIHJldHVybiBoZWlnaHQgPSBNYXRoLmNlaWwod2luZG93Lm91dGVySGVpZ2h0IC8gc2NhbGUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGF1bmNoQm9sdCA9IGZ1bmN0aW9uKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIGJvbHRDYW52YXMsIGJvbHRDb250ZXh0O1xyXG4gICAgICAgIGZsYXNoT3BhY2l0eSA9IDAuMTUgKyBNYXRoLnJhbmRvbSgpICogMC4yO1xyXG4gICAgICAgIGJvbHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGJvbHRDYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBib2x0Q2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICBib2x0Q29udGV4dCA9IGJvbHRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGJvbHRDb250ZXh0LnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgYm9sdHMucHVzaCh7XHJcbiAgICAgICAgICBjYW52YXM6IGJvbHRDYW52YXMsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMC4wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUxhdW5jaEJvbHQoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24sIGJvbHRDb250ZXh0KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJlY3Vyc2l2ZUxhdW5jaEJvbHQgPSBmdW5jdGlvbih4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbiwgYm9sdENvbnRleHQpIHtcclxuICAgICAgICB2YXIgYm9sdEludGVydmFsLCBvcmlnaW5hbERpcmVjdGlvbjtcclxuICAgICAgICBvcmlnaW5hbERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICByZXR1cm4gYm9sdEludGVydmFsID0gc2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIGFscGhhLCBpLCB4MSwgeTE7XHJcbiAgICAgICAgICBpZiAobGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChib2x0SW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgIHdoaWxlIChpKysgPCBNYXRoLmZsb29yKDQ1IC8gc2NhbGUpICYmIGxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgeDEgPSBNYXRoLmZsb29yKHgpO1xyXG4gICAgICAgICAgICB5MSA9IE1hdGguZmxvb3IoeSk7XHJcbiAgICAgICAgICAgIHggKz0gTWF0aC5jb3MoZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgeSAtPSBNYXRoLnNpbihkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBsZW5ndGgtLTtcclxuICAgICAgICAgICAgaWYgKHgxICE9PSBNYXRoLmZsb29yKHgpIHx8IHkxICE9PSBNYXRoLmZsb29yKHkpKSB7XHJcbiAgICAgICAgICAgICAgYWxwaGEgPSBNYXRoLm1pbigxLjAsIGxlbmd0aCAvIDM1MC4wKTtcclxuICAgICAgICAgICAgICBib2x0Q29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgXCIgKyBhbHBoYSArIFwiKVwiO1xyXG4gICAgICAgICAgICAgIGJvbHRDb250ZXh0LmZpbGxSZWN0KHgxLCB5MSwgMS4wLCAxLjApO1xyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbiA9IG9yaWdpbmFsRGlyZWN0aW9uICsgKC1NYXRoLlBJIC8gOC4wICsgTWF0aC5yYW5kb20oKSAqIChNYXRoLlBJIC8gNC4wKSk7XHJcbiAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjk4KSB7XHJcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVMYXVuY2hCb2x0KHgxLCB5MSwgbGVuZ3RoICogKDAuMyArIE1hdGgucmFuZG9tKCkgKiAwLjQpLCBvcmlnaW5hbERpcmVjdGlvbiArICgtTWF0aC5QSSAvIDYuMCArIE1hdGgucmFuZG9tKCkgKiAoTWF0aC5QSSAvIDMuMCkpLCBib2x0Q29udGV4dCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLnJhbmRvbSgpID4gMC45NSkge1xyXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlTGF1bmNoQm9sdCh4MSwgeTEsIGxlbmd0aCwgb3JpZ2luYWxEaXJlY3Rpb24gKyAoLU1hdGguUEkgLyA2LjAgKyBNYXRoLnJhbmRvbSgpICogKE1hdGguUEkgLyAzLjApKSwgYm9sdENvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICAgICAgfSksIDEwKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYm9sdCwgZWxhcHNlZCwgZnJhbWUsIGksIGosIGxlbiwgbGVuZ3RoLCB4LCB5O1xyXG4gICAgICAgIGZyYW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgZWxhcHNlZCA9IChmcmFtZSAtIGxhc3RGcmFtZSkgLyAxMDAwLjA7XHJcbiAgICAgICAgbGFzdEZyYW1lID0gZnJhbWU7XHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMC4wLCAwLjAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC45OCkge1xyXG4gICAgICAgICAgeCA9IE1hdGguZmxvb3IoLTEwLjAgKyBNYXRoLnJhbmRvbSgpICogKHdpZHRoICsgMjAuMCkpO1xyXG4gICAgICAgICAgeSA9IE1hdGguZmxvb3IoNS4wICsgTWF0aC5yYW5kb20oKSAqIChoZWlnaHQgLyAzLjApKTtcclxuICAgICAgICAgIGxlbmd0aCA9IE1hdGguZmxvb3IoaGVpZ2h0IC8gMi4wICsgTWF0aC5yYW5kb20oKSAqIChoZWlnaHQgLyAzLjApKTtcclxuICAgICAgICAgIGxhdW5jaEJvbHQoeCwgeSwgbGVuZ3RoLCBNYXRoLlBJICogMy4wIC8gMi4wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZsYXNoT3BhY2l0eSA+IDAuMCkge1xyXG4gICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgXCIgKyBmbGFzaE9wYWNpdHkgKyBcIilcIjtcclxuICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMC4wLCAwLjAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgICAgZmxhc2hPcGFjaXR5ID0gTWF0aC5tYXgoMC4wLCBmbGFzaE9wYWNpdHkgLSAyLjAgKiBlbGFwc2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IGJvbHRzLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xyXG4gICAgICAgICAgYm9sdCA9IGJvbHRzW2ldO1xyXG4gICAgICAgICAgYm9sdC5kdXJhdGlvbiArPSBlbGFwc2VkO1xyXG4gICAgICAgICAgaWYgKGJvbHQuZHVyYXRpb24gPj0gdG90YWxCb2x0RHVyYXRpb24pIHtcclxuICAgICAgICAgICAgYm9sdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBNYXRoLm1heCgwLjAsIE1hdGgubWluKDEuMCwgKHRvdGFsQm9sdER1cmF0aW9uIC0gYm9sdC5kdXJhdGlvbikgLyBib2x0RmFkZUR1cmF0aW9uKSk7XHJcbiAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShib2x0LmNhbnZhcywgMC4wLCAwLjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdm9pZCAwO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgc2V0Q2FudmFzU2l6ZSk7XHJcbiAgICAgIHNldENhbnZhc1NpemUoKTtcclxuICAgICAgc2V0SW50ZXJ2YWwodGljaywgMTAwMC4wIC8gZnBzKTtcclxuICAgIH0pLmNhbGwodGhpcyk7XHJcbiAgfVxyXG5cclxuICBxdWFrZSgpe1xyXG4gICAgJChcIi5nYW1lLWNvbnRhaW5lclwiKS5lZmZlY3QoXCJzaGFrZVwiLHt0aW1lczoxMH0sNTAwMCk7XHJcbiAgfVxyXG5cclxuICByYWluKCl7XHJcbiAgICAkKFwiI3JhaW5DYW52YXNcIikuYXR0cihcIndpZHRoXCIsIFwiODAwXCIpLmF0dHIoXCJoZWlnaHRcIiwgXCI2MDBcIik7XHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPVxyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcclxuICAgICAgfTtcclxuXHJcbiAgICB2YXIgcmFpbiA9IFtdLFxyXG4gICAgZHJvcHMgPSBbXTtcclxuXHJcbiAgICB2YXIgZ3Jhdml0eSA9IDE7XHJcbiAgICB2YXIgd2luZCA9IDA7XHJcbiAgICB2YXIgcmFpbl9jaGFuY2UgPSAwLjQ7XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluQ2FudmFzJyk7XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XHJcblxyXG4gICAgdmFyIFZlY3RvciA9IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICB9O1xyXG5cclxuICAgIFZlY3Rvci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24odikge1xyXG5cclxuICAgICAgaWYgKHYueCAhPSBudWxsICYmIHYueSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHYueDtcclxuICAgICAgICB0aGlzLnkgKz0gdi55O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMueCArPSB2O1xyXG4gICAgICAgIHRoaXMueSArPSB2O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgVmVjdG9yLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFJhaW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgsIC01MCk7XHJcbiAgICAgIHRoaXMucHJldiA9IHRoaXMucG9zO1xyXG4gICAgICB0aGlzLnZlbCA9IG5ldyBWZWN0b3IoKTtcclxuICAgIH07XHJcblxyXG4gICAgUmFpbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMucHJldiA9IHRoaXMucG9zLmNvcHkoKTtcclxuICAgICAgdGhpcy52ZWwueSArPSBncmF2aXR5O1xyXG4gICAgICB0aGlzLnZlbC54ICs9IHdpbmQ7XHJcbiAgICAgIHRoaXMucG9zLmFkZCh0aGlzLnZlbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIFJhaW4ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKHRoaXMucG9zLngsIHRoaXMucG9zLnkpO1xyXG4gICAgICBjdHgubGluZVRvKHRoaXMucHJldi54LCB0aGlzLnByZXYueSk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIERyb3AgPSBmdW5jdGlvbih4LCB5KSB7XHJcblxyXG4gICAgICB2YXIgZGlzdCA9IE1hdGgucmFuZG9tKCkgKiA3O1xyXG4gICAgICB2YXIgYW5nbGUgPSBNYXRoLlBJICsgTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XHJcblxyXG4gICAgICB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoeCwgeSk7XHJcblxyXG4gICAgICB0aGlzLnZlbCA9IG5ldyBWZWN0b3IoXHJcbiAgICAgICAgTWF0aC5jb3MoYW5nbGUpICogZGlzdCxcclxuICAgICAgICBNYXRoLnNpbihhbmdsZSkgKiBkaXN0XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIERyb3AucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgdGhpcy52ZWwueSArPSBncmF2aXR5O1xyXG5cclxuICAgICAgdGhpcy52ZWwueCAqPSAwLjk1O1xyXG4gICAgICB0aGlzLnZlbC55ICo9IDAuOTU7XHJcblxyXG4gICAgICB0aGlzLnBvcy5hZGQodGhpcy52ZWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEcm9wLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmModGhpcy5wb3MueCwgdGhpcy5wb3MueSwgMSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcblxyXG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICB2YXIgaSA9IHJhaW4ubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcblxyXG4gICAgICAgIHZhciByYWluZHJvcCA9IHJhaW5baV07XHJcblxyXG4gICAgICAgIHJhaW5kcm9wLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAocmFpbmRyb3AucG9zLnkgPj0gY2FudmFzLmhlaWdodCkge1xyXG5cclxuICAgICAgICAgIHZhciBuID0gTWF0aC5yb3VuZCg0ICsgTWF0aC5yYW5kb20oKSAqIDQpO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChuLS0pXHJcbiAgICAgICAgICAgIGRyb3BzLnB1c2gobmV3IERyb3AocmFpbmRyb3AucG9zLngsIGNhbnZhcy5oZWlnaHQpKTtcclxuXHJcbiAgICAgICAgICByYWluLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhaW5kcm9wLmRyYXcoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGkgPSBkcm9wcy5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuXHJcbiAgICAgICAgdmFyIGRyb3AgPSBkcm9wc1tpXTtcclxuICAgICAgICBkcm9wLnVwZGF0ZSgpO1xyXG4gICAgICAgIGRyb3AuZHJhdygpO1xyXG5cclxuICAgICAgICBpZiAoZHJvcC5wb3MueSA+IGNhbnZhcy5oZWlnaHQpIGRyb3BzLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCByYWluX2NoYW5jZSkgcmFpbi5wdXNoKG5ldyBSYWluKCkpO1xyXG5cclxuICAgICAgcmVxdWVzdEFuaW1GcmFtZSh1cGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg2MCwxMzUsMjM1LDEpJztcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDYwLDEzNSwyMzUsMSknO1xyXG4gICAgICB1cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk7XHJcbiAgfVxyXG5cclxuICBzbm93KCl7XHJcbiAgICAkKFwiI3Nub3dDYW52YXNcIikuYWRkQ2xhc3MoXCJzbm93aW5nXCIpO1xyXG4gIH1cclxuXHJcbiAgc3Rvcm0oKXtcclxuICAgICQoXCIjc3Rvcm1DYW52YXNcIikuYXR0cihcIndpZHRoXCIsXCI4MDBcIikuYXR0cihcImhlaWdodFwiLFwiNjAwXCIpO1xyXG5cclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIEFwcCwgT2JzdGFjbGUsIFBhcnRpY2xlLCBWZWN0b3IyRCxcclxuICAgICAgICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXHJcbiAgICAgICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxyXG4gICAgICAgIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xyXG5cclxuICAgICAgVmVjdG9yMkQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gVmVjdG9yMkQoeDEsIHkxKSB7XHJcbiAgICAgICAgICB0aGlzLnggPSB4MSAhPSBudWxsID8geDEgOiAwO1xyXG4gICAgICAgICAgdGhpcy55ID0geTEgIT0gbnVsbCA/IHkxIDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFZlY3RvcjJELnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih2ZWN0b3IpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICsgdmVjdG9yLngsIHRoaXMueSArIHZlY3Rvci55KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBWZWN0b3IyRC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbih2ZWN0b3IpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54IC0gdmVjdG9yLngsIHRoaXMueSAtIHZlY3Rvci55KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBWZWN0b3IyRC5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbihuKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAqIG4sIHRoaXMueSAqIG4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFZlY3RvcjJELnByb3RvdHlwZS5kaXZpZGUgPSBmdW5jdGlvbihuKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAvIG4sIHRoaXMueSAvIG4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFZlY3RvcjJELnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjJEO1xyXG5cclxuICAgICAgfSkoKTtcclxuXHJcbiAgICAgIFBhcnRpY2xlID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcclxuICAgICAgICBleHRlbmQoUGFydGljbGUsIHN1cGVyQ2xhc3MpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBQYXJ0aWNsZSh4LCB5LCB3ZWlnaHQpIHtcclxuXHJcbiAgICAgICAgICBpZiAoeCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHggPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB5ID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xyXG4gICAgICAgICAgaWYgKHRoaXMud2VpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy53ZWlnaHQgPSBNYXRoLnJhbmRvbSgpICogMjAgKyAyMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFBhcnRpY2xlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHgsIHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUGFydGljbGUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oeDEsIHkxKSB7XHJcbiAgICAgICAgICB0aGlzLnggPSB4MSAhPSBudWxsID8geDEgOiAwO1xyXG4gICAgICAgICAgdGhpcy55ID0geTEgIT0gbnVsbCA/IHkxIDogMDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBQYXJ0aWNsZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odmVsWCwgdmVsWSkge1xyXG4gICAgICAgICAgdGhpcy54ICs9IHZlbFg7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy55ICs9IHZlbFk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFBhcnRpY2xlO1xyXG5cclxuICAgICAgfSkoVmVjdG9yMkQpO1xyXG5cclxuICAgICAgQXBwID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlUGFydGljbGVzID0gYmluZCh0aGlzLnVwZGF0ZVBhcnRpY2xlcywgdGhpcyk7XHJcbiAgICAgICAgICB2YXIgaSwgaiwgaztcclxuICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9ybUNhbnZhc1wiKTtcclxuICAgICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuY29udGV4dC5jcmVhdGVJbWFnZURhdGEodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICAgIHRoaXMub2JzdGFjbGVzID0gW107XHJcbiAgICAgICAgICB0aGlzLnN0cmVuZ3RoID0gMzAwO1xyXG4gICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcclxuICAgICAgICAgIHRoaXMud2luZCA9IG5ldyBWZWN0b3IyRChNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIHRoaXMuc3RyZW5ndGgsIE1hdGguc2luKHRoaXMuYW5nbGUpICogdGhpcy5zdHJlbmd0aCk7XHJcbiAgICAgICAgICB0aGlzLndpbmRWYXJpYXRpb24gPSAwO1xyXG4gICAgICAgICAgZm9yIChpID0gayA9IDE7IGsgPD0gMjUwMDsgaSA9ICsraykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZShNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCwgTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhcnRpY2xlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXBwLnByb3RvdHlwZS5jaGFuZ2VEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRoaXMud2luZFZhcmlhdGlvbiArPSAuMDAyO1xyXG4gICAgICAgICAgdGhpcy53aW5kLnggPSBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5jb3ModGhpcy53aW5kVmFyaWF0aW9uKSkgKiB0aGlzLnN0cmVuZ3RoO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMud2luZC55ID0gTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguY29zKHRoaXMud2luZFZhcmlhdGlvbikpICogdGhpcy5zdHJlbmd0aDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBBcHAucHJvdG90eXBlLnVwZGF0ZVBhcnRpY2xlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIGosIGssIGxlbjEsIGxlbjIsIG9ic3RhY2xlLCBwLCByZWYsIHJlZjEsIHY7XHJcbiAgICAgICAgICByZWYgPSB0aGlzLnBhcnRpY2xlcztcclxuICAgICAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XHJcbiAgICAgICAgICAgIHAgPSByZWZbal07XHJcbiAgICAgICAgICAgIHYgPSB0aGlzLndpbmQuY2xvbmUoKTtcclxuICAgICAgICAgICAgcmVmMSA9IHRoaXMub2JzdGFjbGVzO1xyXG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBsZW4yID0gcmVmMS5sZW5ndGg7IGsgPCBsZW4yOyBrKyspIHtcclxuICAgICAgICAgICAgICBvYnN0YWNsZSA9IHJlZjFba107XHJcbiAgICAgICAgICAgICAgdiA9IHYuYWRkKG9ic3RhY2xlLmF2b2lkKHApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2ID0gdi5kaXZpZGUocC53ZWlnaHQpO1xyXG4gICAgICAgICAgICBwLnVwZGF0ZSh2LngsIHYueSk7XHJcbiAgICAgICAgICAgIGlmIChwLnggPCAwKSB7XHJcbiAgICAgICAgICAgICAgcC5yZXNldCh0aGlzLndpZHRoLCBNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHAueCA+IHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgICBwLnJlc2V0KDAsIE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocC55IDwgMCkge1xyXG4gICAgICAgICAgICAgIHAucmVzZXQoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwLnkgPiB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgIHAucmVzZXQoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbigpO1xyXG4gICAgICAgICAgdGhpcy5kcmF3UGFydGljbGVzKCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlUGFydGljbGVzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBBcHAucHJvdG90eXBlLmRyYXdQYXJ0aWNsZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciBpLCBqLCBsZW4sIGxlbjEsIHAsIHJlZjtcclxuICAgICAgICAgIHJlZiA9IHRoaXMucGFydGljbGVzO1xyXG4gICAgICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHJlZi5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcclxuICAgICAgICAgICAgcCA9IHJlZltqXTtcclxuICAgICAgICAgICAgdGhpcy5zZXRQaXhlbCh0aGlzLmRhdGEsIHAueCwgcC55LCAyMzUsIDIwMiwgNDcsIDI1NSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZW4gPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICBpID0gMztcclxuICAgICAgICAgIHdoaWxlIChpIDwgbGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kYXRhW2ldIC09IDUwO1xyXG4gICAgICAgICAgICBpICs9IDQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmRhdGEsIDAsIDApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEFwcC5wcm90b3R5cGUuc2V0UGl4ZWwgPSBmdW5jdGlvbihpbWFnZURhdGEsIHgsIHksIHIsIGcsIGIsIGEpIHtcclxuICAgICAgICAgIHZhciBpbmRleDtcclxuICAgICAgICAgIGlmICh4IDwgMCB8fCB4ID4gdGhpcy53aWR0aCB8fCB5IDwgMCB8fCB5ID4gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgeCA9IE1hdGgucm91bmQoeCk7XHJcbiAgICAgICAgICB5ID0gTWF0aC5yb3VuZCh5KTtcclxuICAgICAgICAgIGluZGV4ID0gKHggKyB5ICogaW1hZ2VEYXRhLndpZHRoKSAqIDQ7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDBdID0gcjtcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMV0gPSBnO1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAyXSA9IGI7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID0gYTtcclxuICAgICAgICAgIGluZGV4ID0gKCh4ICsgMSkgKyAoeSArIDEpICogaW1hZ2VEYXRhLndpZHRoKSAqIDQ7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDBdID0gcjtcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMV0gPSBnO1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAyXSA9IGI7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID0gYTtcclxuICAgICAgICAgIGluZGV4ID0gKCh4IC0gMSkgKyAoeSAtIDEpICogaW1hZ2VEYXRhLndpZHRoKSAqIDQ7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDBdID0gcjtcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMV0gPSBnO1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAyXSA9IGI7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID0gYTtcclxuICAgICAgICAgIGluZGV4ID0gKCh4ICsgMSkgKyAoeSAtIDEpICogaW1hZ2VEYXRhLndpZHRoKSAqIDQ7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDBdID0gcjtcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMV0gPSBnO1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAyXSA9IGI7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID0gYTtcclxuICAgICAgICAgIGluZGV4ID0gKCh4IC0gMSkgKyAoeSArIDEpICogaW1hZ2VEYXRhLndpZHRoKSAqIDQ7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDBdID0gcjtcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMV0gPSBnO1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAyXSA9IGI7XHJcbiAgICAgICAgICByZXR1cm4gaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA9IGE7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEFwcDtcclxuXHJcbiAgICAgIH0pKCk7XHJcblxyXG4gICAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXBwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSkuY2FsbCh0aGlzKTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
