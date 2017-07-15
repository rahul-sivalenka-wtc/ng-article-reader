import { AppComponent } from './app.component';
import * as components from 'components/components';

export var bootstrap = [
  AppComponent
];

export default [
  AppComponent,
  components.ArticleTreeComponent,
  components.NavbarComponent,
  components.SidenavComponent,
  components.AdminPanelComponent,
  components.ContentTabPanelComponent,
  components.ContentDefaultComponent,
  components.ContentTabComponent
];