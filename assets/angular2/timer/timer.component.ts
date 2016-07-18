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
      this.AIselect();
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
      this.runClock();
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
  AIselect(){
    if(this.host==true){
      console.log(this.playersInfo);
      console.log(this.environmentInfo);
    }
  }
}