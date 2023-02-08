import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  myData: string[][] = [
    ['Name', 'Grzegorz Sitkowski'],
    ['DOB', '26/04/1995']
  ];

  aboutMe: string[] = [
    'I am search job as Junior .Net Developer. I like learn new things and to develop my skills,',
    'I am search job as Junior .Net Developer. I like learn new things and to develop my skills,',
    'I am search job as Junior .Net Developer. I like learn new things and to develop my skills.'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
