import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdToolbarModule } from '@angular/material';

import { AdminPanelComponent } from './admin-panel.component';

describe('AdminPanelComponent', () => {
  let component: AdminPanelComponent;
  let fixture: ComponentFixture<AdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelComponent ],
      imports: [ MdToolbarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show stats link', () => {
    let ele = fixture.nativeElement as HTMLElement;
    expect(ele.querySelector('a').innerHTML).toContain('Stats');
  });
});
