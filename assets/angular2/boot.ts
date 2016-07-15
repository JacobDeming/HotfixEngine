/// <reference path="../../typings.d.ts" />
import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';
import {HTTP_PROVIDERS} from '@angular/http';

import {EnvironmentService} from './environment/environment.service';
import {GameComponent} from './game.component';

bootstrap(GameComponent,[EnvironmentService,
  defaultFirebase({
    apiKey: "AIzaSyDfeeNYOqFPQY5k7QKkuqxNjoEkmyVemTw",
    authDomain: "hotfix-f82fc.firebaseapp.com",
    databaseURL: "https://hotfix-f82fc.firebaseio.com",
    storageBucket: "hotfix-f82fc.appspot.com",
  }), FIREBASE_PROVIDERS,HTTP_PROVIDERS
]);