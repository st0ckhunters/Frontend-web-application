import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from '../shared/components/footer/footer/footer.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {HeaderComponent} from '../shared/components/header/header.component';
import {NgOptimizedImage} from '@angular/common';
import {SignUpViewComponent} from '../auth/views/sign-up-view/sign-up-view.component';
import {InfoService} from '../shared/components/home/services/info.service';
import {LogInViewComponent} from '../auth/views/log-in-view/log-in-view.component';

import {AccountService} from '../auth/services/account.service';
import { ProductsService} from '../auth/services/products.service';

import {ClientsViewsComponent} from '../auth/views/clients-views/clients-views.component';

//import {NavBarComponent} from '../shared/components/nav-bar/nav-bar.component';
import {PlannerViewComponent} from '../auth/views/planner-view/planner-view.component';
import {ComponentsProductsComponent} from '../auth/components/components-products/components-products.component';
import {ItemReportsComponent} from '../auth/components/item-reports/item-reports.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, MatButtonToggleModule, MatToolbarModule, MatButtonModule, MatIconModule,
    MatSlideToggleModule, HeaderComponent, SignUpViewComponent, LogInViewComponent, PlannerViewComponent, ComponentsProductsComponent, ClientsViewsComponent, ItemReportsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title(title: any){
    throw new Error('Method not implemented.');
  }
  infos: any[]=[];
  productinfo: any[]=[];

  constructor(private Account: AccountService,
              private Product: ProductsService
  ) {}

  ngOnInit() {
    this.Account.getAllUsers().subscribe(data => {
      this.infos = data;
    });

    this.Product.getAllProducts().subscribe(data => {
      this.productinfo = data;
    });
  }


  changeLang(es:String){
  }

}
