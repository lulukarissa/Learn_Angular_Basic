import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//kode yang mendefinisikan module yang melakukan bootstraping
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
