import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {LanguageButtonComponent} from '../buttons/language-button/language-button.component';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {ThemeButtonComponent} from '../buttons/theme-button/theme-button.component';
import {ProfileButtonComponent} from '../buttons/profile-button/profile-button.component';

@Component({
  selector: 'app-nav-bar',
  imports: [
    MatToolbar,
    MatIcon,
    MatButtonToggleGroup,
    MatButtonToggle,
    LanguageButtonComponent,
    TranslatePipe,
    RouterLink,
    ThemeButtonComponent,
    ProfileButtonComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
