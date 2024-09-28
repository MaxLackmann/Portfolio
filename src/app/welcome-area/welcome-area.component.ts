import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-area.component.html',
  styleUrl: './welcome-area.component.scss'
})
export class WelcomeAreaComponent {
  marqueeItems = [
    { content: 'Frontend Developer' },
    { content: 'Based in Erkrath' },
    { content: 'Open to work' },
    { content: 'Available for remote work' },
  ];
    emailItem = { content: 'lackmann_max@hotmail.com', isLink: true };

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
