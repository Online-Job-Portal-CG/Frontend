import { TestBed } from '@angular/core/testing';

import { FreelancerService } from './freelancer.service';

describe('FreelancerService', () => {
  let service: FreelancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
