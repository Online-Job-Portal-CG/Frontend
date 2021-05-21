import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApplicantsComponent } from './list-applicants.component';

describe('ListApplicantsComponent', () => {
  let component: ListApplicantsComponent;
  let fixture: ComponentFixture<ListApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
