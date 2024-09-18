import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  comments: {
  name: string;
  description: string;
}[] = [
  {
    name: 'Lukas',
    description: 'I am very satisfied with the service. I really enjoyed it',
  },
  {
    name: 'Franz',
    description: 'Gute Arbeit diese junge Mannschaft. Beste Baustelle!',
  },
  {
    name: 'Stefan',
    description: 'I am very satisfied with the quality. Excellent support!',
  },
  {
    name: 'Markus',
    description: 'The team did a great job and delivered on time.',
  },
  {
    name: 'Benedikt',
    description: 'Very professional and efficient work.',
  },
  {
    name: 'Raupke',
    description: 'I highly recommend this team for their dedication.',
  }
];
}
