import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkJobComponent } from './freelancer/bookmark-job/bookmark-job.component';
import { CreateBookmarkComponent } from './freelancer/bookmark-job/create-bookmark/create-bookmark.component';
import { FindJobByIdComponent } from './freelancer/bookmark-job/find-job-by-id/find-job-by-id.component';
import { ListBookmarkedJobsComponent } from './freelancer/bookmark-job/list-bookmarked-jobs/list-bookmarked-jobs.component';
import { ListJobsComponent } from './freelancer/bookmark-job/list-jobs/list-jobs.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { JobApplicationComponent } from './freelancer/job-application/job-application.component';
import { SkillExperienceComponent } from './freelancer/skill-experience/skill-experience.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/freelancer',
    pathMatch: 'full'
  },
  {
    path: 'freelancer',
    component: FreelancerComponent
  },
  {
    path: 'freelancer/bmark/job',
    component: BookmarkJobComponent,
    children: [
      {
        path: 'listJobs',
        component: ListJobsComponent
      },
      {
        path: 'find/:id',
        component: FindJobByIdComponent
      },
      {
        path: 'list',
        component: ListBookmarkedJobsComponent
      },
      {
        path: 'add',
        component: CreateBookmarkComponent
      },
      {
        path: 'apply/:id',
        component: JobApplicationComponent
      }
    ]
  },
  {
    path: 'freelancer/skills',
    component: SkillExperienceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerRoutingModule { }
