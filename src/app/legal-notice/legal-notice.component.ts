import { Component } from '@angular/core';
import { BackgroundAnimationComponent } from '../background-animation/background-animation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [BackgroundAnimationComponent, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public translateService: TranslateService) {}
}
