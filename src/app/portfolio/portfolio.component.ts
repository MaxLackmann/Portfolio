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
  projects: { projectName: string; skills: string[] }[] = [
    {
      projectName: 'Join',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    },
    { projectName: 'El Pollo Loco', skills: ['HTML',  'CSS', 'JavaScript'] },
    { projectName: 'Simple CRM', skills: ['Angular',  'Firebase',  'TypeScript' ] },
  ];
}
