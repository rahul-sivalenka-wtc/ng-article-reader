import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BaseService } from './base-http.service';

@Injectable()
export class ArticlesService extends BaseService {
  constructor(protected http: Http) {
    super(http);
  }

  getArticlesTree(): any {
    return this.http.get(`${this.baseUrl}/articlesTree`);
  }
}