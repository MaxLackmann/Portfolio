import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome-area',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './welcome-area.component.html',
  styleUrl: './welcome-area.component.scss',
})
export class WelcomeAreaComponent {
  marqueeItems = [
    { content: 'welcome-area.span1' },
    { content: 'welcome-area.span2' },
    { content: 'welcome-area.span3' },
    { content: 'welcome-area.span4' },
  ];
  emailItem = { content: 'info@maximilian-lackmann.com', isLink: true };

  constructor(public translateService: TranslateService) {}

  getItemsWithEmail(): any[] {
    const itemsWithEmail = [];
    for (let i = 0; i < this.marqueeItems.length; i++) {
      itemsWithEmail.push(this.marqueeItems[i]);
      if ((i + 1) % 2 === 0) {
        itemsWithEmail.push(this.emailItem); // E-Mail nach jedem zweiten Element einfügen
      }
    }
    return itemsWithEmail;
  }
}
