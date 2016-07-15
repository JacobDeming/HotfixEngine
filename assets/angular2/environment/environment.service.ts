import {Http,Headers} from '@angular/http';
import {Injectable,EventEmitter} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Environment} from './Environment';

@Injectable()
export class EnvironmentService {
  environment: Environment;
  environmentUpdated = new EventEmitter<Environment>();

  constructor(private _http:Http){}

  updateEnvironment(toggle:string,room:string){
    const headers = new Headers({'Content-Type':'application/json'});
    return this._http.post('http://localhost:3000/update',{headers:headers})
      .map(response =>{
        const data = response.json();
        return data;
      })
  }
}