import { TreeNode } from 'primeng/primeng';

export interface Article extends TreeNode {
  id: string|number;
  children:Article[];
  [key: string]: any;
}