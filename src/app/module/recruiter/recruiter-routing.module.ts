import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookmarkfreelancerComponent } from './recruiter/bookmarkedfreelancer/add-bookmarkfreelancer/add-bookmarkfreelancer.component';
import { BookmarkedfreelancerComponent } from './recruiter/bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FindBookmarkfreelancerByidComponent } from './recruiter/bookmarkedfreelancer/find-bookmarkfreelancer-byid/find-bookmarkfreelancer-byid.component';
import { ListbookmarksComponent} from './recruiter/bookmarkedfreelancer/listbookmarks/listbookmarks.component'
import { ListfreelancersComponent } from './recruiter/bookmarkedfreelancer/listfreelancers/listfreelancers.component';
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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
