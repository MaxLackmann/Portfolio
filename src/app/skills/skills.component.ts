import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  items = [
    { imgSrc: './assets/html.svg', text: 'HTML' },
    { imgSrc: './assets/css.svg', text: 'CSS' },
    { imgSrc: './assets/javascript.svg', text: 'JavaScript' },
    { imgSrc: './assets/material.svg', text: 'Material Design' },
    { imgSrc: './assets/typescript.svg', text: 'TypeScript' },
    { imgSrc: './assets/angular.svg', text: 'Angular' },
    { imgSrc: './assets/firebase.svg', text: 'Firebase' },
    { imgSrc: './assets/git.svg', text: 'GIT' },
    { imgSrc: './assets/api.svg', text: 'Rest-Api' },
    { imgSrc: './assets/scrum.svg', text: 'Scrum' },
    { imgSrc: './assets/growthmindset.svg', text: 'Growth mindset' },
  ];
}