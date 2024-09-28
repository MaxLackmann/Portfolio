import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isMobileView: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowWidth();
  }

  ngOnInit() {
    this.checkWindowWidth();
  }

  checkWindowWidth() {
    this.isMobileView = window.innerWidth <= 1024 ? true : false;
  }

  contactForm: FormGroup;
  messageSent: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, this.wordCountValidator(10)]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  wordCountValidator(minWords: number) {
    return (control: AbstractControl) => {
      const value = control.value || '';
      const wordCount = value.trim().split(/\s+/).length;
      return wordCount >= minWords ? null : { wordCount: true };
    };
  }

  submitForm() {
    if (this.contactForm.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('marcoangermann@hotmail.de/contact.php', this.contactForm.value, { headers })
        .subscribe({
          next: () => {
            this.messageSent = true;
            this.contactForm.reset();
          },
          error: () => {
            this.errorMessage = 'Error sending the message. Please try again later.';
          }
        });
    } else {
      this.errorMessage = 'Please fill out all fields correctly and ensure the message has at least 10 words.';
    }
  }
}
