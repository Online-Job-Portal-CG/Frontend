import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkJobComponent } from './bookmark-job.component';

describe('BookmarkJobComponent', () => {
  let component: BookmarkJobComponent;
  let fixture: ComponentFixture<BookmarkJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
