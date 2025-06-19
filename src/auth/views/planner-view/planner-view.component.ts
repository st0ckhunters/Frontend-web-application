import { Component } from '@angular/core';
import {MatCard, MatCardFooter, MatCardHeader, MatCardModule} from '@angular/material/card';
import{MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';


@Component({
  selector: 'app-planner-view',
  imports: [
    TranslatePipe,
    MatCard,
    MatCardHeader,
    MatCardFooter
  ],
  templateUrl: './planner-view.component.html',
  styleUrl: './planner-view.component.css'
})
export class PlannerViewComponent {

}
