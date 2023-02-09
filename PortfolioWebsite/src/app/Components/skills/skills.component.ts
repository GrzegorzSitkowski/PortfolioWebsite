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
      type: 'Programming',
      name: 'C#, Entity Framework, TypeScript, Angular'
    },
    {
      type: 'Tools',
      name: 'Microsoft SQL Server, Visual Studio, Git'
    },
    {
      type: 'Pratices',
      name: 'Clean Architecture, Unit Tests, DDD, SOLID'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
