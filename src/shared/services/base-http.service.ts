import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

export class BaseService {
  baseUrl: string;

  constructor(protected http: Http) {
    this.initialize();
  }
  
  private initialize() {
    this.baseUrl = !environment.production ? 'api' : '';
  }
}