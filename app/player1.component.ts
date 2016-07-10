import { Component } from '@angular/core';

import { StatsComponent } from './stats.component';
import { SpritesComponent } from './sprites.component';

@Component({
  selector: 'player1',
  templateUrl: 'app/player1.component.html',
  directives: [
    StatsComponent,
    SpritesComponent
  ]
})

export class Player1Component { }