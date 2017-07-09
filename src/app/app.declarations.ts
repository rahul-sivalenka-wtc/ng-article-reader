import { AppComponent } from './app.component';
import { ArticleTreeComponent } from '../components/article-tree/article-tree.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';

export var bootstrap = [
  AppComponent
];

export default [
  AppComponent,
  ArticleTreeComponent,
  NavbarComponent,
  SidenavComponent
];