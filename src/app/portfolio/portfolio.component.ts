import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  hoveredProject: number | null = null;
  projects: {
    projectName: string;
    projectImage: string[];
    skills: string[];
    skillImages: string[];
    githublink: string;
    livetestlink: string;
    description: string;
  }[] = [
    {
      projectName: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      projectImage: ['./assets/join.svg'],
      skillImages: [],
      githublink: '',
      livetestlink: '',
      description: '',
    },
    {
      projectName: 'El Pollo Loco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      projectImage: ['./assets/elpolloloco.svg'],
      skillImages: [],
      githublink: '',
      livetestlink: '',
      description: '',
    },
    {
      projectName: 'DaBubble',
      skills: ['Angular', 'Firebase', 'TypeScript'],
      projectImage: ['./assets/dabubble.svg'],
      skillImages: [],
      githublink: '',
      livetestlink: '',
      description: '',
    },
  ];

  setHoveredProject(index: number) {
    this.hoveredProject = index;
  }

  // Methode, um den Hover-Zustand zu löschen
  clearHoveredProject() {
    this.hoveredProject = null;
  }

  constructor() {}
}
