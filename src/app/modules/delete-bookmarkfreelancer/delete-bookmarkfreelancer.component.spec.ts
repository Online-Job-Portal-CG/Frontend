import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookmarkfreelancerComponent } from './delete-bookmarkfreelancer.component';

describe('DeleteBookmarkfreelancerComponent', () => {
  let component: DeleteBookmarkfreelancerComponent;
  let fixture: ComponentFixture<DeleteBookmarkfreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBookmarkfreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBookmarkfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
