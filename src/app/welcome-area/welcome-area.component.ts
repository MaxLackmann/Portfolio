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
    { content: 'Fullstack Developer' },
    { content: 'Based in Erkrath' },
    { content: 'Open to work' },
    { content: 'Available for remote work' }
  ];
}
