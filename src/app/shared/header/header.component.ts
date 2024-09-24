import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
selectedOption: any;
status: boolean = false;

  constructor() {
    
  }

  
  clickEvent() {
    this.status = !this.status;
  }
  clickEventLogo() {
    this.status = false;
  }

  // switch(value) {
  //   case 1:
  //     // Code für Wert 1
  //     break;
  //   case 2:
  //     // Code für Wert 2
  //     break;
  //   default:
  //     // Standardfall
  // }
}

