import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOGIN_PAGE_ROUTE, REGISTRATION_PAGE_ROUTE } from '@core/constants/routes';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: REGISTRATION_PAGE_ROUTE, component: RegisterPageComponent },
  { path: LOGIN_PAGE_ROUTE, component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
