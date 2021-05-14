import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { AddBookmarkfreelancerComponent } from './module/recruiter/bookmarkedfreelancer/add-bookmarkfreelancer/add-bookmarkfreelancer.component';
import { FindBookmarkfreelancerByskillComponent } from './module/recruiter/bookmarkedfreelancer/find-bookmarkfreelancer-byskill/find-bookmarkfreelancer-byskill.component';
import { FindBookmarkfreelancerByidComponent } from './module/recruiter/bookmarkedfreelancer/find-bookmarkfreelancer-byid/find-bookmarkfreelancer-byid.component';

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
import { BookmarkedFreelancerModule } from './module/bookmarked-freelancer/bookmarked-freelancer.module';
import { AdminModule } from './module/admin/admin.module';
import { FreelancerModule } from './module/freelancer/freelancer.module';
import { RecruiterModule } from './module/recruiter/recruiter.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    AddBookmarkfreelancerComponent,
    FindBookmarkfreelancerByskillComponent,
    FindBookmarkfreelancerByidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookmarkedFreelancerModule,
    AdminModule,
    FreelancerModule,
    RecruiterModule,
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
