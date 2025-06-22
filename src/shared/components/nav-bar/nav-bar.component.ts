import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {LanguageButtonComponent} from '../buttons/language-button/language-button.component';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';

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
    ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
