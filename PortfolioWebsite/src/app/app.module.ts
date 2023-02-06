import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
import { ContactComponent } from './Components/contact/contact.component';
import { EducationComponent } from './Components/education/education.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { WorkExperienceComponent } from './Components/work-experience/work-experience.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { BanerComponent } from './Components/baner/baner.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
    WorkExperienceComponent,
    BanerComponent,
    ProjectsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
