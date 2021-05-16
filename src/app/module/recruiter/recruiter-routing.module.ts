import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookmarkfreelancerComponent } from './recruiter/bookmarkedfreelancer/add-bookmarkfreelancer/add-bookmarkfreelancer.component';
import { BookmarkedfreelancerComponent } from './recruiter/bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FindBookmarkfreelancerByidComponent } from './recruiter/bookmarkedfreelancer/find-bookmarkfreelancer-byid/find-bookmarkfreelancer-byid.component';
import { FindBookmarkfreelancerByskillComponent } from './recruiter/bookmarkedfreelancer/find-bookmarkfreelancer-byskill/find-bookmarkfreelancer-byskill.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
const routes: Routes = [
  //base path
  { path: '', redirectTo: 'recruiter', pathMatch: 'full' },
  //path to bookmarkfreelancer and its services
  {
    path: '',
    component: RecruiterComponent,
    children:[
      {
        path: 'bmark/freelancer',
        component: BookmarkedfreelancerComponent,
        children: [
          {
            path: 'add',
            component: AddBookmarkfreelancerComponent
          },
          {
            path: 'find/:id',
            component: FindBookmarkfreelancerByidComponent
          },
          {
            path: 'find/:skillName',
            component: FindBookmarkfreelancerByskillComponent
          }
        ],
      },
      //path to feedback and its services
      // {
      //   path: 'feedback',
      //   component: FeedbackComponent,
      //   children: [
      //     {
    
      //     },
      //     {
    
      //     }
      //   ]
      // },
      // //path to job and its services
      // {
      //   path: 'job',
      //   component: JobComponent,
      //   children: [
      //     {
    
      //     },
      //     {
    
      //     }
      //   ]
      // }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
