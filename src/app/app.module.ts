import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { AddBookmarkfreelancerComponent } from './module/recruiter/recruiter/bookmarkedfreelancer/add-bookmarkfreelancer/add-bookmarkfreelancer.component';
import { FindBookmarkfreelancerByidComponent } from './module/recruiter/recruiter/bookmarkedfreelancer/find-bookmarkfreelancer-byid/find-bookmarkfreelancer-byid.component';

import { AdminService } from './services/admin.service'
import { BookmarkedfreelancerService } from './services/bookmarkedfreelancer.service'
import { BookmarkedjobService } from './services/bookmarkedjob.service'
import { FeedbackService } from './services/feedback.service'
import { FreelancerService } from './services/freelancer.service'
import { JobService } from './services/job.service'
import { JobapplicationService } from './services/jobapplication.service'
import { RecruiterService } from './services/recruiter.service'
import { SkillService } from './services/skill.service'
import { SkillexperienceService } from './services/skillexperience.service';
import { AdminModule } from './module/admin/admin.module';
import { FreelancerModule } from './module/freelancer/freelancer.module';
import { RecruiterModule } from './module/recruiter/recruiter.module';
import { LoginComponent } from './components/login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    AddBookmarkfreelancerComponent,
    FindBookmarkfreelancerByidComponent,
    LoginComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    FreelancerModule,
    RecruiterModule,
    HttpClientModule
  ],
  providers: [
    AdminService,
    BookmarkedfreelancerService,
    BookmarkedjobService,
    FeedbackService,
    FreelancerService,
    JobService,
    JobapplicationService,
    RecruiterService,
    SkillService,
    SkillexperienceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
