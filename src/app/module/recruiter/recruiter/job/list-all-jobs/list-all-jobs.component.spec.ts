import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllJobsComponent } from './list-all-jobs.component';

describe('ListAllJobsComponent', () => {
  let component: ListAllJobsComponent;
  let fixture: ComponentFixture<ListAllJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
