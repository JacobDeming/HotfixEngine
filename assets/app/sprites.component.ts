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