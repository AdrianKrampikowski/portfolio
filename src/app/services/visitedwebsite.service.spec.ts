import { TestBed } from '@angular/core/testing';

import { VisitedwebsiteService } from './visitedwebsite.service';

describe('VisitedwebsiteService', () => {
  let service: VisitedwebsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitedwebsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
