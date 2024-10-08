import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ScrollService } from './scroll-service.service'; // ScrollService importieren

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private scrollService: ScrollService, // ScrollService injizieren
    translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngAfterViewInit(): void {
    this.scrollService.initSmoothScroll(); // Scroll-Logik aktivieren
  }
}