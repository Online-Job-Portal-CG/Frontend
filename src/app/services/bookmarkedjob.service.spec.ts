import { TestBed } from '@angular/core/testing';

import { BookmarkedjobService } from './bookmarkedjob.service';

describe('BookmarkedjobService', () => {
  let service: BookmarkedjobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkedjobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
