import { Component } from '@angular/core';

import { Player1Component } from './player1.component';

@Component({
  selector: 'game',
  templateUrl: 'app/game.component.html',
  directives: [
    Player1Component
  ]
})

export class GameComponent { 

}