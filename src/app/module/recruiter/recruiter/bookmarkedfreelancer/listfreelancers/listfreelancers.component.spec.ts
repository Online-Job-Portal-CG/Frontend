import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfreelancersComponent } from './listfreelancers.component';

describe('ListfreelancersComponent', () => {
  let component: ListfreelancersComponent;
  let fixture: ComponentFixture<ListfreelancersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfreelancersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
