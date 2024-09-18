import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceTsService {
  private languageSubject = new BehaviorSubject<string>('EN');
  selectedLanguage$ = this.languageSubject.asObservable();

  constructor() { }

  toggleLanguage() {
    const currentLanguage = this.languageSubject.getValue();
    const newLanguage = currentLanguage === 'EN' ? 'DE' : 'EN';
    this.languageSubject.next(newLanguage);
  }

  getSelectedLanguage(): string {
    return this.languageSubject.getValue();
  }

  switchValue(option: string) {
    switch (option) {
      case 'option1':
        this.languageSubject.next('EN');
        break;
      case 'option2':
        this.languageSubject.next('DE');
        break;
      default:
        this.languageSubject.next('EN');
    }
  }
}