import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { AddBookmarkfreelancerComponent } from './modules/add-bookmarkfreelancer/add-bookmarkfreelancer.component';
import { DeleteBookmarkfreelancerComponent } from './modules/delete-bookmarkfreelancer/delete-bookmarkfreelancer.component';
import { FindBookmarkfreelancerByskillComponent } from './modules/find-bookmarkfreelancer-byskill/find-bookmarkfreelancer-byskill.component';
import { FindBookmarkfreelancerByidComponent } from './modules/find-bookmarkfreelancer-byid/find-bookmarkfreelancer-byid.component';
import { AdminService } from './services/admin.service'
import { BookmarkedfreelancerService } from './services/bookmarkedfreelancer.service'
import { BookmarkedjobService } from './services/bookmarkedjob.service'
import { FeedbackService } from './services/feedback.service'
import { FreelancerService } from './services/freelancer.service'
import { JobService } from './services/job.service'
import { JobapplicationService } from './services/jobapplication.service'
import { RecruiterService } from './services/recruiter.service'
import { SkillService } from './services/skill.service'
import { SkillexperienceService } from './services/skillexperience.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    AddBookmarkfreelancerComponent,
    DeleteBookmarkfreelancerComponent,
    FindBookmarkfreelancerByskillComponent,
    FindBookmarkfreelancerByidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
