import { Routes } from '@angular/router';
import {LogInViewComponent} from '../auth/views/log-in-view/log-in-view.component';
import {SignUpViewComponent} from '../auth/views/sign-up-view/sign-up-view.component';
import {NotFoundError} from 'rxjs';
import {NotFoundComponent} from '../shared/components/notfound/not-found/not-found.component';
import {ItemUsersComponent} from '../auth/components/item-users/item-users.component';
import {AccountViewComponent} from '../auth/views/account-view/account-view.component';

export const routes: Routes = [
  { path: '', component: LogInViewComponent },
  { path: 'login', component: LogInViewComponent },
  { path: 'signup', component: SignUpViewComponent },
  { path: 'item-users', component: ItemUsersComponent },
  { path: 'accounts', component: AccountViewComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
  {path:'Reports', component: NotFoundComponent },
  {path:'Sales', component: NotFoundComponent },
  {path:'Products', component: NotFoundComponent },
  {path:'Customers', component: NotFoundComponent },

];
