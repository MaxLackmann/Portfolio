import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-background-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-animation.component.html',
  styleUrl: './background-animation.component.scss'
})
export class BackgroundAnimationComponent {
  spans = new Array(7);
}
