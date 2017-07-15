import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MdTabsModule } from '@angular/material';

import { ContentTabPanelComponent } from './content-tab-panel.component';

describe('ContentTabPanelComponent', () => {
  let component: ContentTabPanelComponent;
  let fixture: ComponentFixture<ContentTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTabPanelComponent ],
      imports: [
        RouterTestingModule,
        MdTabsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
