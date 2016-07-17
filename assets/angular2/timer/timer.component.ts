import {Component,OnInit,OnChanges} from '@angular/core';
import {Input,Output,EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';


@Component({
  selector: 'timer',
  template: `
  <p> Ticks: {{gameClock.duration - gameClock.ticks}}</p>
  `
})

export class TimerComponent implements OnInit{
  firebaseClock:FirebaseObjectObservable<any>;
  firebaseServer:FirebaseObjectObservable<any>;
  URL:string;
  gameClock: {
    duration:number,
    ticks:number
  };
  timerSubscription: any;
  remaining:number;
  myId: string;

  constructor(af:AngularFire){
    this.URL = window.location.href;
    this.firebaseServer = af.database.object('/'+this.URL.split('/game/')[1]);
    this.firebaseClock = af.database.object('/'+this.URL.split('/game/')[1]+"/Timer",{preserveSnapshot:true});
  }

  ngOnInit(){
    this.resetClock();
    this.runClock();
  }

  resetClock(){
    this.gameClock = { 
      duration:5,
      ticks:0
    };
  }

  stopClock(){
    this.resetClock();
    this.timerSubscription.unsubscribe();
    this.runClock();
  }

  runClock(){
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