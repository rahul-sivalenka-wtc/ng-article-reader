/**
 * Ref: https://kendaleiv.com/angular-2-mockbackend-service-testing-template-using-testbed/
 */

import { TestBed, inject, async } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TreeNode } from 'primeng/primeng';

import { ArticlesService } from './articles.service';
import { ARTICLES_TREE_DATA, Helper } from "shared/mocks";

describe('ArticlesService', () => {
  let backend: MockBackend;
  let service: ArticlesService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticlesService,

        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ]
        }
      ],
      imports: [ HttpModule ]
    });
  });

  beforeEach(inject([ArticlesService, MockBackend], (articlesService, mockBackend) => {
    backend = mockBackend;
    service = articlesService;
  }));

  beforeEach(() => {
    backend.connections.subscribe((conn: MockConnection) => {
      debugger;
      let url = conn.request.url;

      switch(true) {
        case (url.indexOf('articlesTree') > 0):
          conn.mockRespond(Helper.getMockResponse({ data: ARTICLES_TREE_DATA }))
          break;
        default:
          conn.mockRespond(Helper.getMockResponse({}));
      }
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getArticlesTree', () => {
    it('should parse to proper tree response', async(() => {
      var result = service.getArticlesTree();
      result.subscribe(res => {
        expect(res).toEqual(ARTICLES_TREE_DATA);
      });
    }));
  });
});
