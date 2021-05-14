import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreelancerComponent } from './component/freelancer/freelancer.component';
import { FreelancerModule } from './module/freelancer/freelancer.module';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddBookmarkfreelancerComponent } from './modules/add-bookmarkfreelancer/add-bookmarkfreelancer.component';
import { DeleteBookmarkfreelancerComponent } from './modules/delete-bookmarkfreelancer/delete-bookmarkfreelancer.component';
import { FindBookmarkfreelancerByskillComponent } from './modules/find-bookmarkfreelancer-byskill/find-bookmarkfreelancer-byskill.component';
import { FindBookmarkfreelancerByidComponent } from './modules/find-bookmarkfreelancer-byid/find-bookmarkfreelancer-byid.component';

@NgModule({
  declarations: [
    AppComponent,
    FreelancerComponent,
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
    FreelancerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
