import {Component,Renderer,ElementRef} from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

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

  <div *ngIf="environmentSnapshot" class="container">
    <div class="col-sm-6 pull-left">
      <p>
        To play, press key to turn on/off:<br>
        [A] FOG; [S] HAIL; [D] LIGHTNING; [F] RAIN; [G] SUNSHINE; [H] WIND.</p>
    </div>
    <div class="col-sm-6 pull-right envBtns" *ngIf="environment">
      <div class="envBtnWrapper" (click)="toggleBtn('fog')" [ngSwitch]="environmentSnapshot.fog">
        <div *ngSwitchCase='true' class="envBtn active">
          <img src="./images/env_btn/env_fog_on.png"></div>
        <div *ngSwitchCase='false' class="envBtn">
          <img src="./images/env_btn/env_fog.png"></div>
        <p class="imgDescription">Fog</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('hail')" [ngSwitch]="environmentSnapshot.hail">
        <div *ngSwitchCase='true' class="envBtn active">
          <img src="./images/env_btn/env_hail_on.png"></div>
        <div *ngSwitchCase='false' class="envBtn">
          <img src="./images/env_btn/env_hail.png"></div>
        <p class="imgDescription">Hail</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('lightning')" [ngSwitch]="environmentSnapshot.lightning">
        <div *ngSwitchCase='true' class="envBtn active">
          <img src="./images/env_btn/env_lightning_on.png"></div>
        <div *ngSwitchCase='false' class="envBtn">
          <img src="./images/env_btn/env_lightning.png"></div>
        <p class="imgDescription">Lightning</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('rain')" [ngSwitch]="environmentSnapshot.rain">
        <div *ngSwitchCase='true' class="envBtn active">
          <img src="./images/env_btn/env_rain_on.png"></div>
        <div *ngSwitchCase='false' class="envBtn">
          <img src="./images/env_btn/env_rain.png"></div>
        <p class="imgDescription">Rain</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('sunshine')" [ngSwitch]="environmentSnapshot.sunshine">
        <div *ngSwitchCase='true' class="envBtn active">
          <img src="./images/env_btn/env_sun_on.png"></div>
        <div *ngSwitchCase='false' class="envBtn">
          <img src="./images/env_btn/env_sun.png"></div>
        <p class="imgDescription">Sunshine</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('wind')" [ngSwitch]="environmentSnapshot.wind">
        <div *ngSwitchCase='true' class="envBtn active">
          <img src="./images/env_btn/env_wind_on.png"></div>
        <div *ngSwitchCase='false' class="envBtn">
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
  players:FirebaseObjectObservable<any>;
  URL:string;
  environmentSnapshot: {
    fog:boolean,
    hail:boolean,
    lightning:boolean,
    rain:boolean,
    sunshine:boolean,
    wind:boolean,
  };
  playersSnapshot: {
    Elementalist: {
      playerClass: string;
      hitpoints: number;
      currentHitpoints: number;
      physicalAttack: number;
      physicalDefense: number;
      specialAttack: number;
      specialDefense: number;
      dexterity: number;
      action: string;
    }
    Highwayman: {
      playerClass: string;
      hitpoints: number;
      currentHitpoints: number;
      physicalAttack: number;
      physicalDefense: number;
      specialAttack: number;
      specialDefense: number;
      dexterity: number;
      action: string;
    }
    Paragon: {
      playerClass: string;
      hitpoints: number;
      currentHitpoints: number;
      physicalAttack: number;
      physicalDefense: number;
      specialAttack: number;
      specialDefense: number;
      dexterity: number;
      action: string;
    }
  };
  getKey:Function;

  constructor(af:AngularFire, renderer: Renderer){
    this.URL = window.location.href;
    this.onOff = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/OnOff',{preserveSnapshot:true});
    this.onOff.subscribe(snapshot =>{
      this.environmentSnapshot = snapshot.val();
    });
    this.environment = af.database.object('/'+this.URL.split('/game/')[1]+'/Globals/Environment');
    this.players = af.database.object('/'+this.URL.split('/game/')[1]+'/Players',{preserveSnapshot:true});
    this.players.subscribe(snapshot =>{
      this.playersSnapshot = snapshot.val();
    });
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
        if(this.environmentSnapshot.rain==true){
          this.onOff.update({rain:false});
          break;
        } else {
          this.onOff.update({rain:true});
          break;
        }
      case 'fog':
          if(this.environmentSnapshot.fog==true){
            this.onOff.update({fog:false})
            break;
          } else {
            this.onOff.update({fog:true});
            break;
          }
      case 'lightning':
        if(this.environmentSnapshot.lightning==true){
          this.onOff.update({lightning:false})
          break;
        } else {
          this.onOff.update({lightning:true});
          break;
        }
      case 'sunshine':
        if(this.environmentSnapshot.sunshine==true){
          this.onOff.update({sunshine:false})
          break;
        } else {
          this.onOff.update({sunshine:true});
          break;
        }
      case 'hail':
        if(this.environmentSnapshot.hail==true){
          this.onOff.update({hail:false})
          break;
        } else {
          this.onOff.update({hail:true});
          break;
        }
      case 'wind':
        if(this.environmentSnapshot.wind==true){
          this.onOff.update({wind:false})
          break;
        } else {
          this.onOff.update({wind:true});
          break;
        }
    }
    if (this.environmentSnapshot.rain == true) {
        chaos += 1;
        material += 2;
    }
    if (this.environmentSnapshot.fog == true) {
        aether += 2;
        order += 1;
    }
    if (this.environmentSnapshot.lightning == true) {
        aether += 1;
        chaos += 2;
    }
    if (this.environmentSnapshot.sunshine == true) {
        order += 2;
        material += 1;
    }
    if (this.environmentSnapshot.hail == true) {
        aether += 2;
        material += 2;
    }
    if (this.environmentSnapshot.wind == true) {
        order += 2;
        chaos += 2;
    }
  this.environment.set({aether:aether,material:material,chaos:chaos,order:order});
  this.changeChampionStats(aether,material,chaos,order);
  }

  changeChampionStats(aether,material,chaos,order){
    this.playersSnapshot.Highwayman.physicalAttack = Math.floor((chaos * material) + 10);
    this.playersSnapshot.Highwayman.physicalDefense = Math.floor(5 + material);
    this.playersSnapshot.Highwayman.specialAttack = Math.floor(2 + (2 * order));
    this.playersSnapshot.Highwayman.specialDefense = Math.floor(3 + chaos + aether);
    this.playersSnapshot.Highwayman.dexterity = Math.floor(((10 * aether) + order) / material);
    this.players.update(this.playersSnapshot);
  }

  toggleBtn(key) {
    // a
    if (key == '65' || key == 'fog') {
      this.changeEnvironment('fog');
    }
    // s
    if (key == '83' || key == 'hail') {
      this.changeEnvironment('hail');
    }
    // d
    if (key == '68' || key == 'lightning') {
      this.changeEnvironment('lightning');
    }
    // f
    if (key == '70' || key == 'rain') {
      this.changeEnvironment('rain');
    }
    // g
    if (key == '71' || key == 'sunshine') {
      this.changeEnvironment('sunshine');
    }
    // h
    if (key == '72' || key == 'wind') {
      this.changeEnvironment('wind');
    }
  }
}