import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recruiter-dashboard',
    loadChildren: () => import('./module/recruiter/recruiter.module').then(m => m.RecruiterModule)
  },
  {
    path: 'freelancer-dashboard',
    loadChildren: () => import('./module/freelancer/freelancer.module').then(m => m.FreelancerModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
