import { TestBed } from '@angular/core/testing';

import { FreelancerserviceService } from './freelancerservice.service';

describe('FreelancerserviceService', () => {
  let service: FreelancerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
