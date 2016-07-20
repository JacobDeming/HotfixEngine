import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

import {TimerComponent} from './timer/timer.component';
import {Player1Component} from './player1/player1.component';
import {Player2Component} from './player2/player2.component';
import {EnvironmentComponent} from './environment/environment.component';
import {AnimationComponent} from './animation/animation.component';

@Component({
  selector: 'my-app',
  template:`
  <div class="game-container">
    <div class="container">
      <player1 class="col-lg-4"></player1>
      <timer class="col-lg-4"></timer>
      <player2 class="col-lg-4"></player2>
    </div>
    <div class="container">
      <animation></animation>
    </div>
  </div>
  <div class="env-container">
    <environment></environment>
  </div>
  `,
  directives: [Player1Component,Player2Component,EnvironmentComponent,TimerComponent,AnimationComponent]
})

export class GameComponent{
  room: FirebaseObjectObservable<any>;
  URL: string;

  constructor(af:AngularFire){
    this.URL = window.location.href;
    this.room = af.database.object('/'+this.URL.split('/game/')[1]);
  }

}