import { Component } from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {LanguageButtonComponent} from "../buttons/language-button/language-button.component";
import {TranslatePipe} from "@ngx-translate/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-nav-bar',
  imports: [
    MatToolbarRow,
    MatToolbar,
    LanguageButtonComponent,
    TranslatePipe,
    RouterLink,
    RouterLinkActive,
    MatAnchor,
    RouterOutlet
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  options=[
    {link:'/testing', label: 'Test'},
    {link:'/login', label: 'Login'}
  ]

}
