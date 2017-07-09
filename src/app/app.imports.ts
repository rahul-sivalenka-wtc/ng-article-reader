import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MdSidenavModule, MdToolbarModule } from '@angular/material';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../db/in-memory-data.service';

import { TreeModule } from 'primeng/primeng';

import routes from './app.routes';

export default [
  BrowserModule,
  HttpModule,
  BrowserAnimationsModule,

  TreeModule,

  MdSidenavModule,
  MdToolbarModule,
  
  RouterModule.forRoot(routes),
  InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
];