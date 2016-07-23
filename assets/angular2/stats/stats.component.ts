import {Component} from '@angular/core';

import {TimerComponent} from '../timer/timer.component';
import {Player1StatsComponent} from './player1stats.component';
import {Player2StatsComponent} from './player2stats.component';

@Component({
  selector: 'stats',
  template:`
  	<div class="row stats-wrapper">
	  	<player1stats></player1stats>
	  	<player2stats></player2stats>
  	</div>
  	<timer></timer>
  `,
  directives: [TimerComponent,Player1StatsComponent,Player2StatsComponent]
})

export class StatsComponent {}