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
    /**
     * expect(res).toEqual(ARTICLES_TREE_DATA);
     * 
     * Error: Expected $[0] to have properties
     * parent: undefined
     * at stack (http://localhost:9877/base/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?da99c5b057693d025fad3d7685e1590600ca376d:2176:17)
     * at buildExpectationResult (http://localhost:9877/base/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?da99c5b057693d025fad3d7685e1590600ca376d:2146:14)
     * at Spec.expectationResultFactory (http://localhost:9877/base/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?da99c5b057693d025fad3d7685e1590600ca376d:766:18)
     * at Spec.addExpectationResult (http://localhost:9877/base/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?da99c5b057693d025fad3d7685e1590600ca376d:444:34)
     * at Expectation.addExpectationResult (http://localhost:9877/base/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?da99c5b057693d025fad3d7685e1590600ca376d:710:21)
     * at Expectation.toEqual (http://localhost:9877/base/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?da99c5b057693d025fad3d7685e1590600ca376d:2099:12)
     * at SafeSubscriber._next (http://localhost:9877/_karma_webpack_/main.bundle.js:1000:29)
     * at SafeSubscriber.webpackJsonp.../../../../rxjs/Subscriber.js.SafeSubscriber.__tryOrSetError (http://localhost:9877/_karma_webpack_/vendor.bundle.js:21600:16)
     * at SafeSubscriber.webpackJsonp.../../../../rxjs/Subscriber.js.SafeSubscriber.next (http://localhost:9877/_karma_webpack_/vendor.bundle.js:21540:27)
     * at Subscriber.webpackJsonp.../../../../rxjs/Subscriber.js.Subscriber._next (http://localhost:9877/_karma_webpack_/vendor.bundle.js:21478:26)
     * 
     * As a workaroud used JSON.stringify
     */
    it('should parse to proper tree response', async(() => {
      let result = service.getArticlesTree();
      result.subscribe(res => {
        let resultArr = JSON.stringify(res);
        let originalArr = JSON.stringify(ARTICLES_TREE_DATA);
        // expect(res).toEqual(ARTICLES_TREE_DATA); // Errors out
        expect(resultArr).toEqual(originalArr);
      });
    }));
  });
});
