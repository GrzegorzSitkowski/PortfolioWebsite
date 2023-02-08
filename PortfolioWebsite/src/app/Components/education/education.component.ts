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
      school: 'Vana Vani School',
      course: 'IT',
      duration: '2007 - 2011',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
