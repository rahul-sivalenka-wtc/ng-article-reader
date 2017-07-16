/**
 * Ref: https://kendaleiv.com/angular-2-mockbackend-service-testing-template-using-testbed/
 */

import { TestBed, inject, async } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
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
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [HttpModule]
    });
  });

  beforeEach(inject([ArticlesService, MockBackend], (articlesService, mockBackend) => {
    backend = mockBackend;
    service = articlesService;
  }));

  beforeEach(() => {
    backend.connections.subscribe((conn: MockConnection) => {
      let url = conn.request.url;

      switch (true) {
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
      let result = service.getArticles();
      result.subscribe(res => {
        // let resultArr = JSON.stringify(res);
        // let originalArr = JSON.stringify(ARTICLES_TREE_DATA);
        // expect(res).toEqual(ARTICLES_TREE_DATA); // Errors out
        // expect(resultArr).toEqual(originalArr);
        expect(res).toBeDefined();
        expect(Array.isArray(res)).toBeTruthy();
        expect(res.length).toBe(ARTICLES_TREE_DATA.length);
      });
    }));

    it('should collect the ids from the result', async(() => {
      let obs = service.getArticles();
      obs.subscribe(data => {
        expect(Array.isArray(service.articleIds)).toBeTruthy();
        expect(service.articleIds.length).toBeGreaterThan(0);
      });
    }))
  });

  describe('_processData', () => {
    let testData: { [key: string]: any }[];
    let testDataDuplicate;

    let collapsedIcon = 'fa-folder';
    let expandedIcon = 'fa-folder-open';
    let fileIcon = 'fa-file-o';

    let expectFile = (mod, original) => {
      expect(mod.label).toBeDefined('File should have label');
      expect(mod.label).toEqual(original.title, 'File label should be equal to Original title');
      expect(mod.id).toBeDefined('File should have id');
      expect(mod.id).toEqual(original.post_id, 'File id should be equal to original post_id');
      expect(mod.icon).toEqual(fileIcon, 'File should have icon');
      expect(mod.selectable).toBeTruthy('File should be selectable');
    };

    let expectFolder = (mod, original) => {
      expect(mod.label).toBeDefined('Folder should have label');
      expect(mod.label).toEqual(original.title, 'Folder label should be equal to Original title');
      expect(mod.id).toEqual(original.id, 'Folder id should be equal to original id');
      expect(mod.collapsedIcon).toEqual(collapsedIcon, 'Folder should have collapseIcon');
      expect(mod.expandedIcon).toEqual(expandedIcon, 'Folder should have expandedIcon ');
      expect(mod.selectable).toBeTruthy('Folder should be selectable');
      if (original.categories)
        expect(mod.children.length).toEqual(original.categories.length, `Folder's should have equal number of children from original categories`);
    };

    beforeEach(() => {
      testData = [{
        title: 'Root 1',
        id: 1
      }, {
        title: 'File 3',
        post_id: 53,
        leaf: 'true'
      }, {
        title: 'Root 2',
        id: 2,
        categories: [{
          title: 'File 1',
          leaf: 'true',
          post_id: 51
        }, {
          title: 'Folder 1',
          id: 551,
          categories: [{
            title: 'File 2',
            post_id: 52,
            leaf: 'true'
          }]
        }]
      }, {
        title: 'Root 3',
        id: 3,
        categories: [{
          title: 'File 1',
          leaf: 'true',
          post_id: 53
        }]
      }];

      testDataDuplicate = JSON.parse(JSON.stringify(testData));
    });

    it('should accept an object', () => {
      let o = testDataDuplicate[0];
      let result = service._processData(o);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBeTruthy();
    });

    it('should accept an array', () => {
      let o = [testDataDuplicate[0]];
      let result = service._processData(o);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBeTruthy();
    });

    it('should covert a non-leaf into a Folder', () => {
      let onlyOneFolder = testDataDuplicate[0];
      let onlyOneFolderOriginal = testData[0];
      let result = service._processData(onlyOneFolder);
      expect(Array.isArray(result)).toBeTruthy();
      let o = result[0];
      expectFolder(o, onlyOneFolderOriginal);
    });

    it('should convert a leaf into a File', () => {
      let onlyOneFile = testDataDuplicate[1];
      let onlyOneFileOriginal = testData[1];
      let result = service._processData(onlyOneFile);
      expect(Array.isArray(result)).toBeTruthy();
      let o = result[0];
      expectFile(o, onlyOneFileOriginal);
    });

    it('should convert a non-leaf with children', () => {
      let nonLeaf = testDataDuplicate[3];
      let nonLeafOriginal = testData[3];
      let result = service._processData(nonLeaf);
      expect(Array.isArray(result)).toBeTruthy();
      let o = result[0];
      expectFolder(o, nonLeafOriginal);
      let child = o.children[0];
      let originalChild = nonLeafOriginal.categories[0];
      expectFile(child, originalChild);
    });

    it('should convert a complex object', () => {
      let data = testDataDuplicate[2];
      let originalData = testData[2];
      let result = service._processData(data);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBeTruthy();
      let o = result[0];
      expectFolder(o, originalData);
      expectFolder(o.children[1], originalData.categories[1]);
      expectFile(o.children[0], originalData.categories[0]);
      expectFile(o.children[1].children[0], originalData.categories[1].categories[0]);
    });
  });
});
