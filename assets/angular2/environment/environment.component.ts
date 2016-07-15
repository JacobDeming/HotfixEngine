import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

import {Environment} from './Environment';
import {EnvironmentService} from './environment.service';

@Component({
  selector: 'environment',
  template: `
  <div *ngIf="snapshot">
    <p>Rain: {{snapshot.rain}}</p>
    <button (click)="change('rain')">Change Rain</button>
    <p>Fog: {{snapshot.fog}}</p>
    <button (click)="change('fog')">Change Fog</button>
    <p>Lightning: {{snapshot.lightning}}</p>
    <button (click)="change('lightning')">Change Lightning</button>
    <p>Sunshine: {{snapshot.sunshine}}</p>
    <button (click)="change('sunshine')">Change Sunshine</button>
    <p>Hail: {{snapshot.hail}}</p>
    <button (click)="change('hail')">Change Hail</button>
    <p>Wind: {{snapshot.wind}}</p>
    <button (click)="change('wind')">Change Wind</button>
  </div>
  `,
})

export class EnvironmentComponent{
  environment:FirebaseObjectObservable<any>;
  URL: string;
  snapshot: {
    fog:boolean,
    hail:boolean,
    lightning:boolean,
    rain:boolean,
    sunshine:boolean,
    wind:boolean,
  }

  constructor(af:AngularFire, private _environmentService:EnvironmentService){
    this.URL = window.location.href;
    this.environment = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/OnOff',{preserveSnapshot:true});
    this.environment.subscribe(snapshot =>{
      console.log(snapshot.val());
      this.snapshot = snapshot.val();
    })
  }

  change(x){
    switch(x){
      case 'rain':
        if(this.snapshot.rain==true){
          this.environment.update({rain:false})
          break;
        } else {
          this.environment.update({rain:true});
          break;
        }
      case 'fog':
          if(this.snapshot.fog==true){
            this.environment.update({fog:false})
            break;
          } else {
            this.environment.update({fog:true});
            break;
          }
      case 'lightning':
        if(this.snapshot.lightning==true){
          this.environment.update({lightning:false})
          break;
        } else {
          this.environment.update({lightning:true});
          break;
        }
      case 'sunshine':
        if(this.snapshot.sunshine==true){
          this.environment.update({sunshine:false})
          break;
        } else {
          this.environment.update({sunshine:true});
          break;
        }
      case 'hail':
        if(this.snapshot.hail==true){
          this.environment.update({hail:false})
          break;
        } else {
          this.environment.update({hail:true});
          break;
        }
      case 'wind':
        if(this.snapshot.wind==true){
          this.environment.update({wind:false})
          break;
        } else {
          this.environment.update({wind:true});
          break;
        }
    }
  }
}