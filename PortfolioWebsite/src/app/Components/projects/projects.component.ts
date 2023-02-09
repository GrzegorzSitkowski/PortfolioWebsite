import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [

    {
      title: 'SporteNotepadMVC',
      technologies: 'C#, MVC, Microsoft SQL Server, Entity Framework, Unit Tests',
      description: ['Application to save your own records of running.']
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
