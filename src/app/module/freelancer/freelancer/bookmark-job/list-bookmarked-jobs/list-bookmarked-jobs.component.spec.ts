import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookmarkedJobsComponent } from './list-bookmarked-jobs.component';

describe('ListBookmarkedJobsComponent', () => {
  let component: ListBookmarkedJobsComponent;
  let fixture: ComponentFixture<ListBookmarkedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBookmarkedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookmarkedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
