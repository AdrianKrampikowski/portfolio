import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitbuttonComponent } from './gitbutton.component';

describe('GitbuttonComponent', () => {
  let component: GitbuttonComponent;
  let fixture: ComponentFixture<GitbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitbuttonComponent]
    });
    fixture = TestBed.createComponent(GitbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
