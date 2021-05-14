import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBookmarkfreelancerByskillComponent } from './find-bookmarkfreelancer-byskill.component';

describe('FindBookmarkfreelancerByskillComponent', () => {
  let component: FindBookmarkfreelancerByskillComponent;
  let fixture: ComponentFixture<FindBookmarkfreelancerByskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBookmarkfreelancerByskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBookmarkfreelancerByskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
