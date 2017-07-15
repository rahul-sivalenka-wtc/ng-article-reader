import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { BaseService } from './base-http.service';
import { TreeNode } from 'primeng/primeng';

@Injectable()
export class ArticlesService extends BaseService {

  constructor(protected http: Http) {
    super(http);
  }

  getArticlesTree(): Observable<TreeNode> {
    return this.http.get(`${this.baseUrl}/articlesTree`).map(res => res.json().data);
  }
}