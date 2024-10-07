import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent {
  comments: { name: string; description: string }[] = [
    {
      name: 'Yassin Benjelloun',
      description: 'references.description1',
    },
    {
      name: 'Marco Angermann',
      description: 'references.description2',
    },
    {
      name: 'Lukas Nolting',
      description: 'references.description3',
    },
    {
      name: 'James Dunn',
      description: 'references.description4',
    },
    {
      name: 'Nafi Müftüoglu',
      description: 'references.description5',
    },
    {
      name: 'John Smith',
      description: 'references.description6',
    },
  ];

  currentIndex = 0;
  visibleCards: any = [];
  dotAnimationState: boolean[] = [];
  animationDirection: 'next' | 'prev' = 'next'; // Track the direction of the animation

  constructor(public translateService: TranslateService) {
    this.updateVisibleCards();
    this.initializeDotAnimationState(); // Initialize dots to white
  }

  initializeDotAnimationState() {
    const totalDots = Math.min(this.comments.length, 3);
    this.dotAnimationState = Array(totalDots).fill(false); // Set initial dots to active (white)
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
    this.animationDirection = 'next'; // Set direction for next card
    this.animateSlide('next');
    this.startDotAnimation(); // Use updated animation logic
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.comments.length;
      this.updateVisibleCards();
      this.resetDotAnimationState();
    }, 500);
  }

  prevCard() {
    this.animationDirection = 'prev'; // Set direction for previous card
    this.animateSlide('prev');
    this.startDotAnimation(); // Use updated animation logic
    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.comments.length) % this.comments.length;
      this.updateVisibleCards();
      this.resetDotAnimationState();
    }, 500);
  }

  animateSlide(direction: string) {
    const cardContainer = document.querySelector(
      '.card-container'
    ) as HTMLElement;
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

  startDotAnimation() {
    this.dotAnimationState = this.dotAnimationState.map(() => false);
    const totalDots = Math.min(this.comments.length, 3);

    if (this.animationDirection === 'next') {
      // Left to Right animation
      for (let i = 0; i < totalDots; i++) {
        setTimeout(() => {
          this.dotAnimationState[i] = true; // Activate dot
        }, i * 150);
      }
    } else {
      // Right to Left animation
      for (let i = totalDots - 1; i >= 0; i--) {
        setTimeout(() => {
          this.dotAnimationState[i] = true; // Activate dot
        }, (totalDots - 1 - i) * 150);
      }
    }
  }

  resetDotAnimationState() {
    setTimeout(() => {
      this.dotAnimationState.fill(false);
    }, 500);
  }

}
