import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MdSidenavModule } from '@angular/material';

import { SidenavComponent } from './sidenav.component';
import { MockComponent } from '../../shared/mocks/mock.component';

fdescribe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SidenavComponent,
        MockComponent({ selector: 'ar-article-tree' }),
        MockComponent({ selector: 'ar-admin-panel' })
      ],
      imports: [
        MdSidenavModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
