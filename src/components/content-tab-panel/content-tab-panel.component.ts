import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'shared/services';

@Component({
  selector: 'ar-content-tab-panel',
  templateUrl: './content-tab-panel.component.html',
  styleUrls: ['./content-tab-panel.component.scss']
})
export class ContentTabPanelComponent implements OnInit {

  navLinks: { label:string, id:string|number, leaf?:boolean, [key: string]: any }[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    // this.navLinks = [{
    //   label: 'Test 1',
    //   id: 1
    // }, {
    //   label: 'Test 2',
    //   id: 2
    // }]
  }

}
