import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedfreelancerComponent } from './bookmarkedfreelancer.component';

describe('BookmarkedfreelancerComponent', () => {
  let component: BookmarkedfreelancerComponent;
  let fixture: ComponentFixture<BookmarkedfreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkedfreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
