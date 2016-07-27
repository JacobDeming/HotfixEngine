import {Component} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2';


@Component({
  selector: 'lobby',
  template:`
    <p>BLARGH</p>
  `,
})

export class LobbyComponent{
  room: FirebaseObjectObservable<any>;
  URL: string;

}