import {Component,Renderer,ElementRef} from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';
import {Http,Headers} from '@angular/http';

declare var $:JQueryStatic;

@Component({
  selector: 'environment',
  template: `
  <!--
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
  //-->

  <div class="container">
    <div class="col-sm-6 pull-left">
      <p>
        To play, press key to turn on/off:<br>
        [a] FOG; [s] HAIL; [d] LIGHTNING; [f] RAIN; [g] SUNSHINE; [h] WIND.</p>
    </div>
    <div class="col-sm-6 pull-right envBtns" *ngIf="environment">
      <div class="envBtnWrapper" (click)="toggleBtn('fog')" [ngSwitch]="values.fog">
        <div *ngSwitchCase="'true'" class="envBtn active">
          <img src="./images/env_btn/env_fog_on.png"></div>
        <div *ngSwitchCase="'false'" class="envBtn">
          <img src="./images/env_btn/env_fog.png"></div>
        <p class="imgDescription">Fog</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('hail')" [ngSwitch]="values.hail">
        <div *ngSwitchCase="'true'" class="envBtn active">
          <img src="./images/env_btn/env_hail_on.png"></div>
        <div *ngSwitchCase="'false'" class="envBtn">
          <img src="./images/env_btn/env_hail.png"></div>
        <p class="imgDescription">Hail</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('lightning')" [ngSwitch]="values.lightning">
        <div *ngSwitchCase="'true'" class="envBtn active">
          <img src="./images/env_btn/env_lightning_on.png"></div>
        <div *ngSwitchCase="'false'" class="envBtn">
          <img src="./images/env_btn/env_lightning.png"></div>
        <p class="imgDescription">Lightning</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('rain')" [ngSwitch]="values.rain">
        <div *ngSwitchCase="'true'" class="envBtn active">
          <img src="./images/env_btn/env_rain_on.png"></div>
        <div *ngSwitchCase="'false'" class="envBtn">
          <img src="./images/env_btn/env_rain.png"></div>
        <p class="imgDescription">Rain</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('sunshine')" [ngSwitch]="values.sunshine">
        <div *ngSwitchCase="'true'" class="envBtn active">
          <img src="./images/env_btn/env_sun_on.png"></div>
        <div *ngSwitchCase="'false'" class="envBtn">
          <img src="./images/env_btn/env_sun.png"></div>
        <p class="imgDescription">Sunshine</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('wind')" [ngSwitch]="values.wind">
        <div *ngSwitchCase="'true'" class="envBtn active">
          <img src="./images/env_btn/env_wind_on.png"></div>
        <div *ngSwitchCase="'false'" class="envBtn">
          <img src="./images/env_btn/env_wind.png"></div>
        <p class="imgDescription">Wind</p>
      </div>
    </div>
  </div>
  `,
  styles: [`
    @media (max-width: 736px) {
      .envBtns {
        display: none;
      }
    }
    .envBtnWrapper {
      display: inline-block;
      background: transparent;
      margin-left: 15px;
    }
    .envBtn {
      background-color: #29b0ae;
      border: none;
      width: 64px;
      height: 64px;
      padding: 10px;
      position: relative;
      text-align: center;
      vertical-align: middle;
      text-decoration: uppercase;
      color: #fff;
      background-image: linear-gradient(bottom, rgb(41,144,176) 0%, rgb(113,222,220) 100%);
      background-image: -o-linear-gradient(bottom, rgb(41,144,176) 0%, rgb(113,222,220) 100%);
      background-image: -moz-linear-gradient(bottom, rgb(41,144,176) 0%, rgb(113,222,220) 100%);
      background-image: -webkit-linear-gradient(bottom, rgb(41,144,176) 0%, rgb(113,222,220) 100%);
      background-image: -ms-linear-gradient(bottom, rgb(41,144,176) 0%, rgb(113,222,220) 100%);
      background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, rgb(41,144,176)),
      color-stop(1, rgb(113,222,220))
      );
      -webkit-box-shadow: inset 0px 1px 0px #71dedc, 0px 6px 0px #164f60;
      -moz-box-shadow: inset 0px 1px 0px #71dedc, 0px 6px 0px #164f60;
      -o-box-shadow: inset 0px 1px 0px #71dedc, 0px 6px 0px #164f60;
      box-shadow: inset 0px 1px 0px #71dedc, 0px 6px 0px #164f60;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      -o-border-radius: 5px;
      border-radius: 5px;
    }
    .envBtn.active, .envBtn:active {
      color: #2990b0;
      text-shadow: 0px 1px 1px rgba(255,255,255,0.3);
      background: rgb(41,144,176);
      -webkit-box-shadow: inset 0px 1px 0px #71dedc, inset 0px -1px 0px #164f60;
      -moz-box-shadow: inset 0px 1px 0px #71dedc, inset 0px -1px 0px #164f60;
      -o-box-shadow: inset 0px 1px 0px #71dedc, inset 0px -1px 0px #164f60;
      box-shadow: inset 0px 1px 0px #71dedc, inset 0px -1px 0px #164f60;
      top: 2px;
    }
    .envBtn img {
      width: 100%;
      height: 100%;
    }
    .envBtnWrapper .imgDescription {
      position: absolute;
      background: transparent;
      padding-top: 2px;
      color: #fff;
      text-transform: uppercase;
      visibility: hidden;
      opacity: 0;
      -webkit-transition: visibility opacity 0.2s;
      transition: visibility opacity 0.2s;
    }
    .envBtnWrapper:hover .imgDescription {
      visibility: visible;
      opacity: 1;
    }
  `],
  directives: [NgSwitch, NgSwitchCase, NgSwitchDefault]
})

export class EnvironmentComponent {
  onOff:FirebaseObjectObservable<any>;
  environment:FirebaseObjectObservable<any>;
  URL:string;
  snapshot: {
    fog:boolean,
    hail:boolean,
    lightning:boolean,
    rain:boolean,
    sunshine:boolean,
    wind:boolean,
  }
  getKey:Function;

  constructor(af:AngularFire, private _http:Http, renderer: Renderer){
    this.URL = window.location.href;
    this.onOff = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/OnOff',{preserveSnapshot:true});
    this.onOff.subscribe(snapshot =>{
      this.snapshot = snapshot.val();
    })
    this.environment = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/Environment');

    /* Gets keyup */
    this.getKey = renderer.listenGlobal('document', 'keyup', (event) => {
      var key = event.keyCode;
      this.toggleBtn(key);
    });
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




  // for testing only, needs to be set to values from firebase
  values = {
    fog: 'false',
    hail: 'false',
    lightning: 'false',
    rain: 'false',
    sunshine: 'false',
    wind: 'false',
  };

  toggleBtn(key) {
    // a
    if (key == '65' || key == 'fog') {
      this.values.fog = this.values.fog === 'true' ? 'false' : 'true';
    }
    // s
    if (key == '83' || key == 'hail') {
      this.values.hail = this.values.hail === 'true' ? 'false' : 'true';
    }
    // d
    if (key == '68' || key == 'lightning') {
      this.values.lightning = this.values.lightning === 'true' ? 'false' : 'true';
    }
    // f
    if (key == '70' || key == 'rain') {
      this.values.rain = this.values.rain === 'true' ? 'false' : 'true';
    }
    // g
    if (key == '71' || key == 'sunshine') {
      this.values.sunshine = this.values.sunshine === 'true' ? 'false' : 'true';
    }
    // h
    if (key == '72' || key == 'wind') {
      this.values.wind = this.values.wind === 'true' ? 'false' : 'true';
    }
  }
}