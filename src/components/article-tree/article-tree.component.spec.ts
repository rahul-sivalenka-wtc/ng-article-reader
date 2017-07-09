import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTreeComponent } from './article-tree.component';

describe('ArticleTreeComponent', () => {
  let component: ArticleTreeComponent;
  let fixture: ComponentFixture<ArticleTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleTreeComponent ]
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
