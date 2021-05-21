import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSkillComponent } from './update-skill.component';

describe('UpdateSkillComponent', () => {
  let component: UpdateSkillComponent;
  let fixture: ComponentFixture<UpdateSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
