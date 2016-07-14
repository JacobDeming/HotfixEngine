import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'stats',
  template:`
  <div *ngIf="champion" class="container stat-container pull-left">
  <div class="row">
    <div class="col-xs-4 col-sm-4">
      <img class="thumbnail champion-icon" src="./images/champion_highwayman.png" />
    </div>
    <div class="col-xs-8 col-sm-8">
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
  playerClass: string;

  constructor(af:AngularFire){
    this.playerClass="Highwayman";
    this.champion = af.database.object('/Players/'+this.playerClass);
  }
}