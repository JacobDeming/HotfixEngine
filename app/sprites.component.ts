import { Component } from '@angular/core';

@Component({
  selector: 'sprites',
  template: `
    <div class="container sprites-container">
      <canvas id="characterAnimation"></canvas>
    </div>
    
    <div class="row">
      <button type="button" (click)="animateStanding()">Standing</button>
      <button type="button" id="attack">Attack</button>
      <button type="button" id="magic">Magic</button>
      <button type="button" id="damage">Damage</button>
      <button type="button" id="defeat">Defeated</button>
    </div>
    `
})

export class SpritesComponent { 
  characterAction: string

  constructor() {

  }

  animateStanding() {
    var character,
      characterImage,
      canvas;

    function gameLoop() {
      window.requestAnimationFrame(gameLoop);
      character.update();
      character.render();
    }
  
    function sprite(options) {
      var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;
      
      that.context = options.context;
      that.width = options.width;
      that.height = options.height;
      that.image = options.image;
      
      that.update = function () {
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
      
      that.render = function () {
    
      // Clear the canvas
      that.context.clearRect(0, 0, that.width, that.height);
      
      // Draw the animation
      that.context.drawImage(
        that.image,
        frameIndex * that.width / numberOfFrames,
        0,
        that.width / numberOfFrames,
        that.height,
        0,
        0,
        that.width / numberOfFrames,
        that.height);
      };
      return that;
    }
  
    // Get canvas
    canvas = document.getElementById("characterAnimation");
    canvas.width = 125;
    canvas.height = 162;
  
    // Create sprite sheet
    characterImage = new Image();  
  
    // Create sprite
    character = sprite({
      context: canvas.getContext("2d"),
      width: 373,
      height: 162,
      image: characterImage,
      numberOfFrames: 4,
      ticksPerFrame: 4
    });
  
    // Load sprite sheet
    characterImage.addEventListener("load", gameLoop);
    characterImage.src = "app/sprites/player-1/gohan/gohan-standing.png";
  }

}