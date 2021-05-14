import { TestBed } from '@angular/core/testing';

import { BookmarkedfreelancerService } from './bookmarkedfreelancer.service';

describe('BookmarkedfreelancerService', () => {
  let service: BookmarkedfreelancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkedfreelancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
