import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
import { ContactComponent } from './Components/contact/contact.component';
import { EducationComponent } from './Components/education/education.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { WorkExperienceComponent } from './Components/work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
