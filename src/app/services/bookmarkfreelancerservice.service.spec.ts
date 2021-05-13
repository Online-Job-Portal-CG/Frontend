import { TestBed } from '@angular/core/testing';

import { BookmarkfreelancerserviceService } from './bookmarkfreelancerservice.service';

describe('BookmarkfreelancerserviceService', () => {
  let service: BookmarkfreelancerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkfreelancerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
