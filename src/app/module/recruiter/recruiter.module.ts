import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { BookmarkedfreelancerComponent } from './bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { JobComponent } from './job/job.component';


@NgModule({
  declarations: [BookmarkedfreelancerComponent, FeedbackComponent, JobComponent],
  imports: [
    CommonModule,
    RecruiterRoutingModule
  ]
})
export class RecruiterModule { }
