import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { AppRoutes } from '@core/enums/routes.enum';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: AppRoutes.REGISTRATION_PAGE_ROUTE, component: RegisterPageComponent },
  { path: AppRoutes.LOGIN_PAGE_ROUTE, component: LoginPageComponent },
  { path: AppRoutes.FORGOT_PASSWORD_PAGE_ROUTE, component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
