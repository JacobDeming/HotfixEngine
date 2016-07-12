import {Http,Headers} from '@angular/http';
import {Injectable,EventEmitter} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Champion} from './champion';
@Injectable()
export class StatsService {
  champion: any;

  constructor(private _http:Http){}

  getStats(){
    return this._http.get('http://localhost:3000/server/Highwayman')
      .map(response=>{
        const data = response.json().obj;
        return data;
      }).catch(error => Observable.throw(error.json()));
  }
}