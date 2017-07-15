import { TreeNode } from 'primeng/primeng';

let articlesTree: TreeNode[] = [{
  label: "Root",
  data: "Root",
  expandedIcon: "fa-folder-open",
  collapsedIcon: "fa-folder",
  children: [
    {
      "label": "Documents",
      "data": "Documents Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [
        {
          "label": "Work",
          "data": "Work Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [
            {
              "label": "Expenses.doc",
              "icon": "fa-file-word-o",
              "data": "Expenses Document"
            },
            {
              "label": "Resume.doc",
              "icon": "fa-file-word-o",
              "data": "Resume Document"
            }
          ]
        }
      ]
    }, {
      "label": "Documents",
      "data": "Documents Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [
        {
          "label": "Work",
          "data": "Work Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [
            {
              "label": "Expenses.doc",
              "icon": "fa-file-word-o",
              "data": "Expenses Document"
            },
            {
              "label": "Resume.doc",
              "icon": "fa-file-word-o",
              "data": "Resume Document"
            }
          ]
        }
      ]
    }, {
      "label": "Documents",
      "data": "Documents Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [
        {
          "label": "Work",
          "data": "Work Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [
            {
              "label": "Expenses.doc",
              "icon": "fa-file-word-o",
              "data": "Expenses Document"
            },
            {
              "label": "Resume.doc",
              "icon": "fa-file-word-o",
              "data": "Resume Document"
            }
          ]
        }
      ]
    }, {
      "label": "Documents",
      "data": "Documents Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [
        {
          "label": "Work",
          "data": "Work Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [
            {
              "label": "Expenses.doc",
              "icon": "fa-file-word-o",
              "data": "Expenses Document"
            },
            {
              "label": "Resume.doc",
              "icon": "fa-file-word-o",
              "data": "Resume Document"
            }
          ]
        }
      ]
    }
  ]
}];

export default articlesTree;