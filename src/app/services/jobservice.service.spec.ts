import { TestBed } from '@angular/core/testing';

import { JobserviceService } from './jobservice.service';

describe('JobserviceService', () => {
  let service: JobserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
