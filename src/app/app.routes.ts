import { Routes } from '@angular/router';

const LogInComponent=()=>import('../auth/views/log-in-view/log-in-view.component').then(m=>m.LogInViewComponent);
const TestingRoute=()=>import('../app/shared/testing-route/testing-route.component').then(m=>m.TestingRouteComponent);
export const routes: Routes = [

  { path: 'testing', loadComponent: TestingRoute},
  { path: 'login', loadComponent: LogInComponent},
];
