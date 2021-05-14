import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookmarkfreelancerComponent } from './add-bookmarkfreelancer.component';

describe('AddBookmarkfreelancerComponent', () => {
  let component: AddBookmarkfreelancerComponent;
  let fixture: ComponentFixture<AddBookmarkfreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookmarkfreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookmarkfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
