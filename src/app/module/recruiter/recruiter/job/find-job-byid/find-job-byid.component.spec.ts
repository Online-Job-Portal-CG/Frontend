import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobByidComponent } from './find-job-byid.component';

describe('FindJobByidComponent', () => {
  let component: FindJobByidComponent;
  let fixture: ComponentFixture<FindJobByidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindJobByidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
