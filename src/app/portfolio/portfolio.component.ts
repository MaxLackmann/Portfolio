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
    skills: string[];
    projectImage: string[];
  }[] = [
    {
      projectName: 'Join',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      projectImage: ['./assets/join.svg'],
    },
    {
      projectName: 'El Pollo Loco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      projectImage: ['./assets/elpolloloco.svg'],
    },
    {
      projectName: 'DaBubble',
      skills: ['Angular', 'Firebase', 'TypeScript'],
      projectImage: ['./assets/dabubble.svg'],
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
