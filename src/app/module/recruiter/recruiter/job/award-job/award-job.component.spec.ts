import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardJobComponent } from './award-job.component';

describe('AwardJobComponent', () => {
  let component: AwardJobComponent;
  let fixture: ComponentFixture<AwardJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
