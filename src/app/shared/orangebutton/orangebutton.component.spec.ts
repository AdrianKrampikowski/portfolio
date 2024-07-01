import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangebuttonComponent } from './orangebutton.component';

describe('OrangebuttonComponent', () => {
  let component: OrangebuttonComponent;
  let fixture: ComponentFixture<OrangebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrangebuttonComponent]
    });
    fixture = TestBed.createComponent(OrangebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
