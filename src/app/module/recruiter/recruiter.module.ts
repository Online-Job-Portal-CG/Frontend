import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { BookmarkedfreelancerComponent } from './recruiter/bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FeedbackComponent } from './recruiter/feedback/feedback.component';
import { JobComponent } from './recruiter/job/job.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ListbookmarksComponent } from './recruiter/bookmarkedfreelancer/listbookmarks/listbookmarks.component';
import { ListfreelancersComponent } from './recruiter/bookmarkedfreelancer/listfreelancers/listfreelancers.component';


@NgModule({
  declarations: [BookmarkedfreelancerComponent, FeedbackComponent, JobComponent, RecruiterComponent, ListbookmarksComponent, ListfreelancersComponent],
  imports: [
    CommonModule,
    RecruiterRoutingModule
  ]
})
export class RecruiterModule { }
