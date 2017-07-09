import { NgModule } from '@angular/core';

import declarations, { bootstrap } from './app.declarations';
import imports from './app.imports';
import providers from './app.providers';

// Other imports
import 'hammerjs';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: providers,
  bootstrap: bootstrap
})
export class AppModule { }
