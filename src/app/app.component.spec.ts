import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MockComponent } from 'shared/mocks';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent({ selector: 'ar-navbar' }),
        MockComponent({ selector: 'ar-sidenav' })
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
