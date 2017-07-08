import { InMemoryDbService } from 'angular-in-memory-web-api';

let appName = 'Artical Reader';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {appName};
  }
}