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
    'I am search job as Junior .Net Developer. I live in Łódź (current), I am open to relocate.',
    'In my opinion developing your skills is dangerous. I not like to standing in one place. So I try to develop my skills and learn new things.',
    'I like to create something out of nothing. I would like to work on projects that help for people in every part of their lives.'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
