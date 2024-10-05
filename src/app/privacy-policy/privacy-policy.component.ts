import { Component } from '@angular/core';
import { BackgroundAnimationComponent } from '../background-animation/background-animation.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [BackgroundAnimationComponent, TranslateModule, RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(public translateService: TranslateService) {}
}
