import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, StartPageComponent],
  imports: [CommonModule, AuthRoutingModule, RouterModule],
})
export class AuthModule {}
