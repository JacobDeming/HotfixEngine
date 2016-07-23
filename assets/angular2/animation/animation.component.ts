import {Component,OnInit} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

import {Player1SpriteComponent} from './sprites/player1sprite.component';
import {Player2SpriteComponent} from './sprites/player2sprite.component';

@Component({
  selector:'animation',
  template:`
  <div class="weather-zone" id="weather">
    <canvas class="canvas" id="fogCanvas"></canvas>
    <canvas class="canvas" id="lightningCanvas"></canvas>
    <canvas class="canvas" id="rainCanvas"></canvas>
    <canvas class="canvas" id="snowCanvas"></canvas>
    <canvas class="canvas" id="stormCanvas"></canvas>
  </div>
  <div class="sprites-container">
    <div class="player1">
      <player1sprite></player1sprite>
    </div>
    <div class="player2">
      <player2sprite></player2sprite>
    </div>
  </div>
  `,
  styles:[`
    .canvas {
      min-height:100%;
      min-width:100%;
      position:absolute;
      bottom:112px;
    }
    #fogCanvas{
      opacity: 1;
      z-index: -3;
    }
    #lightningCanvas {
      overflow: hidden;
      position: absolute;
      z-index: -3;
    }
    #rainCanvas {
      z-index: -3;
    }
    #stormCanvas {
      z-index: -3;
    }

  `],
  directives:[Player1SpriteComponent,Player2SpriteComponent]
})

export class AnimationComponent implements OnInit {
  onOff:FirebaseObjectObservable<any>;
  URL:string;
  environmentSnapshot: {
    fog:boolean,
    lightning:boolean,
    quake:boolean,
    rain:boolean,
    snow:boolean,
    storm:boolean
  };

  constructor (af:AngularFire) {
    this.URL=window.location.href;
    this.onOff = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/OnOff',{preserveSnapshot:true});
    this.onOff.subscribe(snap =>{

      if(this.environmentSnapshot.fog !== snap.val().fog){
        if(snap.val().fog==true){
          this.turnOn("fog");
        } else {
          this.turnOff("fog");
        }
      }
      if(this.environmentSnapshot.lightning !== snap.val().lightning){
        if(snap.val().lightning==true){
          this.turnOn("lightning");
        } else {
          this.turnOff("lightning");
        }
      }
      if(this.environmentSnapshot.quake !== snap.val().quake){
        if(snap.val().quake==true){
          this.turnOn("quake");
        } else {
          this.turnOff("quake");
        }
      }
      if(this.environmentSnapshot.rain !== snap.val().rain){
        if(snap.val().rain==true){
          this.turnOn("rain");
        } else {
          this.turnOff("rain");
        }
      }
      if(this.environmentSnapshot.snow !== snap.val().snow){
        if(snap.val().snow==true){
          this.turnOn("snow");
        } else {
          this.turnOff("snow");
        }
      }
      if(this.environmentSnapshot.storm !== snap.val().storm){
        if(snap.val().storm==true){
          this.turnOn("storm");
        } else {
          this.turnOff("storm");
        }
      }
      /* Updates to new values */
      this.environmentSnapshot = snap.val();
    })
  }
 
  ngOnInit(){
    this.environmentSnapshot = {
      fog:false,
      lightning:false,
      quake:false,
      rain:false,
      snow:false,
      storm:false
    };

    /* Fogging */
    this.turnOff("fog");
    this.fog();

    /* Lightning */
    this.turnOff("lightning");
    this.lightning();

    /* Raining */
    this.turnOff("rain");
    this.rain();

    /* Snowing */
    this.turnOff("snow");
    this.snow();

    /* Storming */
    this.turnOff("storm");
    this.storm();
  }

  turnOn(x){
    switch(x){
      case("fog"):
        $("#fogCanvas").show();
        break;
      case("lightning"):
        $("#lightningCanvas").show();
        break;
      case("quake"):
        this.quake();
        break;
      case("rain"):
        $("#rainCanvas").show();
        break;
      case("snow"):
        $("#snowCanvas").show();
        break;
      case("storm"):
        $("#stormCanvas").show();
        break;
    }
  }

  turnOff(x){
    switch(x){
      case("fog"):
        $("#fogCanvas").hide();
        break;
      case("lightning"):
        $("#lightningCanvas").hide();
        break;
      case("quake"):
        $(".game-container").finish();
        break;
      case("rain"):
        $("#rainCanvas").hide();
        break;
      case("snow"):
        $("#snowCanvas").hide();
        break;
      case("storm"):
        $("#stormCanvas").hide();
        break;
    }
  }

  fog(){

    var canvasWidth = 1600;
    var canvasHeight = 200;
    var pCount = 0;
    var pCollection = new Array();
    var puffs = 1;
    var particlesPerPuff = 2000;
    var smokeImage = new Image();
    smokeImage.src = "images/smoke2.png";

    for (var i1 = 0; i1 < puffs; i1++) {
      var puffDelay = i1 * 10;
      for (var i2 = 0; i2 < particlesPerPuff; i2++) {
        addNewParticle((i2 * 50) + puffDelay);
      }
    }
    draw(new Date().getTime(), 3000);

    function addNewParticle(delay) {

      var p = {
        top:0,
        left:0,
        start:0,
        life:0,
        speedUp:0,
        speedRight:0,
        rot:0,
        red:0,
        blue:0,
        green:0,
        startOpacity:0,
        newTop:0,
        newLeft:0,
        size:0,
        growth:0
      };

      p.top = canvasHeight;
      p.left = randBetween(-200,800);

      p.start = new Date().getTime() + delay;
      p.life = 8000;
      p.speedUp = 30;
      p.speedRight = randBetween(0,20);

      p.rot = randBetween(-1,1);
      p.red = Math.floor(randBetween(0,255));
      p.blue = Math.floor(randBetween(0,255));
      p.green = Math.floor(randBetween(0,255));

      p.startOpacity = .3
      p.newTop = p.top;
      p.newLeft = p.left;
      p.size = 200;
      p.growth = 10;

      pCollection[pCount] = p;
      pCount++;
    }

    function draw(startT, totalT) {
      // Timing
      var timeDelta = new Date().getTime() - startT;
      var stillAlive = false;

      // Grab and clear the canvas
      var c = document.getElementById("fogCanvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      c.width = c.width;

      // Loop through particles
      for (var i = 0; i < pCount; i++) {
        //Grab the particle
        var p = pCollection[i];

        // Timing
        var td = new Date().getTime() - p.start;
        var frac = td / p.life;

        if (td > 0) {
          if (td <= p.life) {
            stillAlive = true;
          }

          // Attributes that change over time
          var newTop = p.top - (p.speedUp * (td / 1000));
          var newLeft = p.left + (p.speedRight * (td / 1000));
          var newOpacity = Math.max(p.startOpacity * (1 - frac), 0);

          var newSize = Math.floor(p.size + (p.growth * (td / 1000)));
          p.newTop = newTop;
          p.newLeft = newLeft;

          // Draw!
          ctx.fillStyle = 'rgba(150,150,150,' + newOpacity + ')';
          ctx.globalAlpha = newOpacity;
          ctx.drawImage(smokeImage, newLeft, newTop, newSize, newSize);
        } else {
          td = new Date().getTime() - p.start;
        }
      }

      // Repeat FOREVER
      requestAnimationFrame(function() {
        draw(startT, totalT);
      });
    }

    function randBetween(n1, n2) {
      var r = (Math.random() * (n2 - n1)) + n1;
      return r;
    }

    function randOffset(n, variance) {
      //e.g. variance could be 0.1 to go between 0.9 and 1.1
      var max = 1 + variance;
      var min = 1 - variance;
      var r = Math.random() * (max - min) + min;
      return n * r;
    }
  }

  lightning(){
    $("#lightningCanvas").attr("width", "960").attr("height", "720");

    (function(){
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

      setCanvasSize = function() {
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

      launchBolt = function(x, y, length, direction) {
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

      recursiveLaunchBolt = function(x, y, length, direction, boltContext) {
        var boltInterval, originalDirection;
        originalDirection = direction;
        return boltInterval = setInterval((function() {
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
              } else if (Math.random() > 0.95) {
                recursiveLaunchBolt(x1, y1, length, originalDirection + (-Math.PI / 6.0 + Math.random() * (Math.PI / 3.0)), boltContext);
                length = 0;
              }
            }
          }
          return void 0;
        }), 10);
      };

      tick = function() {
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
  }

  quake(){
    $(".game-container").effect("shake",{times:10},5000);
  }

  rain(){
    $("#rainCanvas").attr("width", "800").attr("height", "600");

    window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    var rain = [],
    drops = [];

    var gravity = 1;
    var wind = 0;
    var rain_chance = 0.4;

    var canvas = document.getElementById('rainCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = canvas.width;

    var Vector = function(x, y) {
      this.x = x || 0;
      this.y = y || 0;
    };

    Vector.prototype.add = function(v) {

      if (v.x != null && v.y != null) {
        this.x += v.x;
        this.y += v.y;
      } else {
        this.x += v;
        this.y += v;
      }

      return this;
    };

    Vector.prototype.copy = function() {
      return new Vector(this.x, this.y);
    };

    var Rain = function() {
      this.pos = new Vector(Math.random() * canvas.width, -50);
      this.prev = this.pos;
      this.vel = new Vector();
    };

    Rain.prototype.update = function() {
      this.prev = this.pos.copy();
      this.vel.y += gravity;
      this.vel.x += wind;
      this.pos.add(this.vel);
    };

    Rain.prototype.draw = function() {
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(this.prev.x, this.prev.y);
      ctx.stroke();
    };

    var Drop = function(x, y) {

      var dist = Math.random() * 7;
      var angle = Math.PI + Math.random() * Math.PI;

      this.pos = new Vector(x, y);

      this.vel = new Vector(
        Math.cos(angle) * dist,
        Math.sin(angle) * dist
      );
    };

    Drop.prototype.update = function() {

      this.vel.y += gravity;

      this.vel.x *= 0.95;
      this.vel.y *= 0.95;

      this.pos.add(this.vel);
    };

    Drop.prototype.draw = function() {

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

        if (drop.pos.y > canvas.height) drops.splice(i, 1);
      }

      if (Math.random() < rain_chance) rain.push(new Rain());

      requestAnimFrame(update);
    }

    function init() {
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(60,135,235,1)';
      ctx.fillStyle = 'rgba(60,135,235,1)';
      update();
    }

    init();
  }

  snow(){
    $("#snowCanvas").addClass("snowing");
  }

  storm(){
    $("#stormCanvas").attr("width","800").attr("height","600");

    (function() {
      var App, Obstacle, Particle, Vector2D,
        extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
        hasProp = {}.hasOwnProperty,
        bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

      Vector2D = (function() {
        function Vector2D(x1, y1) {
          this.x = x1 != null ? x1 : 0;
          this.y = y1 != null ? y1 : 0;
        }

        Vector2D.prototype.add = function(vector) {
          return new Vector2D(this.x + vector.x, this.y + vector.y);
        };

        Vector2D.prototype.subtract = function(vector) {
          return new Vector2D(this.x - vector.x, this.y - vector.y);
        };

        Vector2D.prototype.multiply = function(n) {
          return new Vector2D(this.x * n, this.y * n);
        };

        Vector2D.prototype.divide = function(n) {
          return new Vector2D(this.x / n, this.y / n);
        };

        Vector2D.prototype.clone = function() {
          return new Vector2D(this.x, this.y);
        };

        return Vector2D;

      })();

      Particle = (function(superClass) {
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

        Particle.prototype.reset = function(x1, y1) {
          this.x = x1 != null ? x1 : 0;
          this.y = y1 != null ? y1 : 0;
        };

        Particle.prototype.update = function(velX, velY) {
          this.x += velX;
          return this.y += velY;
        };

        return Particle;

      })(Vector2D);

      App = (function() {
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

        App.prototype.changeDirection = function() {
          this.windVariation += .002;
          this.wind.x = Math.sin(this.angle * Math.cos(this.windVariation)) * this.strength;
          return this.wind.y = Math.cos(this.angle * Math.cos(this.windVariation)) * this.strength;
        };

        App.prototype.updateParticles = function() {
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
            } else if (p.x > this.width) {
              p.reset(0, Math.random() * this.height);
            } else if (p.y < 0) {
              p.reset(Math.random() * this.width, this.height);
            } else if (p.y > this.height) {
              p.reset(Math.random() * this.width, 0);
            }
          }
          this.changeDirection();
          this.drawParticles();
          return requestAnimationFrame(this.updateParticles);
        };

        App.prototype.drawParticles = function() {
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

        App.prototype.setPixel = function(imageData, x, y, r, g, b, a) {
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

      $(function() {
        return new App();
      });
    }).call(this);
  }

}