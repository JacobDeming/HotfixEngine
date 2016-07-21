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
        this.turnOff("storm");
        this.storm();
    };
    AnimationComponent.prototype.turnOn = function (x) {
        switch (x) {
            case ("fog"):
                $("#fogCanvas").show();
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
                this.snow();
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
                $("#weather").removeClass("snowing");
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
        var img = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/85280/smoke2.png";
        var smokeImage = new Image();
        smokeImage.src = img;
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
                    var newSize = p.size + (p.growth * (td / 1000));
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
                requestAnimationFrame(function () {
                    draw(startT, totalT);
                });
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
        $("#weather").addClass("snowing");
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
            template: "\n  <div class=\"weather-zone\" id=\"weather\">\n    <canvas class=\"canvas\" id=\"fogCanvas\"></canvas>\n    <canvas class=\"canvas\" id=\"lightningCanvas\"></canvas>\n    <canvas class=\"canvas\" id=\"rainCanvas\"></canvas>\n    <canvas class=\"canvas\" id=\"stormCanvas\"></canvas>\n  </div>\n  <div class=\"sprites-container\">\n    <div class=\"player1\">\n      <player1sprite></player1sprite>\n    </div>\n    <div class=\"player2\">\n      <player2sprite></player2sprite>\n    </div>\n  </div>\n  ",
            styles: ["\n    .canvas {\n      min-height:100%;\n      min-width:100%;\n      position:absolute;\n      bottom:112px;\n    }\n    #fogCanvas{\n      opacity: 0.2;\n      height:400px;\n      z-index: -3;\n    }\n    #lightningCanvas {\n      overflow: hidden;\n      position: absolute;\n      z-index: -3;\n    }\n    #rainCanvas {\n      z-index: -3;\n    }\n    #stormCanvas {\n      z-index: -3;\n    }\n\n  "],
            directives: [player1sprite_component_1.Player1SpriteComponent, player2sprite_component_1.Player2SpriteComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], AnimationComponent);
    return AnimationComponent;
}());
exports.AnimationComponent = AnimationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLHdDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pFLHdDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBZ0R6RTtJQVlFLDRCQUFhLEVBQWM7UUFaN0IsaUJBb3RCQztRQXZzQkcsSUFBSSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxnQkFBZ0IsRUFBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBRXZCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ2xELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdB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TUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0MsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ3RCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUM5QyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLENBQUM7d0JBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN2QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1osQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ25ELENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQzVCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzFD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QUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsRCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xELFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDO2dCQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFYixDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsQ0FBQyxDQUFDO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFod0JIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBQyxXQUFXO1lBQ3BCLFFBQVEsRUFBQywyZkFlUjtZQUNELE1BQU0sRUFBQyxDQUFDLHNaQXdCUCxDQUFDO1lBQ0YsVUFBVSxFQUFDLENBQUMsZ0RBQXNCLEVBQUMsZ0RBQXNCLENBQUM7U0FDM0QsQ0FBQzs7MEJBQUE7SUFzdEJGLHlCQUFDO0FBQUQsQ0FwdEJBLEFBb3RCQyxJQUFBO0FBcHRCWSwwQkFBa0IscUJBb3RCOUIsQ0FBQSIsImZpbGUiOiJhbmltYXRpb24vYW5pbWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcblxuaW1wb3J0IHtQbGF5ZXIxU3ByaXRlQ29tcG9uZW50fSBmcm9tICcuL3Nwcml0ZXMvcGxheWVyMXNwcml0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtQbGF5ZXIyU3ByaXRlQ29tcG9uZW50fSBmcm9tICcuL3Nwcml0ZXMvcGxheWVyMnNwcml0ZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2FuaW1hdGlvbicsXG4gIHRlbXBsYXRlOmBcbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItem9uZVwiIGlkPVwid2VhdGhlclwiPlxuICAgIDxjYW52YXMgY2xhc3M9XCJjYW52YXNcIiBpZD1cImZvZ0NhbnZhc1wiPjwvY2FudmFzPlxuICAgIDxjYW52YXMgY2xhc3M9XCJjYW52YXNcIiBpZD1cImxpZ2h0bmluZ0NhbnZhc1wiPjwvY2FudmFzPlxuICAgIDxjYW52YXMgY2xhc3M9XCJjYW52YXNcIiBpZD1cInJhaW5DYW52YXNcIj48L2NhbnZhcz5cbiAgICA8Y2FudmFzIGNsYXNzPVwiY2FudmFzXCIgaWQ9XCJzdG9ybUNhbnZhc1wiPjwvY2FudmFzPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNwcml0ZXMtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInBsYXllcjFcIj5cbiAgICAgIDxwbGF5ZXIxc3ByaXRlPjwvcGxheWVyMXNwcml0ZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGxheWVyMlwiPlxuICAgICAgPHBsYXllcjJzcHJpdGU+PC9wbGF5ZXIyc3ByaXRlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOltgXG4gICAgLmNhbnZhcyB7XG4gICAgICBtaW4taGVpZ2h0OjEwMCU7XG4gICAgICBtaW4td2lkdGg6MTAwJTtcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgYm90dG9tOjExMnB4O1xuICAgIH1cbiAgICAjZm9nQ2FudmFze1xuICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgaGVpZ2h0OjQwMHB4O1xuICAgICAgei1pbmRleDogLTM7XG4gICAgfVxuICAgICNsaWdodG5pbmdDYW52YXMge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IC0zO1xuICAgIH1cbiAgICAjcmFpbkNhbnZhcyB7XG4gICAgICB6LWluZGV4OiAtMztcbiAgICB9XG4gICAgI3N0b3JtQ2FudmFzIHtcbiAgICAgIHotaW5kZXg6IC0zO1xuICAgIH1cblxuICBgXSxcbiAgZGlyZWN0aXZlczpbUGxheWVyMVNwcml0ZUNvbXBvbmVudCxQbGF5ZXIyU3ByaXRlQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9uT2ZmOkZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZTxhbnk+O1xuICBVUkw6c3RyaW5nO1xuICBlbnZpcm9ubWVudFNuYXBzaG90OiB7XG4gICAgZm9nOmJvb2xlYW4sXG4gICAgbGlnaHRuaW5nOmJvb2xlYW4sXG4gICAgcXVha2U6Ym9vbGVhbixcbiAgICByYWluOmJvb2xlYW4sXG4gICAgc25vdzpib29sZWFuLFxuICAgIHN0b3JtOmJvb2xlYW5cbiAgfTtcblxuICBjb25zdHJ1Y3RvciAoYWY6QW5ndWxhckZpcmUpIHtcbiAgICB0aGlzLlVSTD13aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB0aGlzLm9uT2ZmID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9HbG9iYWxzL09uT2ZmJyx7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XG4gICAgdGhpcy5vbk9mZi5zdWJzY3JpYmUoc25hcCA9PntcblxuICAgICAgaWYodGhpcy5lbnZpcm9ubWVudFNuYXBzaG90LmZvZyAhPT0gc25hcC52YWwoKS5mb2cpe1xuICAgICAgICBpZihzbmFwLnZhbCgpLmZvZz09dHJ1ZSl7XG4gICAgICAgICAgdGhpcy50dXJuT24oXCJmb2dcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50dXJuT2ZmKFwiZm9nXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZih0aGlzLmVudmlyb25tZW50U25hcHNob3QubGlnaHRuaW5nICE9PSBzbmFwLnZhbCgpLmxpZ2h0bmluZyl7XG4gICAgICAgIGlmKHNuYXAudmFsKCkubGlnaHRuaW5nPT10cnVlKXtcbiAgICAgICAgICB0aGlzLnR1cm5PbihcImxpZ2h0bmluZ1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnR1cm5PZmYoXCJsaWdodG5pbmdcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnRTbmFwc2hvdC5xdWFrZSAhPT0gc25hcC52YWwoKS5xdWFrZSl7XG4gICAgICAgIGlmKHNuYXAudmFsKCkucXVha2U9PXRydWUpe1xuICAgICAgICAgIHRoaXMudHVybk9uKFwicXVha2VcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50dXJuT2ZmKFwicXVha2VcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnRTbmFwc2hvdC5yYWluICE9PSBzbmFwLnZhbCgpLnJhaW4pe1xuICAgICAgICBpZihzbmFwLnZhbCgpLnJhaW49PXRydWUpe1xuICAgICAgICAgIHRoaXMudHVybk9uKFwicmFpblwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnR1cm5PZmYoXCJyYWluXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZih0aGlzLmVudmlyb25tZW50U25hcHNob3Quc25vdyAhPT0gc25hcC52YWwoKS5zbm93KXtcbiAgICAgICAgaWYoc25hcC52YWwoKS5zbm93PT10cnVlKXtcbiAgICAgICAgICB0aGlzLnR1cm5PbihcInNub3dcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50dXJuT2ZmKFwic25vd1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYodGhpcy5lbnZpcm9ubWVudFNuYXBzaG90LnN0b3JtICE9PSBzbmFwLnZhbCgpLnN0b3JtKXtcbiAgICAgICAgaWYoc25hcC52YWwoKS5zdG9ybT09dHJ1ZSl7XG4gICAgICAgICAgdGhpcy50dXJuT24oXCJzdG9ybVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnR1cm5PZmYoXCJzdG9ybVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogVXBkYXRlcyB0byBuZXcgdmFsdWVzICovXG4gICAgICB0aGlzLmVudmlyb25tZW50U25hcHNob3QgPSBzbmFwLnZhbCgpO1xuICAgIH0pXG4gIH1cbiBcbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmVudmlyb25tZW50U25hcHNob3QgPSB7XG4gICAgICBmb2c6ZmFsc2UsXG4gICAgICBsaWdodG5pbmc6ZmFsc2UsXG4gICAgICBxdWFrZTpmYWxzZSxcbiAgICAgIHJhaW46ZmFsc2UsXG4gICAgICBzbm93OmZhbHNlLFxuICAgICAgc3Rvcm06ZmFsc2VcbiAgICB9O1xuXG4gICAgLyogRm9nZ2luZyAqL1xuICAgIHRoaXMudHVybk9mZihcImZvZ1wiKTtcbiAgICB0aGlzLmZvZygpO1xuXG4gICAgLyogTGlnaHRuaW5nICovXG4gICAgdGhpcy50dXJuT2ZmKFwibGlnaHRuaW5nXCIpO1xuICAgIHRoaXMubGlnaHRuaW5nKCk7XG5cbiAgICAvKiBSYWluaW5nICovXG4gICAgdGhpcy50dXJuT2ZmKFwicmFpblwiKTtcbiAgICB0aGlzLnJhaW4oKTtcblxuICAgIC8qIFN0b3JtaW5nICovXG4gICAgdGhpcy50dXJuT2ZmKFwic3Rvcm1cIik7XG4gICAgdGhpcy5zdG9ybSgpO1xuICB9XG5cbiAgdHVybk9uKHgpe1xuICAgIHN3aXRjaCh4KXtcbiAgICAgIGNhc2UoXCJmb2dcIik6XG4gICAgICAgICQoXCIjZm9nQ2FudmFzXCIpLnNob3coKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlKFwibGlnaHRuaW5nXCIpOlxuICAgICAgICAkKFwiI2xpZ2h0bmluZ0NhbnZhc1wiKS5zaG93KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZShcInF1YWtlXCIpOlxuICAgICAgICB0aGlzLnF1YWtlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZShcInJhaW5cIik6XG4gICAgICAgICQoXCIjcmFpbkNhbnZhc1wiKS5zaG93KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZShcInNub3dcIik6XG4gICAgICAgIHRoaXMuc25vdygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UoXCJzdG9ybVwiKTpcbiAgICAgICAgJChcIiNzdG9ybUNhbnZhc1wiKS5zaG93KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHR1cm5PZmYoeCl7XG4gICAgc3dpdGNoKHgpe1xuICAgICAgY2FzZShcImZvZ1wiKTpcbiAgICAgICAgJChcIiNmb2dDYW52YXNcIikuaGlkZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UoXCJsaWdodG5pbmdcIik6XG4gICAgICAgICQoXCIjbGlnaHRuaW5nQ2FudmFzXCIpLmhpZGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlKFwicXVha2VcIik6XG4gICAgICAgICQoXCIuZ2FtZS1jb250YWluZXJcIikuZmluaXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZShcInJhaW5cIik6XG4gICAgICAgICQoXCIjcmFpbkNhbnZhc1wiKS5oaWRlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZShcInNub3dcIik6XG4gICAgICAgICQoXCIjd2VhdGhlclwiKS5yZW1vdmVDbGFzcyhcInNub3dpbmdcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZShcInN0b3JtXCIpOlxuICAgICAgICAkKFwiI3N0b3JtQ2FudmFzXCIpLmhpZGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZm9nKCl7XG5cbiAgICB2YXIgY2FudmFzV2lkdGggPSAxNjAwO1xuICAgIHZhciBjYW52YXNIZWlnaHQgPSAyMDA7XG5cbiAgICB2YXIgcENvdW50ID0gMDtcbiAgICB2YXIgcENvbGxlY3Rpb24gPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgcHVmZnMgPSAxO1xuICAgIHZhciBwYXJ0aWNsZXNQZXJQdWZmID0gMjAwMDtcbiAgICB2YXIgaW1nID0gXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby84NTI4MC9zbW9rZTIucG5nXCI7XG4gICAgdmFyIHNtb2tlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBzbW9rZUltYWdlLnNyYyA9IGltZztcblxuICAgIGZvciAodmFyIGkxID0gMDsgaTEgPCBwdWZmczsgaTErKykge1xuICAgICAgdmFyIHB1ZmZEZWxheSA9IGkxICogMTUwMDsgLy8zMDAgbXMgYmV0d2VlbiBwdWZmc1xuICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IHBhcnRpY2xlc1BlclB1ZmY7IGkyKyspIHtcbiAgICAgICAgYWRkTmV3UGFydGljbGUoKGkyICogNTApICsgcHVmZkRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZHJhdyhuZXcgRGF0ZSgpLmdldFRpbWUoKSwgMzAwMCk7XG5cbiAgICBmdW5jdGlvbiBhZGROZXdQYXJ0aWNsZShkZWxheSkge1xuXG4gICAgICB2YXIgcCA9IHtcbiAgICAgICAgdG9wOjAsXG4gICAgICAgIGxlZnQ6MCxcbiAgICAgICAgc3RhcnQ6MCxcbiAgICAgICAgbGlmZTowLFxuICAgICAgICBzcGVlZFVwOjAsXG4gICAgICAgIHNwZWVkUmlnaHQ6MCxcbiAgICAgICAgcm90OjAsXG4gICAgICAgIHJlZDowLFxuICAgICAgICBibHVlOjAsXG4gICAgICAgIGdyZWVuOjAsXG4gICAgICAgIHN0YXJ0T3BhY2l0eTowLFxuICAgICAgICBuZXdUb3A6MCxcbiAgICAgICAgbmV3TGVmdDowLFxuICAgICAgICBzaXplOjAsXG4gICAgICAgIGdyb3d0aDowXG4gICAgICB9O1xuXG4gICAgICBwLnRvcCA9IGNhbnZhc0hlaWdodDtcbiAgICAgIHAubGVmdCA9IHJhbmRCZXR3ZWVuKC0yMDAsODAwKTtcblxuICAgICAgcC5zdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgZGVsYXk7XG4gICAgICBwLmxpZmUgPSA4MDAwO1xuICAgICAgcC5zcGVlZFVwID0gMzA7XG4gICAgICBwLnNwZWVkUmlnaHQgPSByYW5kQmV0d2VlbigwLDIwKTtcblxuICAgICAgcC5yb3QgPSByYW5kQmV0d2VlbigtMSwxKTtcbiAgICAgIHAucmVkID0gTWF0aC5mbG9vcihyYW5kQmV0d2VlbigwLDI1NSkpO1xuICAgICAgcC5ibHVlID0gTWF0aC5mbG9vcihyYW5kQmV0d2VlbigwLDI1NSkpO1xuICAgICAgcC5ncmVlbiA9IE1hdGguZmxvb3IocmFuZEJldHdlZW4oMCwyNTUpKTtcblxuICAgICAgcC5zdGFydE9wYWNpdHkgPSAuM1xuICAgICAgcC5uZXdUb3AgPSBwLnRvcDtcbiAgICAgIHAubmV3TGVmdCA9IHAubGVmdDtcbiAgICAgIHAuc2l6ZSA9IDIwMDtcbiAgICAgIHAuZ3Jvd3RoID0gMTA7XG5cbiAgICAgIHBDb2xsZWN0aW9uW3BDb3VudF0gPSBwO1xuICAgICAgcENvdW50Kys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhdyhzdGFydFQsIHRvdGFsVCkge1xuICAgICAgLy8gVGltaW5nXG4gICAgICB2YXIgdGltZURlbHRhID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFQ7XG4gICAgICB2YXIgc3RpbGxBbGl2ZSA9IGZhbHNlO1xuXG4gICAgICAvLyBHcmFiIGFuZCBjbGVhciB0aGUgY2FudmFzXG4gICAgICB2YXIgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9nQ2FudmFzXCIpO1xuICAgICAgdmFyIGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjLndpZHRoLCBjLmhlaWdodCk7XG4gICAgICBjLndpZHRoID0gYy53aWR0aDtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHBhcnRpY2xlc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwQ291bnQ7IGkrKykge1xuICAgICAgICAvL0dyYWIgdGhlIHBhcnRpY2xlXG4gICAgICAgIHZhciBwID0gcENvbGxlY3Rpb25baV07XG5cbiAgICAgICAgLy8gVGltaW5nXG4gICAgICAgIHZhciB0ZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcC5zdGFydDtcbiAgICAgICAgdmFyIGZyYWMgPSB0ZCAvIHAubGlmZTtcblxuICAgICAgICBpZiAodGQgPiAwKSB7XG4gICAgICAgICAgaWYgKHRkIDw9IHAubGlmZSkge1xuICAgICAgICAgICAgc3RpbGxBbGl2ZSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQXR0cmlidXRlcyB0aGF0IGNoYW5nZSBvdmVyIHRpbWVcbiAgICAgICAgICB2YXIgbmV3VG9wID0gcC50b3AgLSAocC5zcGVlZFVwICogKHRkIC8gMTAwMCkpO1xuICAgICAgICAgIHZhciBuZXdMZWZ0ID0gcC5sZWZ0ICsgKHAuc3BlZWRSaWdodCAqICh0ZCAvIDEwMDApKTtcbiAgICAgICAgICB2YXIgbmV3T3BhY2l0eSA9IE1hdGgubWF4KHAuc3RhcnRPcGFjaXR5ICogKDEgLSBmcmFjKSwgMCk7XG5cbiAgICAgICAgICB2YXIgbmV3U2l6ZSA9IHAuc2l6ZSArIChwLmdyb3d0aCAqICh0ZCAvIDEwMDApKTtcbiAgICAgICAgICBwLm5ld1RvcCA9IG5ld1RvcDtcbiAgICAgICAgICBwLm5ld0xlZnQgPSBuZXdMZWZ0O1xuXG4gICAgICAgICAgLy8gRHJhdyFcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTUwLDE1MCwxNTAsJyArIG5ld09wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gbmV3T3BhY2l0eTtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHNtb2tlSW1hZ2UsIG5ld0xlZnQsIG5ld1RvcCwgbmV3U2l6ZSwgbmV3U2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHAuc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVwZWF0IGlmIHRoZXJlJ3Mgc3RpbGwgYSBsaXZpbmcgcGFydGljbGVcbiAgICAgIGlmIChzdGlsbEFsaXZlKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBkcmF3KHN0YXJ0VCwgdG90YWxUKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmFuZEJldHdlZW4objEsIG4yKSB7XG4gICAgICB2YXIgciA9IChNYXRoLnJhbmRvbSgpICogKG4yIC0gbjEpKSArIG4xO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmFuZE9mZnNldChuLCB2YXJpYW5jZSkge1xuICAgICAgLy9lLmcuIHZhcmlhbmNlIGNvdWxkIGJlIDAuMSB0byBnbyBiZXR3ZWVuIDAuOSBhbmQgMS4xXG4gICAgICB2YXIgbWF4ID0gMSArIHZhcmlhbmNlO1xuICAgICAgdmFyIG1pbiA9IDEgLSB2YXJpYW5jZTtcbiAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgcmV0dXJuIG4gKiByO1xuICAgIH1cbiAgfVxuXG4gIGxpZ2h0bmluZygpe1xuICAgICQoXCIjbGlnaHRuaW5nQ2FudmFzXCIpLmF0dHIoXCJ3aWR0aFwiLCBcIjk2MFwiKS5hdHRyKFwiaGVpZ2h0XCIsIFwiNzIwXCIpO1xuXG4gICAgKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgYm9sdEZhZGVEdXJhdGlvbiwgYm9sdEZsYXNoRHVyYXRpb24sIGJvbHRzLCBjYW52YXMsIGNvbnRleHQsIGZsYXNoT3BhY2l0eSwgZnBzLCBoZWlnaHQsIGxhc3RGcmFtZSwgbGF1bmNoQm9sdCwgcmVjdXJzaXZlTGF1bmNoQm9sdCwgc2NhbGUsIHNldENhbnZhc1NpemUsIHRpY2ssIHRvdGFsQm9sdER1cmF0aW9uLCB3aWR0aDtcblxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWdodG5pbmdDYW52YXNcIik7XG4gICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHdpZHRoID0gMC4wO1xuICAgICAgaGVpZ2h0ID0gMC4wO1xuICAgICAgc2NhbGUgPSAxLjA7XG4gICAgICBmcHMgPSA0NS4wO1xuICAgICAgbGFzdEZyYW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBmbGFzaE9wYWNpdHkgPSAwLjA7XG4gICAgICBib2x0Rmxhc2hEdXJhdGlvbiA9IDAuMjU7XG4gICAgICBib2x0RmFkZUR1cmF0aW9uID0gMC41O1xuICAgICAgdG90YWxCb2x0RHVyYXRpb24gPSBib2x0Rmxhc2hEdXJhdGlvbiArIGJvbHRGYWRlRHVyYXRpb247XG4gICAgICBib2x0cyA9IFtdO1xuXG4gICAgICBzZXRDYW52YXNTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBib2x0LCBqLCBsZW47XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aW5kb3cub3V0ZXJXaWR0aCk7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgd2luZG93Lm91dGVySGVpZ2h0KTtcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gYm9sdHMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBib2x0ID0gYm9sdHNbal07XG4gICAgICAgICAgYm9sdC5jYW52YXMud2lkdGggPSB3aW5kb3cub3V0ZXJXaWR0aDtcbiAgICAgICAgICBib2x0LmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cub3V0ZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBNYXRoLmNlaWwod2luZG93Lm91dGVyV2lkdGggLyBzY2FsZSk7XG4gICAgICAgIHJldHVybiBoZWlnaHQgPSBNYXRoLmNlaWwod2luZG93Lm91dGVySGVpZ2h0IC8gc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgbGF1bmNoQm9sdCA9IGZ1bmN0aW9uKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBib2x0Q2FudmFzLCBib2x0Q29udGV4dDtcbiAgICAgICAgZmxhc2hPcGFjaXR5ID0gMC4xNSArIE1hdGgucmFuZG9tKCkgKiAwLjI7XG4gICAgICAgIGJvbHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBib2x0Q2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGJvbHRDYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBib2x0Q29udGV4dCA9IGJvbHRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBib2x0Q29udGV4dC5zY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgICAgICBib2x0cy5wdXNoKHtcbiAgICAgICAgICBjYW52YXM6IGJvbHRDYW52YXMsXG4gICAgICAgICAgZHVyYXRpb246IDAuMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUxhdW5jaEJvbHQoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24sIGJvbHRDb250ZXh0KTtcbiAgICAgIH07XG5cbiAgICAgIHJlY3Vyc2l2ZUxhdW5jaEJvbHQgPSBmdW5jdGlvbih4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbiwgYm9sdENvbnRleHQpIHtcbiAgICAgICAgdmFyIGJvbHRJbnRlcnZhbCwgb3JpZ2luYWxEaXJlY3Rpb247XG4gICAgICAgIG9yaWdpbmFsRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICByZXR1cm4gYm9sdEludGVydmFsID0gc2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBhbHBoYSwgaSwgeDEsIHkxO1xuICAgICAgICAgIGlmIChsZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChib2x0SW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpID0gMDtcbiAgICAgICAgICB3aGlsZSAoaSsrIDwgTWF0aC5mbG9vcig0NSAvIHNjYWxlKSAmJiBsZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB4MSA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgICAgICB5MSA9IE1hdGguZmxvb3IoeSk7XG4gICAgICAgICAgICB4ICs9IE1hdGguY29zKGRpcmVjdGlvbik7XG4gICAgICAgICAgICB5IC09IE1hdGguc2luKGRpcmVjdGlvbik7XG4gICAgICAgICAgICBsZW5ndGgtLTtcbiAgICAgICAgICAgIGlmICh4MSAhPT0gTWF0aC5mbG9vcih4KSB8fCB5MSAhPT0gTWF0aC5mbG9vcih5KSkge1xuICAgICAgICAgICAgICBhbHBoYSA9IE1hdGgubWluKDEuMCwgbGVuZ3RoIC8gMzUwLjApO1xuICAgICAgICAgICAgICBib2x0Q29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgXCIgKyBhbHBoYSArIFwiKVwiO1xuICAgICAgICAgICAgICBib2x0Q29udGV4dC5maWxsUmVjdCh4MSwgeTEsIDEuMCwgMS4wKTtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uID0gb3JpZ2luYWxEaXJlY3Rpb24gKyAoLU1hdGguUEkgLyA4LjAgKyBNYXRoLnJhbmRvbSgpICogKE1hdGguUEkgLyA0LjApKTtcbiAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjk4KSB7XG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlTGF1bmNoQm9sdCh4MSwgeTEsIGxlbmd0aCAqICgwLjMgKyBNYXRoLnJhbmRvbSgpICogMC40KSwgb3JpZ2luYWxEaXJlY3Rpb24gKyAoLU1hdGguUEkgLyA2LjAgKyBNYXRoLnJhbmRvbSgpICogKE1hdGguUEkgLyAzLjApKSwgYm9sdENvbnRleHQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjk1KSB7XG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlTGF1bmNoQm9sdCh4MSwgeTEsIGxlbmd0aCwgb3JpZ2luYWxEaXJlY3Rpb24gKyAoLU1hdGguUEkgLyA2LjAgKyBNYXRoLnJhbmRvbSgpICogKE1hdGguUEkgLyAzLjApKSwgYm9sdENvbnRleHQpO1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgfSksIDEwKTtcbiAgICAgIH07XG5cbiAgICAgIHRpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGJvbHQsIGVsYXBzZWQsIGZyYW1lLCBpLCBqLCBsZW4sIGxlbmd0aCwgeCwgeTtcbiAgICAgICAgZnJhbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgZWxhcHNlZCA9IChmcmFtZSAtIGxhc3RGcmFtZSkgLyAxMDAwLjA7XG4gICAgICAgIGxhc3RGcmFtZSA9IGZyYW1lO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLjAsIDAuMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC45OCkge1xuICAgICAgICAgIHggPSBNYXRoLmZsb29yKC0xMC4wICsgTWF0aC5yYW5kb20oKSAqICh3aWR0aCArIDIwLjApKTtcbiAgICAgICAgICB5ID0gTWF0aC5mbG9vcig1LjAgKyBNYXRoLnJhbmRvbSgpICogKGhlaWdodCAvIDMuMCkpO1xuICAgICAgICAgIGxlbmd0aCA9IE1hdGguZmxvb3IoaGVpZ2h0IC8gMi4wICsgTWF0aC5yYW5kb20oKSAqIChoZWlnaHQgLyAzLjApKTtcbiAgICAgICAgICBsYXVuY2hCb2x0KHgsIHksIGxlbmd0aCwgTWF0aC5QSSAqIDMuMCAvIDIuMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZsYXNoT3BhY2l0eSA+IDAuMCkge1xuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIFwiICsgZmxhc2hPcGFjaXR5ICsgXCIpXCI7XG4gICAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLjAsIDAuMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgICAgZmxhc2hPcGFjaXR5ID0gTWF0aC5tYXgoMC4wLCBmbGFzaE9wYWNpdHkgLSAyLjAgKiBlbGFwc2VkKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gYm9sdHMubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICAgICAgYm9sdCA9IGJvbHRzW2ldO1xuICAgICAgICAgIGJvbHQuZHVyYXRpb24gKz0gZWxhcHNlZDtcbiAgICAgICAgICBpZiAoYm9sdC5kdXJhdGlvbiA+PSB0b3RhbEJvbHREdXJhdGlvbikge1xuICAgICAgICAgICAgYm9sdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsICh0b3RhbEJvbHREdXJhdGlvbiAtIGJvbHQuZHVyYXRpb24pIC8gYm9sdEZhZGVEdXJhdGlvbikpO1xuICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGJvbHQuY2FudmFzLCAwLjAsIDAuMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNldENhbnZhc1NpemUpO1xuICAgICAgc2V0Q2FudmFzU2l6ZSgpO1xuICAgICAgc2V0SW50ZXJ2YWwodGljaywgMTAwMC4wIC8gZnBzKTtcbiAgICB9KS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgcXVha2UoKXtcbiAgICAkKFwiLmdhbWUtY29udGFpbmVyXCIpLmVmZmVjdChcInNoYWtlXCIse3RpbWVzOjEwfSw1MDAwKTtcbiAgfVxuXG4gIHJhaW4oKXtcbiAgICAkKFwiI3JhaW5DYW52YXNcIikuYXR0cihcIndpZHRoXCIsIFwiODAwXCIpLmF0dHIoXCJoZWlnaHRcIiwgXCI2MDBcIik7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgIH07XG5cbiAgICB2YXIgcmFpbiA9IFtdLFxuICAgIGRyb3BzID0gW107XG5cbiAgICB2YXIgZ3Jhdml0eSA9IDE7XG4gICAgdmFyIHdpbmQgPSAwO1xuICAgIHZhciByYWluX2NoYW5jZSA9IDAuNDtcblxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbkNhbnZhcycpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoO1xuXG4gICAgdmFyIFZlY3RvciA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHRoaXMueCA9IHggfHwgMDtcbiAgICAgIHRoaXMueSA9IHkgfHwgMDtcbiAgICB9O1xuXG4gICAgVmVjdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih2KSB7XG5cbiAgICAgIGlmICh2LnggIT0gbnVsbCAmJiB2LnkgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnggKz0gdi54O1xuICAgICAgICB0aGlzLnkgKz0gdi55O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy54ICs9IHY7XG4gICAgICAgIHRoaXMueSArPSB2O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVmVjdG9yLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfTtcblxuICAgIHZhciBSYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCwgLTUwKTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMucG9zO1xuICAgICAgdGhpcy52ZWwgPSBuZXcgVmVjdG9yKCk7XG4gICAgfTtcblxuICAgIFJhaW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5wb3MuY29weSgpO1xuICAgICAgdGhpcy52ZWwueSArPSBncmF2aXR5O1xuICAgICAgdGhpcy52ZWwueCArPSB3aW5kO1xuICAgICAgdGhpcy5wb3MuYWRkKHRoaXMudmVsKTtcbiAgICB9O1xuXG4gICAgUmFpbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLnBvcy54LCB0aGlzLnBvcy55KTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5wcmV2LngsIHRoaXMucHJldi55KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgdmFyIERyb3AgPSBmdW5jdGlvbih4LCB5KSB7XG5cbiAgICAgIHZhciBkaXN0ID0gTWF0aC5yYW5kb20oKSAqIDc7XG4gICAgICB2YXIgYW5nbGUgPSBNYXRoLlBJICsgTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG5cbiAgICAgIHRoaXMucG9zID0gbmV3IFZlY3Rvcih4LCB5KTtcblxuICAgICAgdGhpcy52ZWwgPSBuZXcgVmVjdG9yKFxuICAgICAgICBNYXRoLmNvcyhhbmdsZSkgKiBkaXN0LFxuICAgICAgICBNYXRoLnNpbihhbmdsZSkgKiBkaXN0XG4gICAgICApO1xuICAgIH07XG5cbiAgICBEcm9wLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdGhpcy52ZWwueSArPSBncmF2aXR5O1xuXG4gICAgICB0aGlzLnZlbC54ICo9IDAuOTU7XG4gICAgICB0aGlzLnZlbC55ICo9IDAuOTU7XG5cbiAgICAgIHRoaXMucG9zLmFkZCh0aGlzLnZlbCk7XG4gICAgfTtcblxuICAgIERyb3AucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh0aGlzLnBvcy54LCB0aGlzLnBvcy55LCAxLCAwLCBNYXRoLlBJICogMik7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgdmFyIGkgPSByYWluLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHtcblxuICAgICAgICB2YXIgcmFpbmRyb3AgPSByYWluW2ldO1xuXG4gICAgICAgIHJhaW5kcm9wLnVwZGF0ZSgpO1xuXG4gICAgICAgIGlmIChyYWluZHJvcC5wb3MueSA+PSBjYW52YXMuaGVpZ2h0KSB7XG5cbiAgICAgICAgICB2YXIgbiA9IE1hdGgucm91bmQoNCArIE1hdGgucmFuZG9tKCkgKiA0KTtcblxuICAgICAgICAgIHdoaWxlIChuLS0pXG4gICAgICAgICAgICBkcm9wcy5wdXNoKG5ldyBEcm9wKHJhaW5kcm9wLnBvcy54LCBjYW52YXMuaGVpZ2h0KSk7XG5cbiAgICAgICAgICByYWluLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJhaW5kcm9wLmRyYXcoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGkgPSBkcm9wcy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7XG5cbiAgICAgICAgdmFyIGRyb3AgPSBkcm9wc1tpXTtcbiAgICAgICAgZHJvcC51cGRhdGUoKTtcbiAgICAgICAgZHJvcC5kcmF3KCk7XG5cbiAgICAgICAgaWYgKGRyb3AucG9zLnkgPiBjYW52YXMuaGVpZ2h0KSBkcm9wcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgcmFpbl9jaGFuY2UpIHJhaW4ucHVzaChuZXcgUmFpbigpKTtcblxuICAgICAgcmVxdWVzdEFuaW1GcmFtZSh1cGRhdGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDYwLDEzNSwyMzUsMSknO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDYwLDEzNSwyMzUsMSknO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaW5pdCgpO1xuICB9XG5cbiAgc25vdygpe1xuICAgICQoXCIjd2VhdGhlclwiKS5hZGRDbGFzcyhcInNub3dpbmdcIik7XG4gIH1cblxuICBzdG9ybSgpe1xuICAgICQoXCIjc3Rvcm1DYW52YXNcIikuYXR0cihcIndpZHRoXCIsXCI4MDBcIikuYXR0cihcImhlaWdodFwiLFwiNjAwXCIpO1xuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIEFwcCwgT2JzdGFjbGUsIFBhcnRpY2xlLCBWZWN0b3IyRCxcbiAgICAgICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgICAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgICAgIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG4gICAgICBWZWN0b3IyRCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgZnVuY3Rpb24gVmVjdG9yMkQoeDEsIHkxKSB7XG4gICAgICAgICAgdGhpcy54ID0geDEgIT0gbnVsbCA/IHgxIDogMDtcbiAgICAgICAgICB0aGlzLnkgPSB5MSAhPSBudWxsID8geTEgOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgVmVjdG9yMkQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICsgdmVjdG9yLngsIHRoaXMueSArIHZlY3Rvci55KTtcbiAgICAgICAgfTtcblxuICAgICAgICBWZWN0b3IyRC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAtIHZlY3Rvci54LCB0aGlzLnkgLSB2ZWN0b3IueSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgVmVjdG9yMkQucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24obikge1xuICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICogbiwgdGhpcy55ICogbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgVmVjdG9yMkQucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAvIG4sIHRoaXMueSAvIG4pO1xuICAgICAgICB9O1xuXG4gICAgICAgIFZlY3RvcjJELnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBWZWN0b3IyRDtcblxuICAgICAgfSkoKTtcblxuICAgICAgUGFydGljbGUgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgICAgICBleHRlbmQoUGFydGljbGUsIHN1cGVyQ2xhc3MpO1xuXG4gICAgICAgIGZ1bmN0aW9uIFBhcnRpY2xlKHgsIHksIHdlaWdodCkge1xuXG4gICAgICAgICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh5ID09IG51bGwpIHtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcbiAgICAgICAgICBpZiAodGhpcy53ZWlnaHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy53ZWlnaHQgPSBNYXRoLnJhbmRvbSgpICogMjAgKyAyMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgUGFydGljbGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICBQYXJ0aWNsZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbih4MSwgeTEpIHtcbiAgICAgICAgICB0aGlzLnggPSB4MSAhPSBudWxsID8geDEgOiAwO1xuICAgICAgICAgIHRoaXMueSA9IHkxICE9IG51bGwgPyB5MSA6IDA7XG4gICAgICAgIH07XG5cbiAgICAgICAgUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHZlbFgsIHZlbFkpIHtcbiAgICAgICAgICB0aGlzLnggKz0gdmVsWDtcbiAgICAgICAgICByZXR1cm4gdGhpcy55ICs9IHZlbFk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIFBhcnRpY2xlO1xuXG4gICAgICB9KShWZWN0b3IyRCk7XG5cbiAgICAgIEFwcCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgZnVuY3Rpb24gQXBwKCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFydGljbGVzID0gYmluZCh0aGlzLnVwZGF0ZVBhcnRpY2xlcywgdGhpcyk7XG4gICAgICAgICAgdmFyIGksIGosIGs7XG4gICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3JtQ2FudmFzXCIpO1xuICAgICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICAgIHRoaXMub2JzdGFjbGVzID0gW107XG4gICAgICAgICAgdGhpcy5zdHJlbmd0aCA9IDMwMDtcbiAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICAgIHRoaXMud2luZCA9IG5ldyBWZWN0b3IyRChNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIHRoaXMuc3RyZW5ndGgsIE1hdGguc2luKHRoaXMuYW5nbGUpICogdGhpcy5zdHJlbmd0aCk7XG4gICAgICAgICAgdGhpcy53aW5kVmFyaWF0aW9uID0gMDtcbiAgICAgICAgICBmb3IgKGkgPSBrID0gMTsgayA8PSAyNTAwOyBpID0gKytrKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZShNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCwgTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudXBkYXRlUGFydGljbGVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBBcHAucHJvdG90eXBlLmNoYW5nZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMud2luZFZhcmlhdGlvbiArPSAuMDAyO1xuICAgICAgICAgIHRoaXMud2luZC54ID0gTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguY29zKHRoaXMud2luZFZhcmlhdGlvbikpICogdGhpcy5zdHJlbmd0aDtcbiAgICAgICAgICByZXR1cm4gdGhpcy53aW5kLnkgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5jb3ModGhpcy53aW5kVmFyaWF0aW9uKSkgKiB0aGlzLnN0cmVuZ3RoO1xuICAgICAgICB9O1xuXG4gICAgICAgIEFwcC5wcm90b3R5cGUudXBkYXRlUGFydGljbGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGosIGssIGxlbjEsIGxlbjIsIG9ic3RhY2xlLCBwLCByZWYsIHJlZjEsIHY7XG4gICAgICAgICAgcmVmID0gdGhpcy5wYXJ0aWNsZXM7XG4gICAgICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHJlZi5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgICAgIHAgPSByZWZbal07XG4gICAgICAgICAgICB2ID0gdGhpcy53aW5kLmNsb25lKCk7XG4gICAgICAgICAgICByZWYxID0gdGhpcy5vYnN0YWNsZXM7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBsZW4yID0gcmVmMS5sZW5ndGg7IGsgPCBsZW4yOyBrKyspIHtcbiAgICAgICAgICAgICAgb2JzdGFjbGUgPSByZWYxW2tdO1xuICAgICAgICAgICAgICB2ID0gdi5hZGQob2JzdGFjbGUuYXZvaWQocCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdiA9IHYuZGl2aWRlKHAud2VpZ2h0KTtcbiAgICAgICAgICAgIHAudXBkYXRlKHYueCwgdi55KTtcbiAgICAgICAgICAgIGlmIChwLnggPCAwKSB7XG4gICAgICAgICAgICAgIHAucmVzZXQodGhpcy53aWR0aCwgTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocC54ID4gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICBwLnJlc2V0KDAsIE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHAueSA8IDApIHtcbiAgICAgICAgICAgICAgcC5yZXNldChNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwLnkgPiB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICBwLnJlc2V0KE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICAgICAgICB0aGlzLmRyYXdQYXJ0aWNsZXMoKTtcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlUGFydGljbGVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBBcHAucHJvdG90eXBlLmRyYXdQYXJ0aWNsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaSwgaiwgbGVuLCBsZW4xLCBwLCByZWY7XG4gICAgICAgICAgcmVmID0gdGhpcy5wYXJ0aWNsZXM7XG4gICAgICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHJlZi5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgICAgIHAgPSByZWZbal07XG4gICAgICAgICAgICB0aGlzLnNldFBpeGVsKHRoaXMuZGF0YSwgcC54LCBwLnksIDIzNSwgMjAyLCA0NywgMjU1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGVuID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoO1xuICAgICAgICAgIGkgPSAzO1xuICAgICAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuZGF0YVtpXSAtPSA1MDtcbiAgICAgICAgICAgIGkgKz0gNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5kYXRhLCAwLCAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBBcHAucHJvdG90eXBlLnNldFBpeGVsID0gZnVuY3Rpb24oaW1hZ2VEYXRhLCB4LCB5LCByLCBnLCBiLCBhKSB7XG4gICAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICAgIGlmICh4IDwgMCB8fCB4ID4gdGhpcy53aWR0aCB8fCB5IDwgMCB8fCB5ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgeCA9IE1hdGgucm91bmQoeCk7XG4gICAgICAgICAgeSA9IE1hdGgucm91bmQoeSk7XG4gICAgICAgICAgaW5kZXggPSAoeCArIHkgKiBpbWFnZURhdGEud2lkdGgpICogNDtcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDBdID0gcjtcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDFdID0gZztcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDJdID0gYjtcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID0gYTtcbiAgICAgICAgICBpbmRleCA9ICgoeCArIDEpICsgKHkgKyAxKSAqIGltYWdlRGF0YS53aWR0aCkgKiA0O1xuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMF0gPSByO1xuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMV0gPSBnO1xuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMl0gPSBiO1xuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPSBhO1xuICAgICAgICAgIGluZGV4ID0gKCh4IC0gMSkgKyAoeSAtIDEpICogaW1hZ2VEYXRhLndpZHRoKSAqIDQ7XG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAwXSA9IHI7XG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAxXSA9IGc7XG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAyXSA9IGI7XG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA9IGE7XG4gICAgICAgICAgaW5kZXggPSAoKHggKyAxKSArICh5IC0gMSkgKiBpbWFnZURhdGEud2lkdGgpICogNDtcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDBdID0gcjtcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDFdID0gZztcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDJdID0gYjtcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID0gYTtcbiAgICAgICAgICBpbmRleCA9ICgoeCAtIDEpICsgKHkgKyAxKSAqIGltYWdlRGF0YS53aWR0aCkgKiA0O1xuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMF0gPSByO1xuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMV0gPSBnO1xuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMl0gPSBiO1xuICAgICAgICAgIHJldHVybiBpbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID0gYTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQXBwO1xuXG4gICAgICB9KSgpO1xuXG4gICAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFwcCgpO1xuICAgICAgfSk7XG4gICAgfSkuY2FsbCh0aGlzKTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
