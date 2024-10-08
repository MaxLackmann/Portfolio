import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrivacyPolicyComponent,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isMobileView: boolean = false;
  contactForm: FormGroup;
  messageSent: boolean = false;
  successAnimation: boolean = false;
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public translateService: TranslateService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, this.wordCountValidator(10)]],
      agree: [false, [Validators.requiredTrue]],
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowWidth();
  }

  ngOnInit() {
    this.checkWindowWidth();
  }

  checkWindowWidth() {
    this.isMobileView = window.innerWidth <= 1024;
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
      this.http
        .post(
          'https://maximilian-lackmann.com/sendMail.php',
          this.contactForm.value,
          {
            headers,
          }
        )
        .subscribe({
          next: () => {
            this.messageSent = true;
            this.successAnimation = true;
            this.contactForm.reset();

            setTimeout(() => {
              this.successAnimation = false;
              this.messageSent = false;
            }, 5000);
          },
          error: () => {
            this.errorMessage = 'contact-form.errormessage';
          },
        });
    } else {
      this.errorMessage = 'contact-form.errormessage2';
    }
  }
}
