import { Component } from '@angular/core';
import { AppRoutes } from '@core/enums/routes.enum';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  protected readonly REGISTRATION_PAGE_ROUTE = `/${AppRoutes.REGISTRATION_PAGE_ROUTE}`;
}
