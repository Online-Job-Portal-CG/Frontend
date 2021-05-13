import { TestBed } from '@angular/core/testing';

import { JobapplicationserviceService } from './jobapplicationservice.service';

describe('JobapplicationserviceService', () => {
  let service: JobapplicationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobapplicationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
