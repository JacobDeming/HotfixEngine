import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';
import {Http,Headers} from '@angular/http';

declare var $:JQueryStatic;

@Component({
  selector: 'environment',
  template: `
  <div *ngIf="snapshot">
    <p>Rain: {{snapshot.rain}}</p>
    <button (click)="changeEnvironment('rain')">Change Rain</button>
    <p>Fog: {{snapshot.fog}}</p>
    <button (click)="changeEnvironment('fog')">Change Fog</button>
    <p>Lightning: {{snapshot.lightning}}</p>
    <button (click)="changeEnvironment('lightning')">Change Lightning</button>
    <p>Sunshine: {{snapshot.sunshine}}</p>
    <button (click)="changeEnvironment('sunshine')">Change Sunshine</button>
    <p>Hail: {{snapshot.hail}}</p>
    <button (click)="changeEnvironment('hail')">Change Hail</button>
    <p>Wind: {{snapshot.wind}}</p>
    <button (click)="changeEnvironment('wind')">Change Wind</button>
  </div>
  `,
})

export class EnvironmentComponent{
  onOff:FirebaseObjectObservable<any>;
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

  constructor(af:AngularFire, private _http:Http){
    this.URL = window.location.href;
    this.onOff = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/OnOff',{preserveSnapshot:true});
    this.onOff.subscribe(snapshot =>{
      this.snapshot = snapshot.val();
    })
    this.environment = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/Environment');
  }

  changeEnvironment(x){
    var aether = 1;
    var material = 1;
    var chaos = 1;
    var order = 1;
    switch(x){
      case 'rain':
        if(this.snapshot.rain==true){
          this.onOff.update({rain:false})
          break;
        } else {
          this.onOff.update({rain:true});
          break;
        }
      case 'fog':
          if(this.snapshot.fog==true){
            this.onOff.update({fog:false})
            break;
          } else {
            this.onOff.update({fog:true});
            break;
          }
      case 'lightning':
        if(this.snapshot.lightning==true){
          this.onOff.update({lightning:false})
          break;
        } else {
          this.onOff.update({lightning:true});
          break;
        }
      case 'sunshine':
        if(this.snapshot.sunshine==true){
          this.onOff.update({sunshine:false})
          break;
        } else {
          this.onOff.update({sunshine:true});
          break;
        }
      case 'hail':
        if(this.snapshot.hail==true){
          this.onOff.update({hail:false})
          break;
        } else {
          this.onOff.update({hail:true});
          break;
        }
      case 'wind':
        if(this.snapshot.wind==true){
          this.onOff.update({wind:false})
          break;
        } else {
          this.onOff.update({wind:true});
          break;
        }
    }
    if (this.snapshot.rain == true) {
        chaos += 1;
        material += 2;
    }
    if (this.snapshot.fog == true) {
        aether += 2;
        order += 1;
    }
    if (this.snapshot.lightning == true) {
        aether += 1;
        chaos += 2;
    }
    if (this.snapshot.sunshine == true) {
        order += 2;
        material += 1;
    }
    if (this.snapshot.hail == true) {
        aether += 2;
        material += 2;
    }
    if (this.snapshot.wind == true) {
        order += 2;
        chaos += 2;
    }
  this.environment.set({aether:aether,material:material,chaos:chaos,order:order})
  const body = {key:this.URL.split('/game/')[1]};
  const headers = new Headers({'Content-Type': 'application/json'});
  $.post('/update',body,function(result){
    console.log("SENT!");
  })
  }
}