import { Observable } from 'rxjs';
import { TreeNode } from 'primeng/primeng';

/**
 * Mock data
 */
export let ARTICLES_TREE_DATA: TreeNode[] = [{
  label: 'Root',
  children: [{
    label: 'Child 1'
  }, {
    label: 'Child 2'
  }]
}];

/**
 * Mock Services
 */
export class MockArticlesService {
  getArticlesTree(): Observable<any> {
    return Observable.of(ARTICLES_TREE_DATA);
  }
}