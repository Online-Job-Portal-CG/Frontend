import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { RecruitersComponent } from './admin/recruiters/recruiters.component';
import { FreelancersComponent } from './admin/freelancers/freelancers.component';
import { AddSkillComponent } from './admin/skills/add-skill/add-skill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, SkillsComponent, RecruitersComponent, FreelancersComponent, AddSkillComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
