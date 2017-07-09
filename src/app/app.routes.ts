import { Route } from '@angular/router';
import * as components from '../components/components';

let routes: Route[] = [{
  path: '',
  pathMatch: 'full',
  component: components.ContentTabPanelComponent
}];

export default routes;