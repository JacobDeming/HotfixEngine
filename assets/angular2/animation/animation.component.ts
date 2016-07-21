import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

import {Player1SpriteComponent} from './sprites/player1sprite.component';
import {Player2SpriteComponent} from './sprites/player2sprite.component';


@Component({
  selector:'animation',
  template:`
  <div id="weather-zone"></div>
  <div class="sprites-container">
    <div class="player1">
      <player1sprite></player1sprite>
    </div>
    <div class="player2">
      <player2sprite></player2sprite>
    </div>
  </div>
  `,
  directives:[Player1SpriteComponent,Player2SpriteComponent]
})

export class AnimationComponent {
  onOff:FirebaseObjectObservable<any>;
  URL:string;
  environmentSnapshot: {
    fog:boolean,
    hail:boolean,
    lightning:boolean,
    rain:boolean,
    sunshine:boolean,
    wind:boolean,
  };

  constructor (af:AngularFire){
    this.URL=window.location.href;
    this.onOff = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/OnOff',{preserveSnapshot:true});
    this.onOff.subscribe(snap =>{
      this.environmentSnapshot = snap.val()
    })
  }

}