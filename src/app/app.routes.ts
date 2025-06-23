import { Routes } from '@angular/router';
import {LogInViewComponent} from '../auth/views/log-in-view/log-in-view.component';
import {SignUpViewComponent} from '../auth/views/sign-up-view/sign-up-view.component';
import {NotFoundComponent} from '../shared/components/notfound/not-found/not-found.component';
import {ItemUsersComponent} from '../auth/components/item-users/item-users.component';
import {AccountViewComponent} from '../auth/views/account-view/account-view.component';
import {ProductsViewComponent} from '../auth/views/products-view/products-view.component';
import {ClientsViewsComponent} from '../auth/views/clients-views/clients-views.component';
import {SalesViewComponent} from '../auth/views/sales-view/sales-view.component';
import {ItemReportsComponent} from '../auth/components/item-reports/item-reports.component';

export const routes: Routes = [
  { path: '', component: LogInViewComponent },
  { path: 'login', component: LogInViewComponent },
  { path: 'signup', component: SignUpViewComponent },
  { path: 'item-users', component: ItemUsersComponent },
  { path: 'accounts', component: AccountViewComponent},
  { path: 'products', component: ProductsViewComponent },
  {path: 'clients', component: ClientsViewsComponent },
  {path:'sales', component: SalesViewComponent },
  {path:'reports', component: ItemReportsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },


  {path:'Customers', component: NotFoundComponent },



];
