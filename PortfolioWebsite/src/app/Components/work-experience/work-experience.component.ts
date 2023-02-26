import { Component, OnInit } from '@angular/core';
import { WorkExpierience } from 'src/app/models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExpList: WorkExpierience[] = [
    {
      role: 'Senior Analyst',
      company: 'Orange',
      duration: 'Jun 2022 - Present',
      description: [
        'Invoicing of clients',
        'Reporting bugs',
        'Creating reports',
        'Creating tools to optimize work(in C#/SQL)'
      ],
    },
    {
      role: 'Analyst',
      company: 'Orange',
      duration: 'Mar 2017 - Jun 2022',
      description: [
        'Invoicing of clients',
        'Reporting bugs',
        'Creating reports'
      ],
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
