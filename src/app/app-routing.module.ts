import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'recruiter',
    loadChildren: () => import('./module/recruiter/recruiter.module').then(m => m.RecruiterModule)
  },
  {
    path: 'freelancer',
    loadChildren: () => import('./module/freelancer/freelancer.module').then(m => m.FreelancerModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
