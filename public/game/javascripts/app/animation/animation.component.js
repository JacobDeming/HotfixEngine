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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsNkJBQW1ELGNBQWMsQ0FBQyxDQUFBO0FBRWxFLHdDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pFLHdDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBZ0R6RTtJQVlFLDRCQUFhLEVBQWM7UUFaN0IsaUJBb3RCQztRQXZzQkcsSUFBSSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxnQkFBZ0IsRUFBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBRXZCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ2xELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdB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TUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0MsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ3RCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUM5QyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLENBQUM7d0JBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN2QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1osQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ25ELENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQzVCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzFD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QUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsRCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xELFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDO2dCQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFYixDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsQ0FBQyxDQUFDO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFod0JIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBQyxXQUFXO1lBQ3BCLFFBQVEsRUFBQywyZkFlUjtZQUNELE1BQU0sRUFBQyxDQUFDLHNaQXdCUCxDQUFDO1lBQ0YsVUFBVSxFQUFDLENBQUMsZ0RBQXNCLEVBQUMsZ0RBQXNCLENBQUM7U0FDM0QsQ0FBQzs7MEJBQUE7SUFzdEJGLHlCQUFDO0FBQUQsQ0FwdEJBLEFBb3RCQyxJQUFBO0FBcHRCWSwwQkFBa0IscUJBb3RCOUIsQ0FBQSIsImZpbGUiOiJhbmltYXRpb24vYW5pbWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QW5ndWxhckZpcmUsRmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlfSBmcm9tICdhbmd1bGFyZmlyZTInO1xyXG5cclxuaW1wb3J0IHtQbGF5ZXIxU3ByaXRlQ29tcG9uZW50fSBmcm9tICcuL3Nwcml0ZXMvcGxheWVyMXNwcml0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BsYXllcjJTcHJpdGVDb21wb25lbnR9IGZyb20gJy4vc3ByaXRlcy9wbGF5ZXIyc3ByaXRlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjonYW5pbWF0aW9uJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItem9uZVwiIGlkPVwid2VhdGhlclwiPlxyXG4gICAgPGNhbnZhcyBjbGFzcz1cImNhbnZhc1wiIGlkPVwiZm9nQ2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICA8Y2FudmFzIGNsYXNzPVwiY2FudmFzXCIgaWQ9XCJsaWdodG5pbmdDYW52YXNcIj48L2NhbnZhcz5cclxuICAgIDxjYW52YXMgY2xhc3M9XCJjYW52YXNcIiBpZD1cInJhaW5DYW52YXNcIj48L2NhbnZhcz5cclxuICAgIDxjYW52YXMgY2xhc3M9XCJjYW52YXNcIiBpZD1cInN0b3JtQ2FudmFzXCI+PC9jYW52YXM+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInNwcml0ZXMtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGxheWVyMVwiPlxyXG4gICAgICA8cGxheWVyMXNwcml0ZT48L3BsYXllcjFzcHJpdGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXIyXCI+XHJcbiAgICAgIDxwbGF5ZXIyc3ByaXRlPjwvcGxheWVyMnNwcml0ZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOltgXHJcbiAgICAuY2FudmFzIHtcclxuICAgICAgbWluLWhlaWdodDoxMDAlO1xyXG4gICAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbToxMTJweDtcclxuICAgIH1cclxuICAgICNmb2dDYW52YXN7XHJcbiAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgICB6LWluZGV4OiAtMztcclxuICAgIH1cclxuICAgICNsaWdodG5pbmdDYW52YXMge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IC0zO1xyXG4gICAgfVxyXG4gICAgI3JhaW5DYW52YXMge1xyXG4gICAgICB6LWluZGV4OiAtMztcclxuICAgIH1cclxuICAgICNzdG9ybUNhbnZhcyB7XHJcbiAgICAgIHotaW5kZXg6IC0zO1xyXG4gICAgfVxyXG5cclxuICBgXSxcclxuICBkaXJlY3RpdmVzOltQbGF5ZXIxU3ByaXRlQ29tcG9uZW50LFBsYXllcjJTcHJpdGVDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBvbk9mZjpGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBVUkw6c3RyaW5nO1xyXG4gIGVudmlyb25tZW50U25hcHNob3Q6IHtcclxuICAgIGZvZzpib29sZWFuLFxyXG4gICAgbGlnaHRuaW5nOmJvb2xlYW4sXHJcbiAgICBxdWFrZTpib29sZWFuLFxyXG4gICAgcmFpbjpib29sZWFuLFxyXG4gICAgc25vdzpib29sZWFuLFxyXG4gICAgc3Rvcm06Ym9vbGVhblxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yIChhZjpBbmd1bGFyRmlyZSkge1xyXG4gICAgdGhpcy5VUkw9d2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB0aGlzLm9uT2ZmID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9HbG9iYWxzL09uT2ZmJyx7cHJlc2VydmVTbmFwc2hvdDp0cnVlfSk7XHJcbiAgICB0aGlzLm9uT2ZmLnN1YnNjcmliZShzbmFwID0+e1xyXG5cclxuICAgICAgaWYodGhpcy5lbnZpcm9ubWVudFNuYXBzaG90LmZvZyAhPT0gc25hcC52YWwoKS5mb2cpe1xyXG4gICAgICAgIGlmKHNuYXAudmFsKCkuZm9nPT10cnVlKXtcclxuICAgICAgICAgIHRoaXMudHVybk9uKFwiZm9nXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnR1cm5PZmYoXCJmb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnRTbmFwc2hvdC5saWdodG5pbmcgIT09IHNuYXAudmFsKCkubGlnaHRuaW5nKXtcclxuICAgICAgICBpZihzbmFwLnZhbCgpLmxpZ2h0bmluZz09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLnR1cm5PbihcImxpZ2h0bmluZ1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50dXJuT2ZmKFwibGlnaHRuaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmVudmlyb25tZW50U25hcHNob3QucXVha2UgIT09IHNuYXAudmFsKCkucXVha2Upe1xyXG4gICAgICAgIGlmKHNuYXAudmFsKCkucXVha2U9PXRydWUpe1xyXG4gICAgICAgICAgdGhpcy50dXJuT24oXCJxdWFrZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50dXJuT2ZmKFwicXVha2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnRTbmFwc2hvdC5yYWluICE9PSBzbmFwLnZhbCgpLnJhaW4pe1xyXG4gICAgICAgIGlmKHNuYXAudmFsKCkucmFpbj09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLnR1cm5PbihcInJhaW5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHVybk9mZihcInJhaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnRTbmFwc2hvdC5zbm93ICE9PSBzbmFwLnZhbCgpLnNub3cpe1xyXG4gICAgICAgIGlmKHNuYXAudmFsKCkuc25vdz09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLnR1cm5PbihcInNub3dcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHVybk9mZihcInNub3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnRTbmFwc2hvdC5zdG9ybSAhPT0gc25hcC52YWwoKS5zdG9ybSl7XHJcbiAgICAgICAgaWYoc25hcC52YWwoKS5zdG9ybT09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLnR1cm5PbihcInN0b3JtXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnR1cm5PZmYoXCJzdG9ybVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLyogVXBkYXRlcyB0byBuZXcgdmFsdWVzICovXHJcbiAgICAgIHRoaXMuZW52aXJvbm1lbnRTbmFwc2hvdCA9IHNuYXAudmFsKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuIFxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmVudmlyb25tZW50U25hcHNob3QgPSB7XHJcbiAgICAgIGZvZzpmYWxzZSxcclxuICAgICAgbGlnaHRuaW5nOmZhbHNlLFxyXG4gICAgICBxdWFrZTpmYWxzZSxcclxuICAgICAgcmFpbjpmYWxzZSxcclxuICAgICAgc25vdzpmYWxzZSxcclxuICAgICAgc3Rvcm06ZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgLyogRm9nZ2luZyAqL1xyXG4gICAgdGhpcy50dXJuT2ZmKFwiZm9nXCIpO1xyXG4gICAgdGhpcy5mb2coKTtcclxuXHJcbiAgICAvKiBMaWdodG5pbmcgKi9cclxuICAgIHRoaXMudHVybk9mZihcImxpZ2h0bmluZ1wiKTtcclxuICAgIHRoaXMubGlnaHRuaW5nKCk7XHJcblxyXG4gICAgLyogUmFpbmluZyAqL1xyXG4gICAgdGhpcy50dXJuT2ZmKFwicmFpblwiKTtcclxuICAgIHRoaXMucmFpbigpO1xyXG5cclxuICAgIC8qIFN0b3JtaW5nICovXHJcbiAgICB0aGlzLnR1cm5PZmYoXCJzdG9ybVwiKTtcclxuICAgIHRoaXMuc3Rvcm0oKTtcclxuICB9XHJcblxyXG4gIHR1cm5Pbih4KXtcclxuICAgIHN3aXRjaCh4KXtcclxuICAgICAgY2FzZShcImZvZ1wiKTpcclxuICAgICAgICAkKFwiI2ZvZ0NhbnZhc1wiKS5zaG93KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UoXCJsaWdodG5pbmdcIik6XHJcbiAgICAgICAgJChcIiNsaWdodG5pbmdDYW52YXNcIikuc2hvdygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlKFwicXVha2VcIik6XHJcbiAgICAgICAgdGhpcy5xdWFrZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlKFwicmFpblwiKTpcclxuICAgICAgICAkKFwiI3JhaW5DYW52YXNcIikuc2hvdygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlKFwic25vd1wiKTpcclxuICAgICAgICB0aGlzLnNub3coKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInN0b3JtXCIpOlxyXG4gICAgICAgICQoXCIjc3Rvcm1DYW52YXNcIikuc2hvdygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHVybk9mZih4KXtcclxuICAgIHN3aXRjaCh4KXtcclxuICAgICAgY2FzZShcImZvZ1wiKTpcclxuICAgICAgICAkKFwiI2ZvZ0NhbnZhc1wiKS5oaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UoXCJsaWdodG5pbmdcIik6XHJcbiAgICAgICAgJChcIiNsaWdodG5pbmdDYW52YXNcIikuaGlkZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlKFwicXVha2VcIik6XHJcbiAgICAgICAgJChcIi5nYW1lLWNvbnRhaW5lclwiKS5maW5pc2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInJhaW5cIik6XHJcbiAgICAgICAgJChcIiNyYWluQ2FudmFzXCIpLmhpZGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInNub3dcIik6XHJcbiAgICAgICAgJChcIiN3ZWF0aGVyXCIpLnJlbW92ZUNsYXNzKFwic25vd2luZ1wiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZShcInN0b3JtXCIpOlxyXG4gICAgICAgICQoXCIjc3Rvcm1DYW52YXNcIikuaGlkZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9nKCl7XHJcblxyXG4gICAgdmFyIGNhbnZhc1dpZHRoID0gMTYwMDtcclxuICAgIHZhciBjYW52YXNIZWlnaHQgPSAyMDA7XHJcblxyXG4gICAgdmFyIHBDb3VudCA9IDA7XHJcbiAgICB2YXIgcENvbGxlY3Rpb24gPSBuZXcgQXJyYXkoKTtcclxuICAgIHZhciBwdWZmcyA9IDE7XHJcbiAgICB2YXIgcGFydGljbGVzUGVyUHVmZiA9IDIwMDA7XHJcbiAgICB2YXIgaW1nID0gXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby84NTI4MC9zbW9rZTIucG5nXCI7XHJcbiAgICB2YXIgc21va2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgc21va2VJbWFnZS5zcmMgPSBpbWc7XHJcblxyXG4gICAgZm9yICh2YXIgaTEgPSAwOyBpMSA8IHB1ZmZzOyBpMSsrKSB7XHJcbiAgICAgIHZhciBwdWZmRGVsYXkgPSBpMSAqIDE1MDA7IC8vMzAwIG1zIGJldHdlZW4gcHVmZnNcclxuICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IHBhcnRpY2xlc1BlclB1ZmY7IGkyKyspIHtcclxuICAgICAgICBhZGROZXdQYXJ0aWNsZSgoaTIgKiA1MCkgKyBwdWZmRGVsYXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3KG5ldyBEYXRlKCkuZ2V0VGltZSgpLCAzMDAwKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGROZXdQYXJ0aWNsZShkZWxheSkge1xyXG5cclxuICAgICAgdmFyIHAgPSB7XHJcbiAgICAgICAgdG9wOjAsXHJcbiAgICAgICAgbGVmdDowLFxyXG4gICAgICAgIHN0YXJ0OjAsXHJcbiAgICAgICAgbGlmZTowLFxyXG4gICAgICAgIHNwZWVkVXA6MCxcclxuICAgICAgICBzcGVlZFJpZ2h0OjAsXHJcbiAgICAgICAgcm90OjAsXHJcbiAgICAgICAgcmVkOjAsXHJcbiAgICAgICAgYmx1ZTowLFxyXG4gICAgICAgIGdyZWVuOjAsXHJcbiAgICAgICAgc3RhcnRPcGFjaXR5OjAsXHJcbiAgICAgICAgbmV3VG9wOjAsXHJcbiAgICAgICAgbmV3TGVmdDowLFxyXG4gICAgICAgIHNpemU6MCxcclxuICAgICAgICBncm93dGg6MFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcC50b3AgPSBjYW52YXNIZWlnaHQ7XHJcbiAgICAgIHAubGVmdCA9IHJhbmRCZXR3ZWVuKC0yMDAsODAwKTtcclxuXHJcbiAgICAgIHAuc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIGRlbGF5O1xyXG4gICAgICBwLmxpZmUgPSA4MDAwO1xyXG4gICAgICBwLnNwZWVkVXAgPSAzMDtcclxuICAgICAgcC5zcGVlZFJpZ2h0ID0gcmFuZEJldHdlZW4oMCwyMCk7XHJcblxyXG4gICAgICBwLnJvdCA9IHJhbmRCZXR3ZWVuKC0xLDEpO1xyXG4gICAgICBwLnJlZCA9IE1hdGguZmxvb3IocmFuZEJldHdlZW4oMCwyNTUpKTtcclxuICAgICAgcC5ibHVlID0gTWF0aC5mbG9vcihyYW5kQmV0d2VlbigwLDI1NSkpO1xyXG4gICAgICBwLmdyZWVuID0gTWF0aC5mbG9vcihyYW5kQmV0d2VlbigwLDI1NSkpO1xyXG5cclxuICAgICAgcC5zdGFydE9wYWNpdHkgPSAuM1xyXG4gICAgICBwLm5ld1RvcCA9IHAudG9wO1xyXG4gICAgICBwLm5ld0xlZnQgPSBwLmxlZnQ7XHJcbiAgICAgIHAuc2l6ZSA9IDIwMDtcclxuICAgICAgcC5ncm93dGggPSAxMDtcclxuXHJcbiAgICAgIHBDb2xsZWN0aW9uW3BDb3VudF0gPSBwO1xyXG4gICAgICBwQ291bnQrKztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3KHN0YXJ0VCwgdG90YWxUKSB7XHJcbiAgICAgIC8vIFRpbWluZ1xyXG4gICAgICB2YXIgdGltZURlbHRhID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFQ7XHJcbiAgICAgIHZhciBzdGlsbEFsaXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAvLyBHcmFiIGFuZCBjbGVhciB0aGUgY2FudmFzXHJcbiAgICAgIHZhciBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2dDYW52YXNcIik7XHJcbiAgICAgIHZhciBjdHggPSBjLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjLndpZHRoLCBjLmhlaWdodCk7XHJcbiAgICAgIGMud2lkdGggPSBjLndpZHRoO1xyXG5cclxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHBhcnRpY2xlc1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy9HcmFiIHRoZSBwYXJ0aWNsZVxyXG4gICAgICAgIHZhciBwID0gcENvbGxlY3Rpb25baV07XHJcblxyXG4gICAgICAgIC8vIFRpbWluZ1xyXG4gICAgICAgIHZhciB0ZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcC5zdGFydDtcclxuICAgICAgICB2YXIgZnJhYyA9IHRkIC8gcC5saWZlO1xyXG5cclxuICAgICAgICBpZiAodGQgPiAwKSB7XHJcbiAgICAgICAgICBpZiAodGQgPD0gcC5saWZlKSB7XHJcbiAgICAgICAgICAgIHN0aWxsQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIEF0dHJpYnV0ZXMgdGhhdCBjaGFuZ2Ugb3ZlciB0aW1lXHJcbiAgICAgICAgICB2YXIgbmV3VG9wID0gcC50b3AgLSAocC5zcGVlZFVwICogKHRkIC8gMTAwMCkpO1xyXG4gICAgICAgICAgdmFyIG5ld0xlZnQgPSBwLmxlZnQgKyAocC5zcGVlZFJpZ2h0ICogKHRkIC8gMTAwMCkpO1xyXG4gICAgICAgICAgdmFyIG5ld09wYWNpdHkgPSBNYXRoLm1heChwLnN0YXJ0T3BhY2l0eSAqICgxIC0gZnJhYyksIDApO1xyXG5cclxuICAgICAgICAgIHZhciBuZXdTaXplID0gcC5zaXplICsgKHAuZ3Jvd3RoICogKHRkIC8gMTAwMCkpO1xyXG4gICAgICAgICAgcC5uZXdUb3AgPSBuZXdUb3A7XHJcbiAgICAgICAgICBwLm5ld0xlZnQgPSBuZXdMZWZ0O1xyXG5cclxuICAgICAgICAgIC8vIERyYXchXHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTUwLDE1MCwxNTAsJyArIG5ld09wYWNpdHkgKyAnKSc7XHJcbiAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBuZXdPcGFjaXR5O1xyXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShzbW9rZUltYWdlLCBuZXdMZWZ0LCBuZXdUb3AsIG5ld1NpemUsIG5ld1NpemUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0ZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcC5zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlcGVhdCBpZiB0aGVyZSdzIHN0aWxsIGEgbGl2aW5nIHBhcnRpY2xlXHJcbiAgICAgIGlmIChzdGlsbEFsaXZlKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgZHJhdyhzdGFydFQsIHRvdGFsVCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByYW5kQmV0d2VlbihuMSwgbjIpIHtcclxuICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIChuMiAtIG4xKSkgKyBuMTtcclxuICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmFuZE9mZnNldChuLCB2YXJpYW5jZSkge1xyXG4gICAgICAvL2UuZy4gdmFyaWFuY2UgY291bGQgYmUgMC4xIHRvIGdvIGJldHdlZW4gMC45IGFuZCAxLjFcclxuICAgICAgdmFyIG1heCA9IDEgKyB2YXJpYW5jZTtcclxuICAgICAgdmFyIG1pbiA9IDEgLSB2YXJpYW5jZTtcclxuICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICAgIHJldHVybiBuICogcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpZ2h0bmluZygpe1xyXG4gICAgJChcIiNsaWdodG5pbmdDYW52YXNcIikuYXR0cihcIndpZHRoXCIsIFwiOTYwXCIpLmF0dHIoXCJoZWlnaHRcIiwgXCI3MjBcIik7XHJcblxyXG4gICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBib2x0RmFkZUR1cmF0aW9uLCBib2x0Rmxhc2hEdXJhdGlvbiwgYm9sdHMsIGNhbnZhcywgY29udGV4dCwgZmxhc2hPcGFjaXR5LCBmcHMsIGhlaWdodCwgbGFzdEZyYW1lLCBsYXVuY2hCb2x0LCByZWN1cnNpdmVMYXVuY2hCb2x0LCBzY2FsZSwgc2V0Q2FudmFzU2l6ZSwgdGljaywgdG90YWxCb2x0RHVyYXRpb24sIHdpZHRoO1xyXG5cclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWdodG5pbmdDYW52YXNcIik7XHJcbiAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICB3aWR0aCA9IDAuMDtcclxuICAgICAgaGVpZ2h0ID0gMC4wO1xyXG4gICAgICBzY2FsZSA9IDEuMDtcclxuICAgICAgZnBzID0gNDUuMDtcclxuICAgICAgbGFzdEZyYW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIGZsYXNoT3BhY2l0eSA9IDAuMDtcclxuICAgICAgYm9sdEZsYXNoRHVyYXRpb24gPSAwLjI1O1xyXG4gICAgICBib2x0RmFkZUR1cmF0aW9uID0gMC41O1xyXG4gICAgICB0b3RhbEJvbHREdXJhdGlvbiA9IGJvbHRGbGFzaER1cmF0aW9uICsgYm9sdEZhZGVEdXJhdGlvbjtcclxuICAgICAgYm9sdHMgPSBbXTtcclxuXHJcbiAgICAgIHNldENhbnZhc1NpemUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYm9sdCwgaiwgbGVuO1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aW5kb3cub3V0ZXJXaWR0aCk7XHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCB3aW5kb3cub3V0ZXJIZWlnaHQpO1xyXG4gICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IGJvbHRzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XHJcbiAgICAgICAgICBib2x0ID0gYm9sdHNbal07XHJcbiAgICAgICAgICBib2x0LmNhbnZhcy53aWR0aCA9IHdpbmRvdy5vdXRlcldpZHRoO1xyXG4gICAgICAgICAgYm9sdC5jYW52YXMuaGVpZ2h0ID0gd2luZG93Lm91dGVySGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aWR0aCA9IE1hdGguY2VpbCh3aW5kb3cub3V0ZXJXaWR0aCAvIHNjYWxlKTtcclxuICAgICAgICByZXR1cm4gaGVpZ2h0ID0gTWF0aC5jZWlsKHdpbmRvdy5vdXRlckhlaWdodCAvIHNjYWxlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxhdW5jaEJvbHQgPSBmdW5jdGlvbih4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHZhciBib2x0Q2FudmFzLCBib2x0Q29udGV4dDtcclxuICAgICAgICBmbGFzaE9wYWNpdHkgPSAwLjE1ICsgTWF0aC5yYW5kb20oKSAqIDAuMjtcclxuICAgICAgICBib2x0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBib2x0Q2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgYm9sdENhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgYm9sdENvbnRleHQgPSBib2x0Q2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBib2x0Q29udGV4dC5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgIGJvbHRzLnB1c2goe1xyXG4gICAgICAgICAgY2FudmFzOiBib2x0Q2FudmFzLFxyXG4gICAgICAgICAgZHVyYXRpb246IDAuMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZWN1cnNpdmVMYXVuY2hCb2x0KHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uLCBib2x0Q29udGV4dCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZWN1cnNpdmVMYXVuY2hCb2x0ID0gZnVuY3Rpb24oeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24sIGJvbHRDb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIGJvbHRJbnRlcnZhbCwgb3JpZ2luYWxEaXJlY3Rpb247XHJcbiAgICAgICAgb3JpZ2luYWxEaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIGJvbHRJbnRlcnZhbCA9IHNldEludGVydmFsKChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciBhbHBoYSwgaSwgeDEsIHkxO1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYm9sdEludGVydmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICB3aGlsZSAoaSsrIDwgTWF0aC5mbG9vcig0NSAvIHNjYWxlKSAmJiBsZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHgxID0gTWF0aC5mbG9vcih4KTtcclxuICAgICAgICAgICAgeTEgPSBNYXRoLmZsb29yKHkpO1xyXG4gICAgICAgICAgICB4ICs9IE1hdGguY29zKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIHkgLT0gTWF0aC5zaW4oZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgbGVuZ3RoLS07XHJcbiAgICAgICAgICAgIGlmICh4MSAhPT0gTWF0aC5mbG9vcih4KSB8fCB5MSAhPT0gTWF0aC5mbG9vcih5KSkge1xyXG4gICAgICAgICAgICAgIGFscGhhID0gTWF0aC5taW4oMS4wLCBsZW5ndGggLyAzNTAuMCk7XHJcbiAgICAgICAgICAgICAgYm9sdENvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIFwiICsgYWxwaGEgKyBcIilcIjtcclxuICAgICAgICAgICAgICBib2x0Q29udGV4dC5maWxsUmVjdCh4MSwgeTEsIDEuMCwgMS4wKTtcclxuICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBvcmlnaW5hbERpcmVjdGlvbiArICgtTWF0aC5QSSAvIDguMCArIE1hdGgucmFuZG9tKCkgKiAoTWF0aC5QSSAvIDQuMCkpO1xyXG4gICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC45OCkge1xyXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlTGF1bmNoQm9sdCh4MSwgeTEsIGxlbmd0aCAqICgwLjMgKyBNYXRoLnJhbmRvbSgpICogMC40KSwgb3JpZ2luYWxEaXJlY3Rpb24gKyAoLU1hdGguUEkgLyA2LjAgKyBNYXRoLnJhbmRvbSgpICogKE1hdGguUEkgLyAzLjApKSwgYm9sdENvbnRleHQpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTUpIHtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZUxhdW5jaEJvbHQoeDEsIHkxLCBsZW5ndGgsIG9yaWdpbmFsRGlyZWN0aW9uICsgKC1NYXRoLlBJIC8gNi4wICsgTWF0aC5yYW5kb20oKSAqIChNYXRoLlBJIC8gMy4wKSksIGJvbHRDb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdm9pZCAwO1xyXG4gICAgICAgIH0pLCAxMCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGJvbHQsIGVsYXBzZWQsIGZyYW1lLCBpLCBqLCBsZW4sIGxlbmd0aCwgeCwgeTtcclxuICAgICAgICBmcmFtZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGVsYXBzZWQgPSAoZnJhbWUgLSBsYXN0RnJhbWUpIC8gMTAwMC4wO1xyXG4gICAgICAgIGxhc3RGcmFtZSA9IGZyYW1lO1xyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAuMCwgMC4wLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTgpIHtcclxuICAgICAgICAgIHggPSBNYXRoLmZsb29yKC0xMC4wICsgTWF0aC5yYW5kb20oKSAqICh3aWR0aCArIDIwLjApKTtcclxuICAgICAgICAgIHkgPSBNYXRoLmZsb29yKDUuMCArIE1hdGgucmFuZG9tKCkgKiAoaGVpZ2h0IC8gMy4wKSk7XHJcbiAgICAgICAgICBsZW5ndGggPSBNYXRoLmZsb29yKGhlaWdodCAvIDIuMCArIE1hdGgucmFuZG9tKCkgKiAoaGVpZ2h0IC8gMy4wKSk7XHJcbiAgICAgICAgICBsYXVuY2hCb2x0KHgsIHksIGxlbmd0aCwgTWF0aC5QSSAqIDMuMCAvIDIuMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmbGFzaE9wYWNpdHkgPiAwLjApIHtcclxuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIFwiICsgZmxhc2hPcGFjaXR5ICsgXCIpXCI7XHJcbiAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAuMCwgMC4wLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICAgIGZsYXNoT3BhY2l0eSA9IE1hdGgubWF4KDAuMCwgZmxhc2hPcGFjaXR5IC0gMi4wICogZWxhcHNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSBib2x0cy5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcclxuICAgICAgICAgIGJvbHQgPSBib2x0c1tpXTtcclxuICAgICAgICAgIGJvbHQuZHVyYXRpb24gKz0gZWxhcHNlZDtcclxuICAgICAgICAgIGlmIChib2x0LmR1cmF0aW9uID49IHRvdGFsQm9sdER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGJvbHRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsICh0b3RhbEJvbHREdXJhdGlvbiAtIGJvbHQuZHVyYXRpb24pIC8gYm9sdEZhZGVEdXJhdGlvbikpO1xyXG4gICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoYm9sdC5jYW52YXMsIDAuMCwgMC4wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNldENhbnZhc1NpemUpO1xyXG4gICAgICBzZXRDYW52YXNTaXplKCk7XHJcbiAgICAgIHNldEludGVydmFsKHRpY2ssIDEwMDAuMCAvIGZwcyk7XHJcbiAgICB9KS5jYWxsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcXVha2UoKXtcclxuICAgICQoXCIuZ2FtZS1jb250YWluZXJcIikuZWZmZWN0KFwic2hha2VcIix7dGltZXM6MTB9LDUwMDApO1xyXG4gIH1cclxuXHJcbiAgcmFpbigpe1xyXG4gICAgJChcIiNyYWluQ2FudmFzXCIpLmF0dHIoXCJ3aWR0aFwiLCBcIjgwMFwiKS5hdHRyKFwiaGVpZ2h0XCIsIFwiNjAwXCIpO1xyXG5cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID1cclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgdmFyIHJhaW4gPSBbXSxcclxuICAgIGRyb3BzID0gW107XHJcblxyXG4gICAgdmFyIGdyYXZpdHkgPSAxO1xyXG4gICAgdmFyIHdpbmQgPSAwO1xyXG4gICAgdmFyIHJhaW5fY2hhbmNlID0gMC40O1xyXG5cclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbkNhbnZhcycpO1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoO1xyXG5cclxuICAgIHZhciBWZWN0b3IgPSBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgfTtcclxuXHJcbiAgICBWZWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHYpIHtcclxuXHJcbiAgICAgIGlmICh2LnggIT0gbnVsbCAmJiB2LnkgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICAgICAgdGhpcy55ICs9IHYueTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnggKz0gdjtcclxuICAgICAgICB0aGlzLnkgKz0gdjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIFZlY3Rvci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBSYWluID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMucG9zID0gbmV3IFZlY3RvcihNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoLCAtNTApO1xyXG4gICAgICB0aGlzLnByZXYgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy52ZWwgPSBuZXcgVmVjdG9yKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIFJhaW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnByZXYgPSB0aGlzLnBvcy5jb3B5KCk7XHJcbiAgICAgIHRoaXMudmVsLnkgKz0gZ3Jhdml0eTtcclxuICAgICAgdGhpcy52ZWwueCArPSB3aW5kO1xyXG4gICAgICB0aGlzLnBvcy5hZGQodGhpcy52ZWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBSYWluLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbyh0aGlzLnBvcy54LCB0aGlzLnBvcy55KTtcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLnByZXYueCwgdGhpcy5wcmV2LnkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBEcm9wID0gZnVuY3Rpb24oeCwgeSkge1xyXG5cclxuICAgICAgdmFyIGRpc3QgPSBNYXRoLnJhbmRvbSgpICogNztcclxuICAgICAgdmFyIGFuZ2xlID0gTWF0aC5QSSArIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xyXG5cclxuICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKHgsIHkpO1xyXG5cclxuICAgICAgdGhpcy52ZWwgPSBuZXcgVmVjdG9yKFxyXG4gICAgICAgIE1hdGguY29zKGFuZ2xlKSAqIGRpc3QsXHJcbiAgICAgICAgTWF0aC5zaW4oYW5nbGUpICogZGlzdFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBEcm9wLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIHRoaXMudmVsLnkgKz0gZ3Jhdml0eTtcclxuXHJcbiAgICAgIHRoaXMudmVsLnggKj0gMC45NTtcclxuICAgICAgdGhpcy52ZWwueSAqPSAwLjk1O1xyXG5cclxuICAgICAgdGhpcy5wb3MuYWRkKHRoaXMudmVsKTtcclxuICAgIH07XHJcblxyXG4gICAgRHJvcC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHRoaXMucG9zLngsIHRoaXMucG9zLnksIDEsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xyXG5cclxuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgdmFyIGkgPSByYWluLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGktLSkge1xyXG5cclxuICAgICAgICB2YXIgcmFpbmRyb3AgPSByYWluW2ldO1xyXG5cclxuICAgICAgICByYWluZHJvcC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHJhaW5kcm9wLnBvcy55ID49IGNhbnZhcy5oZWlnaHQpIHtcclxuXHJcbiAgICAgICAgICB2YXIgbiA9IE1hdGgucm91bmQoNCArIE1hdGgucmFuZG9tKCkgKiA0KTtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobi0tKVxyXG4gICAgICAgICAgICBkcm9wcy5wdXNoKG5ldyBEcm9wKHJhaW5kcm9wLnBvcy54LCBjYW52YXMuaGVpZ2h0KSk7XHJcblxyXG4gICAgICAgICAgcmFpbi5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByYWluZHJvcC5kcmF3KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBpID0gZHJvcHMubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcblxyXG4gICAgICAgIHZhciBkcm9wID0gZHJvcHNbaV07XHJcbiAgICAgICAgZHJvcC51cGRhdGUoKTtcclxuICAgICAgICBkcm9wLmRyYXcoKTtcclxuXHJcbiAgICAgICAgaWYgKGRyb3AucG9zLnkgPiBjYW52YXMuaGVpZ2h0KSBkcm9wcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgcmFpbl9jaGFuY2UpIHJhaW4ucHVzaChuZXcgUmFpbigpKTtcclxuXHJcbiAgICAgIHJlcXVlc3RBbmltRnJhbWUodXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoNjAsMTM1LDIzNSwxKSc7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg2MCwxMzUsMjM1LDEpJztcclxuICAgICAgdXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgc25vdygpe1xyXG4gICAgJChcIiN3ZWF0aGVyXCIpLmFkZENsYXNzKFwic25vd2luZ1wiKTtcclxuICB9XHJcblxyXG4gIHN0b3JtKCl7XHJcbiAgICAkKFwiI3N0b3JtQ2FudmFzXCIpLmF0dHIoXCJ3aWR0aFwiLFwiODAwXCIpLmF0dHIoXCJoZWlnaHRcIixcIjYwMFwiKTtcclxuXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBBcHAsIE9ic3RhY2xlLCBQYXJ0aWNsZSwgVmVjdG9yMkQsXHJcbiAgICAgICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxyXG4gICAgICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcclxuICAgICAgICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcclxuXHJcbiAgICAgIFZlY3RvcjJEID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIFZlY3RvcjJEKHgxLCB5MSkge1xyXG4gICAgICAgICAgdGhpcy54ID0geDEgIT0gbnVsbCA/IHgxIDogMDtcclxuICAgICAgICAgIHRoaXMueSA9IHkxICE9IG51bGwgPyB5MSA6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBWZWN0b3IyRC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24odmVjdG9yKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCArIHZlY3Rvci54LCB0aGlzLnkgKyB2ZWN0b3IueSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgVmVjdG9yMkQucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24odmVjdG9yKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAtIHZlY3Rvci54LCB0aGlzLnkgLSB2ZWN0b3IueSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgVmVjdG9yMkQucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24obikge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggKiBuLCB0aGlzLnkgKiBuKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBWZWN0b3IyRC5wcm90b3R5cGUuZGl2aWRlID0gZnVuY3Rpb24obikge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggLyBuLCB0aGlzLnkgLyBuKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBWZWN0b3IyRC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBWZWN0b3IyRDtcclxuXHJcbiAgICAgIH0pKCk7XHJcblxyXG4gICAgICBQYXJ0aWNsZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XHJcbiAgICAgICAgZXh0ZW5kKFBhcnRpY2xlLCBzdXBlckNsYXNzKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gUGFydGljbGUoeCwgeSwgd2VpZ2h0KSB7XHJcblxyXG4gICAgICAgICAgaWYgKHggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB4ID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh5ID09IG51bGwpIHtcclxuICAgICAgICAgICAgeSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcclxuICAgICAgICAgIGlmICh0aGlzLndlaWdodCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2VpZ2h0ID0gTWF0aC5yYW5kb20oKSAqIDIwICsgMjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBQYXJ0aWNsZS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCB4LCB5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFBhcnRpY2xlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKHgxLCB5MSkge1xyXG4gICAgICAgICAgdGhpcy54ID0geDEgIT0gbnVsbCA/IHgxIDogMDtcclxuICAgICAgICAgIHRoaXMueSA9IHkxICE9IG51bGwgPyB5MSA6IDA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHZlbFgsIHZlbFkpIHtcclxuICAgICAgICAgIHRoaXMueCArPSB2ZWxYO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMueSArPSB2ZWxZO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBQYXJ0aWNsZTtcclxuXHJcbiAgICAgIH0pKFZlY3RvcjJEKTtcclxuXHJcbiAgICAgIEFwcCA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhcnRpY2xlcyA9IGJpbmQodGhpcy51cGRhdGVQYXJ0aWNsZXMsIHRoaXMpO1xyXG4gICAgICAgICAgdmFyIGksIGosIGs7XHJcbiAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rvcm1DYW52YXNcIik7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgIHRoaXMucGFydGljbGVzID0gW107XHJcbiAgICAgICAgICB0aGlzLm9ic3RhY2xlcyA9IFtdO1xyXG4gICAgICAgICAgdGhpcy5zdHJlbmd0aCA9IDMwMDtcclxuICAgICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICB0aGlzLndpbmQgPSBuZXcgVmVjdG9yMkQoTWF0aC5jb3ModGhpcy5hbmdsZSkgKiB0aGlzLnN0cmVuZ3RoLCBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIHRoaXMuc3RyZW5ndGgpO1xyXG4gICAgICAgICAgdGhpcy53aW5kVmFyaWF0aW9uID0gMDtcclxuICAgICAgICAgIGZvciAoaSA9IGsgPSAxOyBrIDw9IDI1MDA7IGkgPSArK2spIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgsIE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy51cGRhdGVQYXJ0aWNsZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFwcC5wcm90b3R5cGUuY2hhbmdlRGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLndpbmRWYXJpYXRpb24gKz0gLjAwMjtcclxuICAgICAgICAgIHRoaXMud2luZC54ID0gTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguY29zKHRoaXMud2luZFZhcmlhdGlvbikpICogdGhpcy5zdHJlbmd0aDtcclxuICAgICAgICAgIHJldHVybiB0aGlzLndpbmQueSA9IE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLmNvcyh0aGlzLndpbmRWYXJpYXRpb24pKSAqIHRoaXMuc3RyZW5ndGg7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgQXBwLnByb3RvdHlwZS51cGRhdGVQYXJ0aWNsZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciBqLCBrLCBsZW4xLCBsZW4yLCBvYnN0YWNsZSwgcCwgcmVmLCByZWYxLCB2O1xyXG4gICAgICAgICAgcmVmID0gdGhpcy5wYXJ0aWNsZXM7XHJcbiAgICAgICAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xyXG4gICAgICAgICAgICBwID0gcmVmW2pdO1xyXG4gICAgICAgICAgICB2ID0gdGhpcy53aW5kLmNsb25lKCk7XHJcbiAgICAgICAgICAgIHJlZjEgPSB0aGlzLm9ic3RhY2xlcztcclxuICAgICAgICAgICAgZm9yIChrID0gMCwgbGVuMiA9IHJlZjEubGVuZ3RoOyBrIDwgbGVuMjsgaysrKSB7XHJcbiAgICAgICAgICAgICAgb2JzdGFjbGUgPSByZWYxW2tdO1xyXG4gICAgICAgICAgICAgIHYgPSB2LmFkZChvYnN0YWNsZS5hdm9pZChwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdiA9IHYuZGl2aWRlKHAud2VpZ2h0KTtcclxuICAgICAgICAgICAgcC51cGRhdGUodi54LCB2LnkpO1xyXG4gICAgICAgICAgICBpZiAocC54IDwgMCkge1xyXG4gICAgICAgICAgICAgIHAucmVzZXQodGhpcy53aWR0aCwgTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwLnggPiB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgcC5yZXNldCgwLCBNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHAueSA8IDApIHtcclxuICAgICAgICAgICAgICBwLnJlc2V0KE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocC55ID4gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICBwLnJlc2V0KE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oKTtcclxuICAgICAgICAgIHRoaXMuZHJhd1BhcnRpY2xlcygpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVBhcnRpY2xlcyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgQXBwLnByb3RvdHlwZS5kcmF3UGFydGljbGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgaSwgaiwgbGVuLCBsZW4xLCBwLCByZWY7XHJcbiAgICAgICAgICByZWYgPSB0aGlzLnBhcnRpY2xlcztcclxuICAgICAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XHJcbiAgICAgICAgICAgIHAgPSByZWZbal07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGl4ZWwodGhpcy5kYXRhLCBwLngsIHAueSwgMjM1LCAyMDIsIDQ3LCAyNTUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGVuID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgaSA9IDM7XHJcbiAgICAgICAgICB3aGlsZSAoaSA8IGxlbikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZGF0YVtpXSAtPSA1MDtcclxuICAgICAgICAgICAgaSArPSA0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5kYXRhLCAwLCAwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBBcHAucHJvdG90eXBlLnNldFBpeGVsID0gZnVuY3Rpb24oaW1hZ2VEYXRhLCB4LCB5LCByLCBnLCBiLCBhKSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXg7XHJcbiAgICAgICAgICBpZiAoeCA8IDAgfHwgeCA+IHRoaXMud2lkdGggfHwgeSA8IDAgfHwgeSA+IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHggPSBNYXRoLnJvdW5kKHgpO1xyXG4gICAgICAgICAgeSA9IE1hdGgucm91bmQoeSk7XHJcbiAgICAgICAgICBpbmRleCA9ICh4ICsgeSAqIGltYWdlRGF0YS53aWR0aCkgKiA0O1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAwXSA9IHI7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDFdID0gZztcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMl0gPSBiO1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA9IGE7XHJcbiAgICAgICAgICBpbmRleCA9ICgoeCArIDEpICsgKHkgKyAxKSAqIGltYWdlRGF0YS53aWR0aCkgKiA0O1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAwXSA9IHI7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDFdID0gZztcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMl0gPSBiO1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA9IGE7XHJcbiAgICAgICAgICBpbmRleCA9ICgoeCAtIDEpICsgKHkgLSAxKSAqIGltYWdlRGF0YS53aWR0aCkgKiA0O1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAwXSA9IHI7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDFdID0gZztcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMl0gPSBiO1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA9IGE7XHJcbiAgICAgICAgICBpbmRleCA9ICgoeCArIDEpICsgKHkgLSAxKSAqIGltYWdlRGF0YS53aWR0aCkgKiA0O1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAwXSA9IHI7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDFdID0gZztcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMl0gPSBiO1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA9IGE7XHJcbiAgICAgICAgICBpbmRleCA9ICgoeCAtIDEpICsgKHkgKyAxKSAqIGltYWdlRGF0YS53aWR0aCkgKiA0O1xyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAwXSA9IHI7XHJcbiAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpbmRleCArIDFdID0gZztcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgMl0gPSBiO1xyXG4gICAgICAgICAgcmV0dXJuIGltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPSBhO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBBcHA7XHJcblxyXG4gICAgICB9KSgpO1xyXG5cclxuICAgICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFwcCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pLmNhbGwodGhpcyk7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
