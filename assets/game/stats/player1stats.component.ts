import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'player1stats',
  template:`
  <div *ngIf="champion" class="player1 stat-container pull-left">
    <div class="row">
      <div class="col-xs-4 col-sm-4">
        <img *ngIf="(champion | async)?.playerClass == 'Highwayman'" class="thumbnail champion-icon" src="./images/champion_highwayman.png" />
        <img *ngIf="(champion | async)?.playerClass == 'Paragon'" class="thumbnail champion-icon" src="./images/champion_paragon.png" />
        <img *ngIf="(champion | async)?.playerClass == 'Elementalist'" class="thumbnail champion-icon" src="./images/champion_elementalist.png" />
      </div>
      <div class="col-xs-8 col-sm-8">
        <h6>{{(champion | async)?.playerClass}}</h6>
        <h4 class="playerName">{{(champion | async)?.playerName}}</h4>
      </div>
    </div>
    <div class="row container">
      <h4>HP: <span class="action">{{(champion | async)?.currentHitpoints}}</span></h4>
      <p>Physical Attack: <span class="action">{{(champion | async)?.physicalAttack}}</span></p>
      <p>Physical Defense: <span class="action">{{(champion | async)?.physicalDefense}}</span></p>
      <p>Special Attack: <span class="action">{{(champion | async)?.specialAttack}}</span></p>
      <p>Special Defense: <span class="action">{{(champion | async)?.specialDefense}}</span></p>
      <p>Dexterity: <span class="action">{{(champion | async)?.dexterity}}</span></p>
      <p>Action: <span class="action">{{(champion | async)?.action}}</span></p>
    </div>
  </div>
  `,
  styles:[`
    .action {
      color: #29B0AE;
      text-transform: uppercase;
    }
  `]
})

export class Player1StatsComponent{
  champion: FirebaseObjectObservable<any>;
  environment: FirebaseObjectObservable<any>;
  URL: string;

  constructor(af:AngularFire){
    this.URL = window.location.href;
    this.champion = af.database.object('/'+this.URL.split('/game/')[1]+'/Players/player1');
    this.environment = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/OnOff')
  }
}