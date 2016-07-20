import { Component } from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'player1sprite',
  template: `
    <canvas id="player1Animation"></canvas>
    `
})

export class Player1SpriteComponent {
  timerObservable:FirebaseObjectObservable<any>;
  playerObservable:FirebaseObjectObservable<any>; 
  URL:string;
  action:string;
  class:string;

  constructor(af:AngularFire) {
    this.URL = window.location.href;
    this.timerObservable = af.database.object('/'+this.URL.split('/game/')[1]+'/Timer',{preserveSnapshot:true});
    this.timerObservable.subscribe(snap =>{
      if(snap.val()==0){
        // this.animate();
      } else {
        this.animateStanding();
      }
    })
    this.playerObservable = af.database.object('/'+this.URL.split('/game/')[1]+'/Players/player1',{preserveSnapshot:true});
    this.playerObservable.subscribe(snap =>{
      this.action=snap.val().action;
      this.class=snap.val().playerClass;
    })
  }

  sprite(options) {
    var spriteObj = {
      context: options.context,
      width: options.width,
      height: options.height,
      image: options.image,
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
        } else {
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

  animateStanding() {
    var character,characterImage,canvas;
    function gameLoop(){
      window.requestAnimationFrame(gameLoop);
      character.update();
      character.render();
    }
    if(this.class=="Paragon"){
      // Get canvas
      canvas = document.getElementById("player1Animation");
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
        ticksPerFrame: 4
      });
      // Load sprite sheet
      characterImage.addEventListener("load", gameLoop);
      characterImage.src = "images/sprites/player-1/gohan/gohan-standing.png";
    }
    if(this.class=="Elementalist"){
      canvas = document.getElementById("player1Animation");
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
        ticksPerFrame: 4
      });
      // Load sprite sheet
      characterImage.addEventListener("load", gameLoop);
      characterImage.src = "images/sprites/player-1/piccolo/piccolo-standing.png";
    }
    if(this.class=="Highwayman"){
      canvas = document.getElementById("player1Animation");
      canvas.width = 125;
      canvas.height = 162;
      
      // Create sprite sheet
      characterImage = new Image();  
      
      // Create sprite
      character = this.sprite({
        context: canvas.getContext("2d"),
        width: 292,
        height: 162,
        image: characterImage,
        numberOfFrames: 2.9,
        ticksPerFrame: 5
      });
      
      // Load sprite sheet
      characterImage.addEventListener("load", gameLoop);
      characterImage.src = "images/sprites/player-1/trunks/trunks-standing.png";
        }
  }

  // animateAttack() {
  //   // Get canvas
  //   canvas = document.getElementById("player1Animation");
  //   canvas.width = 133;
  //   canvas.height = 162;
  
  //   // Create sprite sheet
  //   characterImage = new Image();  
  
  //   // Create sprite
  //   character = sprite({
  //     context: canvas.getContext("2d"),
  //     width: 588,
  //     height: 162,
  //     image: characterImage,
  //     numberOfFrames: 3.9,
  //     ticksPerFrame: 8
  //   });
  
  //   // Load sprite sheet
  //   characterImage.addEventListener("load", gameLoop);
  //   characterImage.src = "images/sprites/player-1/gohan/gohan-punch.png";
  // }

}