import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    {
      type: 'Languages and Frameworks',
      name: 'C#, SQL, .Net Framework, ASP.NET, Entity Framework, REST API, HTML, CSS, JavaScript, TypeScript, Angular, Bootstrap'
    },
    {
      type: 'Tools',
      name: 'Microsoft SQL Server, Visual Studio, Git'
    },
    {
      type: 'Techniques/Practices',
      name: 'MVC, CQRS, XUnit, Unit Tests, Fluent Validation, MediatR, SOLID'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
