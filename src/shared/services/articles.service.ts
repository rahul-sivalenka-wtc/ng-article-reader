import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

import { BaseService } from './base-http.service';

@Injectable()
export class ArticlesService extends BaseService {
  baseUrl: string;

  constructor(protected http: Http) {
    super(http);
    this.initialize();
  }

  private initialize() {
    this.baseUrl = !environment.production ? 'api' : '';
  }

  getArticlesTree(): any { }
}