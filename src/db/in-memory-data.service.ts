import { InMemoryDbService } from 'angular-in-memory-web-api';

import articlesTree from './tree-data';

let appName = 'Artical Reader';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {appName, articlesTree};
  }
}