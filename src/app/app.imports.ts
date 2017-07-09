import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdSidenavModule, MdToolbarModule } from '@angular/material';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../db/in-memory-data.service';

export default [
  BrowserModule,
  HttpModule,
  BrowserAnimationsModule,
  MdSidenavModule,
  MdToolbarModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
];