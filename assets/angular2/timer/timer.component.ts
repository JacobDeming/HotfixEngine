import {Component} from '@angular/core';
import {Input,Output,EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';


@Component({
  selector: 'timer',
  template: `
  <div *ngIf="remaining">
  <p> Ticks: {{remaining}}</p>
  </div>
  `
})

export class TimerComponent{
  firebaseClock:FirebaseObjectObservable<any>;
  firebaseServer:FirebaseObjectObservable<any>;
  URL:string;
  gameClock: {
    duration:number,
    ticks:number
  };
  playersInfo:any;
  environmentInfo:any;
  timerSubscription: any;
  remaining:number;
  host:boolean;

  constructor(af:AngularFire){
    this.URL = window.location.href;
    this.firebaseServer = af.database.object('/'+this.URL.split('/game/')[1],{preserveSnapshot:true});
      this.firebaseServer.subscribe(snap =>{
        this.playersInfo = snap.val().Players;
        this.environmentInfo = snap.val().Globals.Environment;
      });
    this.firebaseClock = af.database.object('/'+this.URL.split('/game/')[1]+"/Timer",{preserveSnapshot:true});
    this.firebaseClock.subscribe(snap =>{
      this.remaining=snap.val();})
    const twoPlayers = af.database.object('/'+this.URL.split('/game/')[1]+"/Open",{preserveSnapshot:true});
    twoPlayers.subscribe(snap =>{
      if(snap.val()==true){
        this.host=true;
      }
      if(snap.val()==false){
        this.resetClock();
        this.runClock();
      }
    })
  }

  //Timer functionality
  resetClock(){
    if(this.host==true){
      this.gameClock = { 
        duration:5,
        ticks:0
      };
    }
  }

  stopClock(){
    if(this.host==true){
      this.resetClock();
      this.timerSubscription.unsubscribe();
      this.fight(this.playersInfo.player1,this.playersInfo.player2);
    }
  }

  runClock(){
    if(this.host==true){
      console.log("Got in here");
      let timer = Observable.timer(0,1000);
      this.timerSubscription = timer.subscribe(t=>{
        if(t <= this.gameClock.duration){
          this.gameClock.ticks = t;
          this.firebaseServer.update({Timer:this.gameClock.duration-this.gameClock.ticks});
        } else {
          this.stopClock();
        }
      })
    }
  }

  //Gameplay functionality
  fight(player1,player2){
    if(player1.action == "strike"){
      if(Math.floor(Math.random()*(100-0+1)+1)>player2.dexterity){
        if(player2.action == "defend"){
          player2.currentHitpoints -= (player1.physicalAttack - player2.physicalDefense * 2);
        } else {
          player2.currentHitpoints -= (player1.physicalAttack - player2.physicalDefense);
        }
      } else {
        console.log("PLAYER 2 DODGED!");
      }
    }
    if(player1.action == "special"){
      if(Math.floor(Math.random()*(100-0+1)+1)>player2.dexterity){
        if(player2.action == "defend"){
          player2.currentHitpoints -= (player1.specialAttack - player2.specialDefense * 2);
        } else {
          player2.currentHitpoints -= (player1.specialAttack - player2.specialDefense);
        }
      } else {
        console.log("PLAYER 2 DODGED!");
      }
    }
    if(player2.action == "strike"){
      if(Math.floor(Math.random()*(100-0+1)+1)>player1.dexterity){
        if(player1.action == "defend"){
          player1.currentHitpoints -= (player2.physicalAttack - player1.physicalDefense * 2);
        } else {
          player1.currentHitpoints -= (player2.physicalAttack - player1.physicalDefense);
        }
      } else {
        console.log("PLAYER 1 DODGED!");
      }
    }
    if(player2.action == "special"){
      if(Math.floor(Math.random()*(100-0+1)+1)>player1.dexterity){
        if(player1.action == "defend"){
          player1.currentHitpoints -= (player2.specialAttack - player1.specialDefense * 2);
        } else {
          player1.currentHitpoints -= (player2.specialAttack - player1.specialDefense);
        }
      } else {
        console.log("PLAYER 1 DODGED!");
      }
    }
  this.firebaseServer.update({Players:{player1:this.playersInfo.player1,player2:this.playersInfo.player2}});
  if(player1.currentHitpoints <= 0){
    console.log("PLAYER 2 WINS!");
  }
  if(player2.currentHitpoints <= 0){
    console.log("PLAYER 1 WINS!");
  } else {
    this.runClock();
  }
  }
}