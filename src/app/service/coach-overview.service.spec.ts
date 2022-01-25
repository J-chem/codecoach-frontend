import { TestBed } from '@angular/core/testing';

import { CoachOverviewService } from './coach-overview.service';

describe('CoachOverviewService', () => {
  let service: CoachOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
