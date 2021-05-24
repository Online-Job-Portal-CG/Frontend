import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FreelancersComponent } from './admin/freelancers/freelancers.component';
import { RecruitersComponent } from './admin/recruiters/recruiters.component';
import { AddSkillComponent } from './admin/skills/add-skill/add-skill.component';
import { SkillsComponent } from './admin/skills/skills.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/admin', pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/recruiters',
    component: RecruitersComponent
  },
  {
    path: 'admin/freelancers',
    component: FreelancersComponent
  },
  {
    path: 'admin/skills',
    component: SkillsComponent,
  },
  {
    path: 'admin/skills/add',
    component: AddSkillComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
