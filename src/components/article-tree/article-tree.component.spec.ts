import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeModule } from 'primeng/primeng';

import { ArticleTreeComponent } from './article-tree.component';
import { MockArticlesService } from 'shared/mocks';
import { ArticlesService } from 'shared/services';

describe('ArticleTreeComponent', () => {
  let component: ArticleTreeComponent;
  let fixture: ComponentFixture<ArticleTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleTreeComponent ],
      providers: [ { provide: ArticlesService, useClass: MockArticlesService } ],
      imports: [ TreeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
