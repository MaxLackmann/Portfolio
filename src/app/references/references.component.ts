import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent {
  comments: { name: string; description: string }[] = [
    {
      name: 'Lukas',
      description: 'I am very satisfied with the service. I really enjoyed it',
    },
    {
      name: 'Marco Dos Santos',
      description: 'very professional and efficient work. I am very satisfied',
    },
    {
      name: 'Stefan',
      description: 'I am very satisfied with the quality. Excellent support!',
    },
    {
      name: 'Markus',
      description: 'The team did a great job and delivered on time.',
    },
    { name: 'Benedikt', description: 'Very professional and efficient work.' },
    {
      name: 'Raupke',
      description: 'I highly recommend this team for their dedication.',
    },
  ];

  currentIndex = 0;
  visibleCards: any = [];

  constructor() {
    this.updateVisibleCards();
  }

  updateVisibleCards() {
    this.visibleCards = this.comments.slice(
      this.currentIndex,
      this.currentIndex + 3
    );
    if (this.visibleCards.length < 3) {
      this.visibleCards = this.visibleCards.concat(
        this.comments.slice(0, 3 - this.visibleCards.length)
      );
    }
  }

  nextCard() {
    this.animateSlide('next');
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.comments.length;
      this.updateVisibleCards();
    }, 500); // Match the duration of the CSS transition
  }

  prevCard() {
    this.animateSlide('prev');
    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.comments.length) % this.comments.length;
      this.updateVisibleCards();
    }, 500); // Match the duration of the CSS transition
  }

  animateSlide(direction: string) {
    const cardContainer = document.querySelector('.card-container') as HTMLElement;
    if (direction === 'next') {
      cardContainer.style.transform = 'translateX(-33.33%)';
    } else {
      cardContainer.style.transform = 'translateX(33.33%)';
    }
    setTimeout(() => {
      cardContainer.style.transition = 'none';
      cardContainer.style.transform = 'translateX(0)';
      setTimeout(() => {
        cardContainer.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    }, 500);
  }
}
