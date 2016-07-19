import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'stats',
  template:`
  <div *ngIf="champion" class="container stat-container pull-left">
  <div class="row">
    <div class="col-xs-4 col-sm-4">
      <img *ngIf="(champion | async)?.playerClass == 'Highwayman'" class="thumbnail champion-icon" src="./images/champion_highwayman.png" />
      <img *ngIf="(champion | async)?.playerClass == 'Paragon'" class="thumbnail champion-icon" src="./images/champion_paragon.png" />
      <img *ngIf="(champion | async)?.playerClass == 'Elementalist'" class="thumbnail champion-icon" src="###" />
    </div>
    <div class="col-xs-8 col-sm-8">
      <h3 class="playerName">{{(champion | async)?.playerName}}</h3>
      <h4>{{(champion | async)?.playerClass}}</h4>
    </div>
  </div>
  <div class="row">
    <p>Current Hitpoints: {{(champion | async)?.currentHitpoints}}</p>
    <p>Physical Attack: {{(champion | async)?.physicalAttack}}</p>
    <p>Physical Defense: {{(champion | async)?.physicalDefense}}</p>
    <p>Special Attack: {{(champion | async)?.specialAttack}}</p>
    <p>Special Defense: {{(champion | async)?.specialDefense}}</p>
    <p>Dexterity: {{(champion | async)?.dexterity}}</p>
    <p>Action: {{(champion | async)?.action}}</p>
  </div>
  </div>
  `,
})

export class StatsComponent{
  champion: FirebaseObjectObservable<any>;
  environment: FirebaseObjectObservable<any>;
  URL: string;

  constructor(af:AngularFire){
    this.URL = window.location.href;
    this.champion = af.database.object('/'+this.URL.split('/game/')[1]+'/Players/player1');
    this.environment = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/OnOff')
  }
}