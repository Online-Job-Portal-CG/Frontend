import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobByskillComponent } from './find-job-byskill.component';

describe('FindJobByskillComponent', () => {
  let component: FindJobByskillComponent;
  let fixture: ComponentFixture<FindJobByskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindJobByskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobByskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
