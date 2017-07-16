import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { ArticlesService } from 'shared/services';
import { Article } from 'shared/models/article.model';

@Component({
  selector: 'ar-article-tree',
  templateUrl: './article-tree.component.html',
  styleUrls: ['./article-tree.component.scss']
})
export class ArticleTreeComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articles$ = this.articlesService.getArticles();
  }
}