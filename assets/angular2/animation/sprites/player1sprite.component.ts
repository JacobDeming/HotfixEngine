import {Component,ViewChild,ElementRef} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'player1sprite',
  template: `
    <canvas #myCanvas id="player1Animation"></canvas>
    `
})

export class Player1SpriteComponent{
  @ViewChild('myCanvas') canvas:ElementRef;

  timerObservable:FirebaseObjectObservable<any>;
  playerObservable:FirebaseObjectObservable<any>; 
  URL:string;
  action:string;
  class:string;
  hitpoints:number;

  constructor(af:AngularFire){
    this.URL = window.location.href;
    this.timerObservable = af.database.object('/'+this.URL.split('/game/')[1]+'/Timer',{preserveSnapshot:true});
    this.timerObservable.subscribe(snap =>{
      if(snap.val()==0){
        if (this.hitpoints > 0) {
          this.animate(this.class,this.action);
        } else {
          this.animateDefeat(this.class);
        }
      } else {
        this.animateStance(this.class);
      }
    })
    this.playerObservable = af.database.object('/'+this.URL.split('/game/')[1]+'/Players/player1',{preserveSnapshot:true});
    this.playerObservable.subscribe(snap =>{
      this.action=snap.val().action;
      this.class=snap.val().playerClass;
      this.hitpoints=snap.val().currentHitpoints;
    })
  }

  animate(playerClass,playerAction){
    /* Set up canvas variables */
    var canvas = this.canvas.nativeElement;
    var character,characterImage;
    function gameLoop(){
      window.requestAnimationFrame(gameLoop);
      character.update();
      character.render();
    }
    /* Animate based on player and action */
    switch(playerClass){
      // elementalist : piccolo
      case ("Elementalist"):
        switch(playerAction){
          case("strike"):
            // Get canvas
            canvas.width = 150;
            canvas.height = 162;
            // Create sprite sheet
            characterImage = new Image();
            // Create sprite
            character = this.sprite({
              context: canvas.getContext("2d"),
              width: 450,
              height: 162,
              image: characterImage,
              numberOfFrames: 3,
              ticksPerFrame: 4
            });
            // Load sprite sheet
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/piccolo/piccolo-punch.png";
            break;
          case("special"):
            // Get canvas
            canvas.width = 190;
            canvas.height = 162;
            // Create sprite sheet
            characterImage = new Image();
            // Create sprite
            character = this.sprite({
              context: canvas.getContext("2d"),
              width: 380,
              height: 162,
              image: characterImage,
              numberOfFrames: 2,
              ticksPerFrame: 20
            });
            // Load sprite sheet
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/piccolo/piccolo-magic.png";
            break;
          case("defend"):
            // Get canvas
            canvas.width = 120;
            canvas.height = 162;
            // Create sprite sheet
            characterImage = new Image();
            // Create sprite
            character = this.sprite({
              context: canvas.getContext("2d"),
              width: 240,
              height: 162,
              image: characterImage,
              numberOfFrames: 2,
              ticksPerFrame: 20
            });
            // Load sprite sheet
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/piccolo/piccolo-defend.png";
            break;
          default:
            this.animateStance(playerClass);
        }
        break;
      // highwayman : trunks
      case ("Highwayman"):
        switch(playerAction){
          case("strike"):
            // Get canvas
            canvas.width = 185;
            canvas.height = 162;
            // Create sprite sheet
            characterImage = new Image();
            // Create sprite
            character = this.sprite({
              context: canvas.getContext("2d"),
              width: 556,
              height: 162,
              image: characterImage,
              numberOfFrames: 3,
              ticksPerFrame: 8
            });
            // Load sprite sheet
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/trunks/trunks-punch.png";
            break;
          case("special"):
            // Get canvas
            canvas.width = 190;
            canvas.height = 162;
            // Create sprite sheet
            characterImage = new Image();
            // Create sprite
            character = this.sprite({
              context: canvas.getContext("2d"),
              width: 380,
              height: 162,
              image: characterImage,
              numberOfFrames: 2,
              ticksPerFrame: 20
            });
            // Load sprite sheet
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/trunks/trunks-magic.png";
            break;
          case("defend"):
            // Get canvas
            canvas.width = 120;
            canvas.height = 162;
            // Create sprite sheet
            characterImage = new Image();
            // Create sprite
            character = this.sprite({
              context: canvas.getContext("2d"),
              width: 240,
              height: 162,
              image: characterImage,
              numberOfFrames: 2,
              ticksPerFrame: 20
            });
            // Load sprite sheet
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/trunks/trunks-defend.png";
            break;
          default:
            this.animateStance(playerClass);
        }
        break;
      // paragon : gohan
      case ("Paragon"):
        switch(playerAction){
          case("strike"):
            // Get canvas
            canvas.width = 154;
            canvas.height = 162;
            // Create sprite sheet
            characterImage = new Image();
            // Create sprite
            character = this.sprite({
              context: canvas.getContext("2d"),
              width: 616,
              height: 162,
              image: characterImage,
              numberOfFrames: 4,
              ticksPerFrame: 8
            });
            // Load sprite sheet
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/gohan/gohan-punch.png";
            break;
          case("special"):
            // Get canvas
            canvas.width = 140;
            canvas.height = 162;
            // Create sprite sheet
            characterImage = new Image();
            // Create sprite
            character = this.sprite({
              context: canvas.getContext("2d"),
              width: 280,
              height: 162,
              image: characterImage,
              numberOfFrames: 2,
              ticksPerFrame: 20
            });
            // Load sprite sheet
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/gohan/gohan-magic.png";
            break;
          case("defend"):
            // Get canvas
            canvas.width = 120;
            canvas.height = 162;
            // Create sprite sheet
            characterImage = new Image();
            // Create sprite
            character = this.sprite({
              context: canvas.getContext("2d"),
              width: 240,
              height: 162,
              image: characterImage,
              numberOfFrames: 2,
              ticksPerFrame: 20
            });
            // Load sprite sheet
            characterImage.addEventListener("load", gameLoop);
            characterImage.src = "images/sprites/player-1/gohan/gohan-defend.png";
            break;
          default:
            this.animateStance(playerClass);
        }
        break;
    }
  }

  animateDefeat(playerClass){
    /* Set up canvas variables */
    var canvas = this.canvas.nativeElement;
    var character,characterImage;
    function gameLoop(){
      window.requestAnimationFrame(gameLoop);
      character.update();
      character.render();
    }
    switch(playerClass){
      case("Elementalist"):
        // Get canvas
        canvas.width = 167;
        canvas.height = 162;
        // Create sprite sheet
        characterImage = new Image();
        // Create sprite
        character = this.sprite({
          context: canvas.getContext("2d"),
          width: canvas.width,
          height: canvas.height,
          image: characterImage,
          numberOfFrames: 1,
          ticksPerFrame: 10
        });
        // Load sprite sheet
        characterImage.addEventListener("load", gameLoop);
        characterImage.src = "images/sprites/player-1/piccolo/piccolo-defeat.png";
        break;
      case("Highwayman"):
        // Get canvas
        canvas.width = 177;
        canvas.height = 162;
        // Create sprite sheet
        characterImage = new Image();
        // Create sprite
        character = this.sprite({
          context: canvas.getContext("2d"),
          width: canvas.width,
          height: canvas.height,
          image: characterImage,
          numberOfFrames: 1,
          ticksPerFrame: 10
        });
        // Load sprite sheet
        characterImage.addEventListener("load", gameLoop);
        characterImage.src = "images/sprites/player-1/trunks/trunks-defeat.png";
        break;
      case("Paragon"):
        // Get canvas
        canvas.width = 162;
        canvas.height = 162;
        // Create sprite sheet
        characterImage = new Image();
        // Create sprite
        character = this.sprite({
          context: canvas.getContext("2d"),
          width: canvas.width,
          height: canvas.height,
          image: characterImage,
          numberOfFrames: 1,
          ticksPerFrame: 10
        });
        // Load sprite sheet
        console.log(characterImage);
        console.log(character);
        characterImage.addEventListener("load", gameLoop);
        characterImage.src = "images/sprites/player-1/gohan/gohan-defeat.png";
        break;
    }
  }

  animateStance(playerClass){
    /* Set up canvas variables */
    var canvas = this.canvas.nativeElement;
    var character,characterImage;
    function gameLoop(){
      window.requestAnimationFrame(gameLoop);
      character.update();
      character.render();
    }
    switch(playerClass){
      case("Elementalist"):
        // Get canvas
        canvas.width = 125;
        canvas.height = 162;
        // Create sprite sheet
        characterImage = new Image();
        // Create sprite
        character = this.sprite({
          context: canvas.getContext("2d"),
          width: 331,
          height: 162,
          image: characterImage,
          numberOfFrames: 3,
          ticksPerFrame: 4,
          loop: true
        });
        // Load sprite sheet
        characterImage.addEventListener("load", gameLoop);
        characterImage.src = "images/sprites/player-1/piccolo/piccolo-standing.png";
        break;
      case("Highwayman"):
        // Get canvas
        canvas.width = 99;
        canvas.height = 162;
        // Create sprite sheet
        characterImage = new Image();
        // Create sprite
        character = this.sprite({
          context: canvas.getContext("2d"),
          width: 300,
          height: 162,
          image: characterImage,
          numberOfFrames: 3,
          ticksPerFrame: 5,
          loop: true
        });
        // Load sprite sheet
        characterImage.addEventListener("load", gameLoop);
        characterImage.src = "images/sprites/player-1/trunks/trunks-standing.png";
        break;
      case("Paragon"):
        // Get canvas
        canvas.width = 125;
        canvas.height = 162;
        // Create sprite sheet
        characterImage = new Image();
        // Create sprite
        character = this.sprite({
          context: canvas.getContext("2d"),
          width: 373,
          height: 162,
          image: characterImage,
          numberOfFrames: 4,
          ticksPerFrame: 4,
          loop: true
        });
        // Load sprite sheet
        console.log(characterImage);
        console.log(character);
        characterImage.addEventListener("load", gameLoop);
        characterImage.src = "images/sprites/player-1/gohan/gohan-standing.png";
        break;
    }
  }

  sprite(options) {
      var spriteObj = {
        context: options.context,
        width: options.width,
        height: options.height,
        image: options.image,
        loop: options.loop,
        update: function() {},
        render: function() {}
      },
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;
      
      spriteObj.update = function () {
        tickCount += 1;
        if (tickCount > ticksPerFrame) {
          tickCount = 0;
          // If the current frame index is in range
          if (frameIndex < numberOfFrames - 1) {  
              // Go to the next frame
              frameIndex += 1;
          } else if (spriteObj.loop) {
              frameIndex = 0;
          }
        }
      };

      spriteObj.render = function () {
        // Clear the canvas
        spriteObj.context.clearRect(0, 0, spriteObj.width, spriteObj.height);
        // Draw the animation
        spriteObj.context.drawImage(
          spriteObj.image,
          frameIndex * spriteObj.width / numberOfFrames,
          0,
          spriteObj.width / numberOfFrames,
          spriteObj.height,
          0,
          0,
          spriteObj.width / numberOfFrames,
          spriteObj.height);
      };

      return spriteObj;
  }

}