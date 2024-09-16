import { Component } from '@angular/core';
import { WelcomeAreaComponent } from '../welcome-area/welcome-area.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [WelcomeAreaComponent, AboutmeComponent, SkillsComponent, PortfolioComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
