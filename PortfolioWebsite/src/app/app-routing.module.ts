import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanerComponent } from './Components/baner/baner.component';
import { ContactComponent } from './Components/contact/contact.component';
import { EducationComponent } from './Components/education/education.component';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { WorkExperienceComponent } from './Components/work-experience/work-experience.component';

const routes: Routes = [
  {
    path: 'baner',
    component: BanerComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'personal-information',
    component: PersonalInformationComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'work-experience',
    component: WorkExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
