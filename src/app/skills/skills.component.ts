import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollService } from '../scroll-service.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  Frontendskills = [
    { imgSrc: './assets/img/html.svg', text: 'HTML' },
    { imgSrc: './assets/img/css.svg', text: 'CSS' },
    { imgSrc: './assets/img/javascript.svg', text: 'JavaScript' },
    { imgSrc: './assets/img/material.svg', text: 'Material Design' },
    { imgSrc: './assets/img/typescript.svg', text: 'TypeScript' },
    { imgSrc: './assets/img/angular.svg', text: 'Angular' },
    { imgSrc: './assets/img/firebase.svg', text: 'Firebase' },
    { imgSrc: './assets/img/git.svg', text: 'GIT' },
    { imgSrc: './assets/img/api.svg', text: 'Rest-Api' },
    { imgSrc: './assets/img/scrum.svg', text: 'Scrum' },
    {
      imgSrc: './assets/img/growthmindset.svg',
      text: 'Growth mindset',
      tooltip: 'skills.growth-mindset',
      tooltipIcons: ['./assets/img/php.png', './assets/img/react.png'],
    },
  ];

  Backendskills = [
    { imgSrc: './assets/img/Linux.svg', text: 'Linux' },
    { imgSrc: './assets/img/Python.svg', text: 'Python' },
    { imgSrc: './assets/img/Docker.svg', text: 'Docker' },
    { imgSrc: './assets/img/SQL.svg', text: 'SQL' },
    { imgSrc: './assets/img/Django.svg', text: 'Django' },
    { imgSrc: './assets/img/Redis.svg', text: 'Redis' },
    { imgSrc: './assets/img/PostgreSQL.svg', text: 'PostgreSQL' },
    { imgSrc: './assets/img/Heroku.svg', text: 'Heroku' },
    { imgSrc: './assets/img/Flask.svg', text: 'Flask' },
    { imgSrc: './assets/img/Cloud.svg', text: 'Cloud' },
    {
      imgSrc: './assets/img/growthmindset.svg',
      text: 'Growth mindset',
      tooltip: 'skills.growth-mindset',
      tooltipIcons: [
        './assets/img/Devops.png',
        './assets/img/LLMApplication.png',
      ],
    },
  ];

  items = this.Frontendskills;
  activeCategory: 'frontend' | 'backend' = 'frontend';

  constructor(
    public translateService: TranslateService,
    private scrollService: ScrollService
  ) {}

  ngAfterViewInit(): void {
    this.scrollService.initSmoothScroll();
    AOS.init({
      duration: 500,
      offset: 0,
      easing: 'ease-in-out',
    });
  }

  toggleSkills(): void {
    this.activeCategory =
      this.activeCategory === 'frontend' ? 'backend' : 'frontend';
    this.items =
      this.activeCategory === 'frontend'
        ? this.Frontendskills
        : this.Backendskills;
  }

  showFrontend(): void {
    this.items = this.Frontendskills;
    this.activeCategory = 'frontend';
  }

  showBackend(): void {
    this.items = this.Backendskills;
    this.activeCategory = 'backend';
  }
}
