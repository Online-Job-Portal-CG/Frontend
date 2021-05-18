import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookmarkfreelancerComponent } from './recruiter/bookmarkedfreelancer/add-bookmarkfreelancer/add-bookmarkfreelancer.component';
import { BookmarkedfreelancerComponent } from './recruiter/bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FindBookmarkfreelancerByidComponent } from './recruiter/bookmarkedfreelancer/find-bookmarkfreelancer-byid/find-bookmarkfreelancer-byid.component';
import { FindBookmarkfreelancerByskillComponent } from './recruiter/bookmarkedfreelancer/find-bookmarkfreelancer-byskill/find-bookmarkfreelancer-byskill.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
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
        path: 'add',
        component: AddBookmarkfreelancerComponent
      },
      {
        path: 'find/id/:id',
        component: FindBookmarkfreelancerByidComponent
      },
      {
        path: 'find/name/:skillName',
        component: FindBookmarkfreelancerByskillComponent
      }
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
