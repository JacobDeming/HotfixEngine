import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

import {NavbarComponent} from './navbar/navbar.component';
import {StatsComponent} from './stats/stats.component';
import {AnimationComponent} from './animation/animation.component';
import {EnvironmentComponent} from './environment/environment.component';


@Component({
  selector: 'my-app',
  template:`
  <navbar></navbar>
  <div class="game-container">
    <stats></stats>
    <animation></animation>
  </div>
  <div class="env-container">
    <environment></environment>
  </div>
  `,
  directives: [NavbarComponent,StatsComponent,AnimationComponent,EnvironmentComponent]
})

export class GameComponent{
  room: FirebaseObjectObservable<any>;
  URL: string;

  constructor(af:AngularFire){
    this.URL = window.location.href;
    this.room = af.database.object('/'+this.URL.split('/game/')[1]);
  }

}