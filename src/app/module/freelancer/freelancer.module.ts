import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerRoutingModule } from './freelancer-routing.module';
import { SkillComponent } from './freelancer/skill/skill.component';
import { SkillExperienceComponent } from './freelancer/skill-experience/skill-experience.component';
import { BookmarkJobComponent } from './freelancer/bookmark-job/bookmark-job.component';
import { JobApplicationComponent } from './freelancer/job-application/job-application.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { CreateBookmarkComponent } from './freelancer/bookmark-job/create-bookmark/create-bookmark.component';
import { ListJobsComponent } from './freelancer/bookmark-job/list-jobs/list-jobs.component';
import { FindJobByIdComponent } from './freelancer/bookmark-job/find-job-by-id/find-job-by-id.component';
import { ListBookmarkedJobsComponent } from './freelancer/bookmark-job/list-bookmarked-jobs/list-bookmarked-jobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SkillComponent, SkillExperienceComponent, BookmarkJobComponent, JobApplicationComponent, FreelancerComponent, CreateBookmarkComponent, ListJobsComponent, FindJobByIdComponent, ListBookmarkedJobsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FreelancerRoutingModule
  ]
})
export class FreelancerModule { }
