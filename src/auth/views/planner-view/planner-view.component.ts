import { Component } from '@angular/core';
import {MatCard, MatCardFooter, MatCardHeader, MatCardModule} from '@angular/material/card';
import{MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {NavBarComponent} from '../../../shared/components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-planner-view',
  imports: [
    TranslatePipe,
    MatCard,
    MatCardHeader,
    MatCardFooter,
    HeaderComponent,
    NavBarComponent
  ],
  templateUrl: './planner-view.component.html',
  styleUrl: './planner-view.component.css'
})
export class PlannerViewComponent {

}
