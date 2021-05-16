import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBookmarkfreelancerByidComponent } from './find-bookmarkfreelancer-byid.component';

describe('FindBookmarkfreelancerByidComponent', () => {
  let component: FindBookmarkfreelancerByidComponent;
  let fixture: ComponentFixture<FindBookmarkfreelancerByidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBookmarkfreelancerByidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBookmarkfreelancerByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
