import { TestBed } from '@angular/core/testing';

import { RecruiterserviceService } from './recruiterservice.service';

describe('RecruiterserviceService', () => {
  let service: RecruiterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruiterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
