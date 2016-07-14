import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'environment',
  template: `
  <div *ngIf="environment">
    <p>Rain: {{(environment | async)?.rain}}</p>
    <button (click)="change('rain')">Change Rain</button>
    <p>Fog: {{(environment | async)?.fog}}</p>
    <button (click)="change('fog')">Change Fog</button>
    <p>Lightning: {{(environment | async)?.lightning}}</p>
    <button (click)="change('lightning')">Change Lightning</button>
    <p>Sunshine: {{(environment | async)?.sunshine}}</p>
    <button (click)="change('sunshine')">Change Sunshine</button>
    <p>Hail: {{(environment | async)?.hail}}</p>
    <button (click)="change('hail')">Change Hail</button>
    <p>Wind: {{(environment | async)?.wind}}</p>
    <button (click)="change('wind')">Change Wind</button>
  </div>
  `,
})

export class EnvironmentComponent{
  environment:FirebaseObjectObservable<any>;

  constructor(af:AngularFire){
     this.environment = af.database.object('/Globals/OnOff');
  }
}