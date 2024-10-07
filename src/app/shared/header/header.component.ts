import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedLanguage: string = 'EN';
  status: boolean = false;

  constructor(public translateService: TranslateService) {}

  clickEvent() {
    this.status = !this.status;
    if (this.status) {
      document.body.style.overflow = 'hidden'; // Bei Öffnung des Menüs
    } else {
      document.body.style.overflow = 'auto'; // Bei Schließen des Menüs
    }
  }
  clickEventLogo() {
    this.status = false;
    document.body.style.overflow = 'auto'; // Bei Schließen des Menüs

  }

  toggleLanguage() {
    this.selectedLanguage = this.selectedLanguage === 'EN' ? 'DE' : 'EN';
    this.translateService.use(this.selectedLanguage.toLowerCase()); // Sprache auf Kleinbuchstaben setzen
  }

  
}
