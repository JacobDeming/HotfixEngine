import {Component,OnInit,OnChanges} from '@angular/core';

import {Champion} from './champion';
import {StatsService} from './stats.service';

@Component({
  selector: 'stats',
  template:`
  <div *ngIf="champion" class="container stat-container pull-left">
  <div class="row">
    <div class="col-xs-4 col-sm-4">
      <img class="thumbnail champion-icon" src="./images/champion_highwayman.png" />
    </div>
    <div class="col-xs-8 col-sm-8">
      <h4>{{champion.playerClass}}</h4>
    </div>
  </div>
  <div class="row">
    <p>Current Hitpoints: {{champion.currentHitpoints}}</p>
    <p>Physical Attack: {{champion.physicalAttack}}</p>
    <p>Physical Defense: {{champion.physicalDefense}}</p>
    <p>Special Attack: {{champion.specialAttack}}</p>
    <p>Special Defense: {{champion.specialDefense}}</p>
    <p>Dexterity: {{champion.dexterity}}</p>
    <p>Action: {{champion.action}}</p>
  </div>
  </div>
  `,
})

export class StatsComponent implements OnInit,OnChanges{

  // champion:Champion;

  constructor (private _statsService: StatsService){}

  ngOnInit(){
    this._statsService.getStats()
      .subscribe(
        champion => {
          this.champion = champion;
          this._statsService.champion = champion;
          console.log(this.champion);
        })
  }

}