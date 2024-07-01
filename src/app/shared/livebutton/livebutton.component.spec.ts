import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivebuttonComponent } from './livebutton.component';

describe('LivebuttonComponent', () => {
  let component: LivebuttonComponent;
  let fixture: ComponentFixture<LivebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivebuttonComponent]
    });
    fixture = TestBed.createComponent(LivebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
