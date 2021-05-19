import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillExperienceComponent } from './skill-experience.component';

describe('SkillExperienceComponent', () => {
  let component: SkillExperienceComponent;
  let fixture: ComponentFixture<SkillExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
