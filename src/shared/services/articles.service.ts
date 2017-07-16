import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { BaseService } from './base-http.service';
import { Article } from 'shared/models/article.model';

import 'rxjs/add/operator/publishBehavior';

@Injectable()
export class ArticlesService extends BaseService {

  private folderIcon = 'fa-folder';
  private folderOpenIcon = 'fa-folder-open';
  private fileIcon = 'fa-text-o';

  articleIds: number[] = [];
  articlesTreeData$: BehaviorSubject<Article[]>;

  constructor(protected http: Http) {
    super(http);
  }

  getArticles(): Observable<Article[]> {
    if(!this.articlesTreeData$)
      this._getArticlesTree();
    return this.articlesTreeData$;
  }

  getArticleById(id: string|number): Article {
    return;
  }

  isValidId(id: string|number): boolean {
    return this.checkIfIdExists(id);
  }

  private checkIfIdExists(id: string|number): boolean {
    return this.articleIds.includes(+id);
  }

  private _getArticlesTree() {
    this.articlesTreeData$ = new BehaviorSubject([]);
    this.http
        .get(`${this.baseUrl}/articlesTree`)
        .map(res => res.json().data)
        .subscribe((res) => {
          let processedData = this._processData(res);
          this.articlesTreeData$.next(processedData);
        });
  }

  _processData(data): Article[] {
    if(Array.isArray(data)) {
      for(let i = 0; i < data.length; i++) {
        data[i] = this.makeArticle(data[i]);
        if(data[i].children)
          this._processData(data[i].children);
      }
    } else {
      data = this.makeArticle(data);
      if(data.children)
          this._processData(data.children);
    }

    return Array.isArray(data) ? data : [data];
  }

  private makeArticle(data): Article {
    let label = data['title'];
    data['label'] = label;
    if(data.leaf) {
      data['icon'] = this.fileIcon;
      let id = data['post_id'];
      data['id'] = id;
    } else {
      data['collapsedIcon'] = this.folderIcon;
      data['expandedIcon'] = this.folderOpenIcon;
    }
    data['selectable'] = true;
    // Store the id for the route guard check
    this.articleIds.push(data['id']);
    return data;
  }
}