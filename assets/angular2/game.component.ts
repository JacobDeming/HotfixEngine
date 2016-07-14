import {Component} from '@angular/core';

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

export class GameComponent{}