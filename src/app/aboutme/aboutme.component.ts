import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {

  constructor(public translateService: TranslateService) {}

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      offset: 0,
      easing: 'ease-in-out',
    });
  }
}
