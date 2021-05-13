import { TestBed } from '@angular/core/testing';

import { BookmarkjobserviceService } from './bookmarkjobservice.service';

describe('BookmarkjobserviceService', () => {
  let service: BookmarkjobserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkjobserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
