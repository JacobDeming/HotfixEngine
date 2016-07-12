import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {GameComponent} from './game.component';
import {StatsService} from './stats/stats.service';

bootstrap(GameComponent,[StatsService,HTTP_PROVIDERS]);