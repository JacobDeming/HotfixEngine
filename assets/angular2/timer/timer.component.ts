import {Component} from '@angular/core';
import {Input,Output,EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';


@Component({
  selector: 'timer',
  template: `
  <div class="center-block">
    <div *ngIf="ready!=true">
      <button class="center-block btn btn-primary" (click)="readyToPlay()">Ready to Play?</button>
    </div>
    <div *ngIf="ready==true && winner==null">
      <p class="time-text text-center">ROUND ENDS IN...</p>
      <p class="clock text-center">{{remaining}}</p>
      <p class="text-center time-text">LAST ROUND</p>
      <p class="text-center">{{player1Action}}</p>
      <p class="text-center">{{player2Action}}</p>
    </div>
    <div *ngIf="winner!=null">
      <p class="text-center time-text">
        {{winner}}
      </p>
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
  ready:boolean;
  playersReady:number;
  player1Action:string;
  player2Action:string;
  winner:string;

  constructor(af:AngularFire){
    this.URL = window.location.href;
    this.firebaseServer = af.database.object('/'+this.URL.split('/game/')[1],{preserveSnapshot:true});
      this.firebaseServer.subscribe(snap =>{
        this.player1Action = snap.val().Players.player1.lastRound;
        this.player2Action = snap.val().Players.player2.lastRound;
        this.playersInfo = snap.val().Players;
        this.environmentInfo = snap.val().Globals.Environment;
        if (this.playersInfo.player1.currentHitpoints <= 0){
          this.winner = this.playersInfo.player2.playerClass+ "IS THE WINNER!";
        }
        if (this.playersInfo.player2.currentHitpoints <= 0){
          this.winner = this.playersInfo.player1.playerClass+" IS THE WINNER!";
        }
        if (this.playersInfo.player1.currentHitpoints <= 0 && this.playersInfo.player2.currentHitpoints <= 0){
          this.winner = this.playersInfo.player1.playerClass+" AND "+this.playersInfo.player2.playerClass+" TIED!"
        };
      });
    this.firebaseClock = af.database.object('/'+this.URL.split('/game/')[1]+"/Timer",{preserveSnapshot:true});
    this.firebaseClock.subscribe(snap =>{
      this.remaining=snap.val();});
    const readyToStart = af.database.object('/'+this.URL.split('/game/')[1]+"/Ready",{preserveSnapshot:true});
    readyToStart.subscribe(snap =>{
      this.playersReady = snap.val();
      if(snap.val()>=2){
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
    player1.lastRound="";
    player2.lastRound="";
    if(player1.action == "strike"){
      if(Math.floor(Math.random()*(100-0+1)+1)>player2.dexterity){
        if(player2.action == "defend"){
          player2.currentHitpoints -= (player1.physicalAttack - player2.physicalDefense * 2);
          player1.lastRound = player1.playerClass+" STRUCK FOR "+ (player1.physicalAttack - player2.physicalDefense * 2) + " DAMAGE!";
          player2.lastRound = player2.playerClass+" DEFENDED!";
        } else {
          player2.currentHitpoints -= (player1.physicalAttack - player2.physicalDefense);
          player1.lastRound = player1.playerClass+" STRUCK FOR "+ (player1.physicalAttack - player2.physicalDefense) + " DAMAGE!";
        }
      } else {
        player1.lastRound = player1.playerClass+" ATTEMPTED TO STRIKE... BUT THE "+player2.playerClass+" DODGED!";
      }
    }
    if(player1.action == "special"){
      if(Math.floor(Math.random()*(100-0+1)+1)>player2.dexterity){
        if(player2.action == "defend"){
          player2.currentHitpoints -= (player1.specialAttack - player2.specialDefense * 2);
          player1.lastRound = player1.playerClass+" USED THEIR SPECIAL FOR "+ (player1.specialAttack - player2.specialDefense * 2) + " DAMAGE!";
          player2.lastRound = player2.playerClass+" DEFENDED!";
        } else {
          player2.currentHitpoints -= (player1.specialAttack - player2.specialDefense);
          player1.lastRound = player1.playerClass+" USED THEIR SPECIAL FOR "+ (player1.specialAttack - player2.specialDefense) + " DAMAGE!";
        }
      } else {
        player1.lastRound = player1.playerClass+" ATTEMPTED TO USE THEIR SPECIAL... BUT THE "+player2.playerClass+" DODGED!";
      }
    }
    if(player2.action == "strike"){
      if(Math.floor(Math.random()*(100-0+1)+1)>player1.dexterity){
        if(player1.action == "defend"){
          player1.currentHitpoints -= (player2.physicalAttack - player1.physicalDefense * 2);
          player2.lastRound = player2.playerClass+" STRUCK FOR "+ (player2.physicalAttack - player1.physicalDefense * 2) + " DAMAGE!";
          player1.lastRound = player1.playerClass+" DEFENDED!";
        } else {
          player1.currentHitpoints -= (player2.physicalAttack - player1.physicalDefense);
          player2.lastRound = player2.playerClass+" STRUCK FOR "+ (player2.physicalAttack - player1.physicalDefense) + " DAMAGE!";
        }
      } else {
        player2.lastRound = player2.playerClass+" ATTEMPTED TO STRIKE...BUT THE "+player1.playerClass+" DODGED!";
      }
    }
    if(player2.action == "special"){
      if(Math.floor(Math.random()*(100-0+1)+1)>player1.dexterity){
        if(player1.action == "defend"){
          player1.currentHitpoints -= (player2.specialAttack - player1.specialDefense * 2);
          player2.lastRound = player2.playerClass+" USED THEIR SPECIAL FOR "+ (player2.specialAttack - player1.specialDefense * 2) + " DAMAGE!";
          player1.lastRound = player1.playerClass+" DEFENDED!";
        } else {
          player1.currentHitpoints -= (player2.specialAttack - player1.specialDefense);
          player2.lastRound = player2.playerClass+" USED THEIR SPECIAL FOR "+ (player2.specialAttack - player1.specialDefense) + " DAMAGE!";
        }
      } else {
        player2.lastRound = player2.playerClass+" ATTEMPTED TO USE THEIR SPECIAL... BUT THE "+player1.playerClass+" DODGED!";
      }
    }
  this.firebaseServer.update({Players:{player1:this.playersInfo.player1,player2:this.playersInfo.player2}});
  if(player1.currentHitpoints <= 0){
    return;
  }
  if(player2.currentHitpoints <= 0){
    return;
  } else {
    this.runClock();
  }
  }

  readyToPlay(){
    this.ready=true;
    if(this.playersReady === 0){
      this.host = true;
    } else {
      this.host = false;
    }
    this.firebaseServer.update({Ready:this.playersReady+1});
  }
}