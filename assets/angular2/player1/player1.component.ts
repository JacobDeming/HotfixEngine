import { Component } from '@angular/core';

import {StatsComponent} from './stats/stats.component';
import {SpritesComponent} from './sprites.component';

@Component({
  selector: 'player1',
  template:`
  <stats></stats>
  <sprites></sprites>
  `,
  directives: [StatsComponent,SpritesComponent]
})

export class Player1Component {}