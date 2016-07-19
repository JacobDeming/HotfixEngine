import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

import {Player1SpriteComponent} from './sprites/player1sprite.component';
import {Player2SpriteComponent} from './sprites/player2sprite.component';


@Component({
  selector:'animation',
  template:`
  <div class="row">
    <div class="col-lg-10 col-lg-offset-1 WeatherZone">
      <player1sprite style="display:inline"></player1sprite>
      <player2sprite style="display:inline"></player2sprite>
    </div>
  </div>
  `,
  directives:[Player1SpriteComponent,Player2SpriteComponent]
})

export class AnimationComponent{
  
}