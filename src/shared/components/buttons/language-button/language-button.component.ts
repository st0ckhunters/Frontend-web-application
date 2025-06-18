import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import { TranslateService } from '@ngx-translate/core';
import {NgForOf, UpperCasePipe} from '@angular/common';


@Component({
  selector: 'app-language-button',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    NgForOf,
    UpperCasePipe,
  ],
  templateUrl: './language-button.component.html',
  styleUrl: './language-button.component.css'
})
export class LanguageButtonComponent {
  language: string = '';
  languages: string[] = ['en', 'es']

  constructor(private translate: TranslateService) {
    this.language = localStorage.getItem('lang') ||this.translate.currentLang || 'en' ;
    this.translate.use(this.language);
  }
  switchLanguage(lang: string){
    this.translate.use(lang);
    this.language = lang;

    localStorage.setItem('lang', lang);
  }
}
