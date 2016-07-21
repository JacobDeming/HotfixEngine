import {Component,Renderer,ElementRef} from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'environment',
  template: `
  <div *ngIf="environmentSnapshot" class="container">
    <div class="col-sm-6 pull-left">
      <p>
        To play, press key to turn on/off:<br>
        [A] FOG; [S] SNOW; [D] LIGHTNING; [F] RAIN; [G] QUAKE; [H] STORM</p>
    </div>
    <div class="col-sm-6 pull-right envBtns" *ngIf="environment">
      <div class="envBtnWrapper" (click)="toggleBtn('fog')" [ngSwitch]="environmentSnapshot.fog">
        <div *ngSwitchCase='true' class="envBtn active">
          <img src="./images/env_btn/env_fog_on.png"></div>
        <div *ngSwitchCase='false' class="envBtn">
          <img src="./images/env_btn/env_fog.png"></div>
        <p class="imgDescription">Fog</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('snow')" [ngSwitch]="environmentSnapshot.snow">
        <div *ngSwitchCase='true' class="envBtn active">
          <img src="./images/env_btn/env_hail_on.png"></div>
        <div *ngSwitchCase='false' class="envBtn">
          <img src="./images/env_btn/env_hail.png"></div>
        <p class="imgDescription">Snow</p>
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
      <div class="envBtnWrapper" (click)="toggleBtn('quake')" [ngSwitch]="environmentSnapshot.quake">
        <div *ngSwitchCase='true' class="envBtn active">
          <img src="./images/env_btn/env_sun_on.png"></div>
        <div *ngSwitchCase='false' class="envBtn">
          <img src="./images/env_btn/env_sun.png"></div>
        <p class="imgDescription">Quake</p>
      </div>
      <div class="envBtnWrapper" (click)="toggleBtn('storm')" [ngSwitch]="environmentSnapshot.storm">
        <div *ngSwitchCase='true' class="envBtn active">
          <img src="./images/env_btn/env_wind_on.png"></div>
        <div *ngSwitchCase='false' class="envBtn">
          <img src="./images/env_btn/env_wind.png"></div>
        <p class="imgDescription">Storm</p>
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
    snow:boolean,
    lightning:boolean,
    rain:boolean,
    quake:boolean,
    storm:boolean
  };
  playersSnapshot: any;
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
      case 'quake':
        if(this.environmentSnapshot.quake==true){
          this.onOff.update({quake:false})
          break;
        } else {
          this.onOff.update({quake:true});
          break;
        }
      case 'snow':
        if(this.environmentSnapshot.snow==true){
          this.onOff.update({snow:false})
          break;
        } else {
          this.onOff.update({snow:true});
          break;
        }
      case 'storm':
        if(this.environmentSnapshot.storm==true){
          this.onOff.update({storm:false})
          break;
        } else {
          this.onOff.update({storm:true});
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
    if (this.environmentSnapshot.quake == true) {
        order += 2;
        material += 1;
    }
    if (this.environmentSnapshot.snow == true) {
        aether += 2;
        material += 2;
    }
    if (this.environmentSnapshot.storm == true) {
        order += 2;
        chaos += 2;
    }
  this.environment.set({aether:aether,material:material,chaos:chaos,order:order});
  this.changeChampionStats(aether,material,chaos,order);
  }

  changeChampionStats(aether,material,chaos,order){
    if(this.playersSnapshot.player1.playerClass == 'Highwayman'){
      this.playersSnapshot.player1.physicalAttack = Math.floor((chaos * material) + 10 - (aether*1.5));
      this.playersSnapshot.player1.physicalDefense = Math.floor(5 + order);
      this.playersSnapshot.player1.specialAttack = Math.floor(2 + (2 * order));
      this.playersSnapshot.player1.specialDefense = Math.floor(3 + chaos + aether);
      this.playersSnapshot.player1.dexterity = Math.floor(((10 * aether) + chaos) / material);
    }
    if(this.playersSnapshot.player1.playerClass == 'Elementalist'){
      this.playersSnapshot.player1.physicalAttack = Math.floor(4 + aether + material);
      this.playersSnapshot.player1.physicalDefense = Math.floor(3 + order);
      this.playersSnapshot.player1.specialAttack = Math.floor(((12 + aether) * chaos) / order);
      this.playersSnapshot.player1.specialDefense = Math.floor(10 + material + order);
      this.playersSnapshot.player1.dexterity = Math.floor(3 * chaos);
    }
    if(this.playersSnapshot.player1.playerClass == "Paragon"){
      this.playersSnapshot.player1.physicalAttack = Math.floor(((order + material)*3)/(aether));
      this.playersSnapshot.player1.physicalDefense = Math.floor(((8 * material) + order) / chaos);
      this.playersSnapshot.player1.specialAttack = Math.floor((aether * 6)/material);
      this.playersSnapshot.player1.specialDefense = Math.floor(((7 * material) + chaos) / (order*2));
    }
    if(this.playersSnapshot.player2.playerClass == 'Highwayman'){
      this.playersSnapshot.player2.physicalAttack = Math.floor((chaos * material) + 10 - (aether*1.5));
      this.playersSnapshot.player2.physicalDefense = Math.floor(5 + order);
      this.playersSnapshot.player2.specialAttack = Math.floor(2 + (2 * order));
      this.playersSnapshot.player2.specialDefense = Math.floor(3 + chaos + aether);
      this.playersSnapshot.player2.dexterity = Math.floor(((10 * aether) + chaos) / material);
    }
    if(this.playersSnapshot.player2.playerClass == 'Elementalist'){
      this.playersSnapshot.player2.physicalAttack = Math.floor(4 + aether + material);
      this.playersSnapshot.player2.physicalDefense = Math.floor(3 + order);
      this.playersSnapshot.player2.specialAttack = Math.floor(((12 + aether) * chaos) / order);
      this.playersSnapshot.player2.specialDefense = Math.floor(10 + material + order);
      this.playersSnapshot.player2.dexterity = Math.floor(3 * chaos);
    }
    if(this.playersSnapshot.player2.playerClass == "Paragon"){
      this.playersSnapshot.player2.physicalAttack = Math.floor(((order + material)*3)/(aether));
      this.playersSnapshot.player2.physicalDefense = Math.floor(((8 * material) + order) / chaos);
      this.playersSnapshot.player2.specialAttack = Math.floor((aether * 6)/material);
      this.playersSnapshot.player1.specialDefense = Math.floor(((7 * material) + chaos) / (order*2));
    }
    this.playersSnapshot.player1.action = this.AISelectAction(this.playersSnapshot.player1,this.playersSnapshot.player2);
    this.playersSnapshot.player2.action = this.AISelectAction(this.playersSnapshot.player2,this.playersSnapshot.player1);
    this.players.update(this.playersSnapshot);
  }

  AISelectAction(player,enemy){
    var action = "";
    var rng = (Math.floor(Math.random()*(100 - 0 + 1) + 0));
    if ((player.physicalAttack - enemy.physicalDefense) > (player.specialAttack - enemy.specialDefense)) {
        if (rng - (player.physicalAttack - enemy.physicalDefense) <= 0) {
            rng = 1;
        } else {
            rng -= (player.physicalAttack - enemy.physicalDefense);
        }
    }
    if ((player.physicalAttack - enemy.physicalDefense) < (player.specialAttack - enemy.specialDefense)) {
        if (rng + (player.specialAttack - enemy.specialDefense) >= 100) {
            rng = 100;
        } else {
            rng += (player.specialAttack - enemy.specialDefense);
        }
    }
    if (player.currentHitpoints <= (player.hitpoints/3)){
      if ((enemy.physicalAttack - (player.physicalDefense*2) < 0) || (enemy.specialAttack - (player.specialDefense*2))){
          rng = (Math.floor(Math.random()*(75 - 25 + 1) + 25));
      }
    }
    if (rng <= 33) {
        return "strike";
    }
    if (rng >= 66) {
        return"special";
    }
    if (rng < 66 && rng > 33) {
        return "defend";
    }
  }

  toggleBtn(key) {
    // a
    if (key == '65' || key == 'fog') {
      this.changeEnvironment('fog');
    }
    // s
    if (key == '83' || key == 'snow') {
      this.changeEnvironment('snow');
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
    if (key == '71' || key == 'quake') {
      this.changeEnvironment('quake');
    }
    // h
    if (key == '72' || key == 'storm') {
      this.changeEnvironment('storm');
    }
  }
}