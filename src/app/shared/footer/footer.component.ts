import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalNoticeComponent } from '../../legal-notice/legal-notice.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LegalNoticeComponent, RouterLink, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public translateService: TranslateService) {}
}
