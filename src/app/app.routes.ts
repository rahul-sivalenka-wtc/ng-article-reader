import { Route } from '@angular/router';
import * as components from '../components/components';

let routes: Route[] = [{
  path: '',
  pathMatch: 'full',
  component: components.ContentDefaultComponent
}, {
  path: 'article',
  component: components.ContentTabPanelComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'all'
  },{
    path: ':id',
    component: components.ContentTabComponent
  }]
}];

export default routes;