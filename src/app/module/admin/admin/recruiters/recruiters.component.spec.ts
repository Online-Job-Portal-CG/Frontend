import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersComponent } from './recruiters.component';

describe('RecruitersComponent', () => {
  let component: RecruitersComponent;
  let fixture: ComponentFixture<RecruitersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
