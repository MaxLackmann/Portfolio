import { Component } from '@angular/core';
import { BackgroundAnimationComponent } from '../background-animation/background-animation.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, ViewportScroller } from '@angular/common'; // ViewportScroller importiert

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    BackgroundAnimationComponent,
    TranslateModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(
    public translateService: TranslateService,
    private viewportScroller: ViewportScroller
  ) {
    this.scrollToTop();
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
