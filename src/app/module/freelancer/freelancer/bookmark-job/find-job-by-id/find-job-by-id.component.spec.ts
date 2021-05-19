import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobByIdComponent } from './find-job-by-id.component';

describe('FindJobByIdComponent', () => {
  let component: FindJobByIdComponent;
  let fixture: ComponentFixture<FindJobByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindJobByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
