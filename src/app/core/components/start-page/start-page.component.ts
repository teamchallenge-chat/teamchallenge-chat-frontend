import { Component } from '@angular/core';
import { LOGIN_PAGE_ROUTE, REGISTRATION_PAGE_ROUTE } from '@core/constants/routes';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
  protected readonly REGISTRATION_PAGE_ROUTE = REGISTRATION_PAGE_ROUTE;
  protected readonly LOGIN_PAGE_ROUTE = LOGIN_PAGE_ROUTE;
}
