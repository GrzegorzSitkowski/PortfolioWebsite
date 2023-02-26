import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    {
      school: 'Technical college',
      course: 'Computer science',
      duration: '09.2011 - 05.2015',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
