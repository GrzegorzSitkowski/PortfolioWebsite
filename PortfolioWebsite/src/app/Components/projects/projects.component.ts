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
      title: 'Hotel System',
      technologies: 'ASP.NET, REST API, .NET Core 5.0, EF Core, MediatR, CQRS, XUnit tests, MSSQL, HTML5, CSS3, Bootstrap, ,TypeScript, Angular',
      description: ['Web application to manage reservations of users and rooms.',
      'More: https://github.com/GrzegorzSitkowski/HotelSystem']
    },
    {
      title: 'Running and workouts management web application',
      technologies: 'ASP.NET MVC, .NET Core 5.0, EF Core, XUnit tests, MSSQL, HTML5, CSS3, Bootstrap',
      description: ['Web application to save your run competitions, workouts, photos and goals. You can management your running and track your progress.',
      'More: https://github.com/GrzegorzSitkowski/SportNotepadMVC']
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
