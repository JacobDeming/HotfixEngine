import { Component } from '@angular/core';

import {StatsComponent} from './stats/stats.component';
import {SpritesComponent} from './sprites.component';

@Component({
  selector: 'player2',
  template:`
  <stats></stats>
  <sprites></sprites>
  `,
  directives: [StatsComponent]
})

export class Player2Component {}