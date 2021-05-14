import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookmarkfreelancerComponent } from './bookmarkedfreelancer/add-bookmarkfreelancer/add-bookmarkfreelancer.component';
import { BookmarkedfreelancerComponent } from './bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FindBookmarkfreelancerByidComponent } from './bookmarkedfreelancer/find-bookmarkfreelancer-byid/find-bookmarkfreelancer-byid.component';
import { FindBookmarkfreelancerByskillComponent } from './bookmarkedfreelancer/find-bookmarkfreelancer-byskill/find-bookmarkfreelancer-byskill.component';

const routes: Routes = [
  {path:'', redirectTo:'recruiter', pathMatch:'full'},
  {
    path:'/bmark/freelancer',
    component: BookmarkedfreelancerComponent,
    children:[
      {
        path:'/add',
        component:AddBookmarkfreelancerComponent
      },
      {
        path:'/find/:id',
        component:FindBookmarkfreelancerByidComponent
      },
      {
        path:'/find/:skillName',
        component:FindBookmarkfreelancerByskillComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
