import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsectionComponent } from './topsection.component';

describe('TopsectionComponent', () => {
  let component: TopsectionComponent;
  let fixture: ComponentFixture<TopsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopsectionComponent]
    });
    fixture = TestBed.createComponent(TopsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
