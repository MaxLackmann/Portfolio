import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private headerHeight = 80; // Höhe des festen Headers

  constructor() {}

  initSmoothScroll(): void {
    // Alle Links mit href, die mit '#' beginnen
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    // Füge jedem Link einen EventListener hinzu
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        event.preventDefault(); // Verhindert das normale Sprungverhalten
        
        const targetId = (anchor as HTMLAnchorElement).getAttribute('href');

        if (targetId) {
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - this.headerHeight,
              behavior: 'smooth' // Sanftes Scrollen
            });
          }
        }
      });
    });
  }
}