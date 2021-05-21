import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { BookmarkedfreelancerComponent } from './recruiter/bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FeedbackComponent } from './recruiter/feedback/feedback.component';
import { JobComponent } from './recruiter/job/job.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ListbookmarksComponent } from './recruiter/bookmarkedfreelancer/listbookmarks/listbookmarks.component';
import { ListfreelancersComponent } from './recruiter/bookmarkedfreelancer/listfreelancers/listfreelancers.component';
import { AddJobComponent } from './recruiter/job/add-job/add-job.component';
import { FindJobByidComponent } from './recruiter/job/find-job-byid/find-job-byid.component';
import { FindJobByskillComponent } from './recruiter/job/find-job-byskill/find-job-byskill.component';
import { ListAllJobsComponent } from './recruiter/job/list-all-jobs/list-all-jobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AwardJobComponent } from './recruiter/job/award-job/award-job.component';
import { AddFeedbackComponent } from './recruiter/feedback/add-feedback/add-feedback.component';
import { ListApplicantsComponent } from './recruiter/job/list-applicants/list-applicants.component';


@NgModule({
  declarations: [BookmarkedfreelancerComponent, FeedbackComponent, JobComponent, RecruiterComponent, ListbookmarksComponent, ListfreelancersComponent, AddJobComponent, FindJobByidComponent, FindJobByskillComponent, ListAllJobsComponent, AwardJobComponent, AddFeedbackComponent, ListApplicantsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RecruiterRoutingModule
  ]
})
export class RecruiterModule { }
