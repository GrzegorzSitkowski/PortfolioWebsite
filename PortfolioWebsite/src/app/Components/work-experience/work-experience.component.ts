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
      role: 'Analyst',
      company: 'Orange',
      duration: 'Sep 2015 - Jul 2022',
      description: [
        'Invocing client',
        'Report bugs',
        'Fix bugs'
      ],
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
