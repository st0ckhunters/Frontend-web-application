import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';


@Component({
  selector: 'app-theme-button',
    imports: [
        MatButtonToggle,
        MatButtonToggleGroup
    ],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css'
})
export class ThemeButtonComponent {

}
