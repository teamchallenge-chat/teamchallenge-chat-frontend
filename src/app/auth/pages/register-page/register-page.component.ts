import { Component } from '@angular/core';
import { AppRoutes } from '@core/enums/routes.enum';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  protected readonly LOGIN_PAGE_ROUTE = `/${AppRoutes.LOGIN_PAGE_ROUTE}`;
}
