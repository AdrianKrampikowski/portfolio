import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}
  skills: any = [
    { img: 'assets/img/skillHTML.svg', name: 'HTML' },
    { img: 'assets/img/skillCSS.svg', name: 'CSS' },
    { img: 'assets/img/skillJavaScript.svg', name: 'JavaScript' },
    { img: 'assets/img/skillRestApi.svg', name: 'Rest-Api' },
    { img: 'assets/img/skillGit.svg', name: 'Git' },
    { img: 'assets/img/skillScrum.svg', name: 'Scrum' },
    { img: 'assets/img/skillAngular.svg', name: 'Angular' },
    { img: 'assets/img/skillTypeScript.svg', name: 'TypeScript' },
    { img: 'assets/img/skillFirebase.svg', name: 'Firebase' },
    { img: 'assets/img/skillMaterialDesign.svg', name: 'Material design' },
  ];
  ngOnInit(): void {}
}
