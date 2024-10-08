import { Component } from '@angular/core';
import { WelcomeAreaComponent } from '../welcome-area/welcome-area.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';
import { BackgroundAnimationComponent } from '../background-animation/background-animation.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from '../legal-notice/legal-notice.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    WelcomeAreaComponent,
    AboutmeComponent,
    SkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent,
    BackgroundAnimationComponent,
    PrivacyPolicyComponent,
    LegalNoticeComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
