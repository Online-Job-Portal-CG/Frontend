import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerRoutingModule } from './freelancer-routing.module';
import { SkillComponent } from './skill/skill.component';
import { SkillExperienceComponent } from './skill-experience/skill-experience.component';
import { BookmarkJobComponent } from './bookmark-job/bookmark-job.component';
import { JobApplicationComponent } from './job-application/job-application.component';


@NgModule({
  declarations: [SkillComponent, SkillExperienceComponent, BookmarkJobComponent, JobApplicationComponent],
  imports: [
    CommonModule,
    FreelancerRoutingModule
  ]
})
export class FreelancerModule { }
