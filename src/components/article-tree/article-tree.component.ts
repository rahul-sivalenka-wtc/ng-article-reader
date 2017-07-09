import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription, Observable } from 'rxjs';

import { ArticlesService } from '../../shared/services';

@Component({
  selector: 'app-article-tree',
  templateUrl: './article-tree.component.html',
  styleUrls: ['./article-tree.component.scss']
})
export class ArticleTreeComponent implements OnInit {
  articles$: Observable<any>;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articles$ = this.articlesService.getArticlesTree();
  }
}
