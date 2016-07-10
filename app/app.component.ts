import { Component } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { GameComponent } from './game.component';
import { GameControllerComponent } from './game-controller.component';

@Component({
  selector: 'app',
  template: `
    <navbar></navbar>
    <game></game>
    <game-controller></game-controller>
  `,
  directives: [
    NavbarComponent,
    GameComponent,
    GameControllerComponent
  ]
})

export class AppComponent { }