import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedLanguage: string = 'EN';
  status: boolean = false;

  constructor() {}

  clickEvent() {
    this.status = !this.status;
  }
  clickEventLogo() {
    this.status = false;
  }

  toggleLanguage() {
    // Umschalten der Sprache zwischen 'EN' und 'DE'
    this.selectedLanguage = this.selectedLanguage === 'EN' ? 'DE' : 'EN';
  }
}
