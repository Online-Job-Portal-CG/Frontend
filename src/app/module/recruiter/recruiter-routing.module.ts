import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwardJobComponent } from './recruiter/job/award-job/award-job.component';
import { AddBookmarkfreelancerComponent } from './recruiter/bookmarkedfreelancer/add-bookmarkfreelancer/add-bookmarkfreelancer.component';
import { BookmarkedfreelancerComponent } from './recruiter/bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FindBookmarkfreelancerByidComponent } from './recruiter/bookmarkedfreelancer/find-bookmarkfreelancer-byid/find-bookmarkfreelancer-byid.component';
import { ListbookmarksComponent} from './recruiter/bookmarkedfreelancer/listbookmarks/listbookmarks.component'
import { ListfreelancersComponent } from './recruiter/bookmarkedfreelancer/listfreelancers/listfreelancers.component';
import { FeedbackComponent } from './recruiter/feedback/feedback.component';
import { AddJobComponent } from './recruiter/job/add-job/add-job.component';
import { FindJobByidComponent } from './recruiter/job/find-job-byid/find-job-byid.component';
import { FindJobByskillComponent } from './recruiter/job/find-job-byskill/find-job-byskill.component';
import { JobComponent } from './recruiter/job/job.component';
import { ListAllJobsComponent } from './recruiter/job/list-all-jobs/list-all-jobs.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { AddFeedbackComponent } from './recruiter/feedback/add-feedback/add-feedback.component';
import { ListApplicantsComponent } from './recruiter/job/list-applicants/list-applicants.component';
const routes: Routes = [
  //base path
  { path: '', redirectTo: '/recruiter', pathMatch: 'full' },
  //path to bookmarkfreelancer and its services
  {
    path: 'recruiter',
    component: RecruiterComponent,
  },
  {
    path: 'recruiter/bmark/freelancer',
    component: BookmarkedfreelancerComponent,
    children: [
      {
        path: 'listFreelancers',
        component: ListfreelancersComponent, 
      },
      {
        path: 'add',
        component: AddBookmarkfreelancerComponent
      },
      {
        path: 'find/:id',
        component: FindBookmarkfreelancerByidComponent
      },
      {
        path: 'list',
        component: ListbookmarksComponent
      }
    ],
  },
  {
    path: 'recruiter/jobs',
    component: JobComponent,
    children: [
      {
        path: 'create',
        component: AddJobComponent
      },
      {
        path: 'findSkill/:skill',
        component: FindJobByskillComponent
      },
      {
        path: 'list',
        component: ListAllJobsComponent
      },
      {
        path: 'award/:jobId',
        component:  AwardJobComponent
      },
      {
        path: 'viewApps/:jobId',
        component: ListApplicantsComponent
      }
    ]
  },
  {
    path: 'recruiter/feedbacks/:frId',
    component: FeedbackComponent
  },
  {
    path: 'recruiter/feedbacks/add/:frUName',
    component: AddFeedbackComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
