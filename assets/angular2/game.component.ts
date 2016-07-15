import {Component,OnDestroy} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

import {Player1Component} from './player1/player1.component';
import {EnvironmentComponent} from './environment/environment.component';

@Component({
  selector: 'my-app',
  template:`
  <navbar></navbar>
  <div class="container game-container">
    <player1></player1>
    <player2></player2>
    <environment></environment>
  </div>
  `,
  directives: [Player1Component,EnvironmentComponent]
})

export class GameComponent implements OnDestroy{
  room: FirebaseObjectObservable<any>;
  URL: string;

  constructor(af:AngularFire){
    this.URL = window.location.href;
    this.room = af.database.object('/'+this.URL.split('/game/')[1]);
  }

  ngOnDestroy() {this.room.remove();}
}