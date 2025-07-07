import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-language-button',
  imports: [
    MatButton,
    UpperCasePipe,
  ],
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.css']
})
export class LanguageButtonComponent {
  language: string = '';

  constructor(private translate: TranslateService) {
    this.language = localStorage.getItem('lang') || this.translate.currentLang || 'en';
    this.translate.use(this.language);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.language = lang;
    localStorage.setItem('lang', lang);
  }
}
