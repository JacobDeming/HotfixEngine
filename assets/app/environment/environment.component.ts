import {Component,NgSwitch,NgSwitchWhen,NgSwitchDefault} from '@angular/core';
import {Champion} from '../stats/champion';
import {StatsService} from '../stats/stats.service';


@Component({
  selector: 'environment',
  template: `
  <p>Rain: {{environment.rain}}</p>
  <button (click)="change('rain')">Change Rain</button>
  <p>Fog: {{environment.fog}}</p>
  <button (click)="change('fog')">Change Fog</button>
  <p>Lightning: {{environment.lightning}}</p>
  <button (click)="change('lightning')">Change Lightning</button>
  <p>Sunshine: {{environment.sunshine}}</p>
  <button (click)="change('sunshine')">Change Sunshine</button>
  <p>Hail: {{environment.hail}}</p>
  <button (click)="change('hail')">Change Hail</button>
  <p>Wind: {{environment.wind}}</p>
  <button (click)="change('wind')">Change Wind</button>
  `,
})

export class EnvironmentComponent{
  environment={
    rain:false,
    fog:false,
    lightning:false,
    sunshine:false,
    hail:false,
    wind:false
  }

  constructor (private _statsService: StatsService){}

  change(x){
    console.log(this._statsService.champion);
    switch(x){
      case 'rain':
        if(this.environment.rain==false){
          this.environment.rain=true;
          return;
        } else {
          this.environment.rain=false;
          return;
        }
      case 'fog':
        if(this.environment.fog==false){
          this.environment.fog=true;
          return;
        } else {
          this.environment.fog=false;
          return;
        }
      case 'lightning':
        if(this.environment.lightning==false){
          this.environment.lightning=true;
          return;
        } else {
          this.environment.lightning=false;
          return;
        }
      case 'sunshine':
        if(this.environment.sunshine==false){
          this.environment.sunshine=true;
          return;
        } else {
          this.environment.sunshine=false;
          return;
        }
      case 'hail':
        if(this.environment.hail==false){
          this.environment.hail=true;
          return;
        } else {
          this.environment.hail=false;
          return;
        }
      case 'wind':
        if(this.environment.wind==false){
          this.environment.wind=true;
          return;
        } else {
          this.environment.wind=false;
          return;
        }
    }
  }
}