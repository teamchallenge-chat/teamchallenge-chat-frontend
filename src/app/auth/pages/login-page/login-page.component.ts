import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppRoutes } from '@core/enums/routes.enum';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);

  protected readonly REGISTRATION_PAGE_ROUTE = `/${AppRoutes.REGISTRATION_PAGE_ROUTE}`;
  protected readonly FORGOT_PASSWORD_PAGE_ROUTE = `/${AppRoutes.FORGOT_PASSWORD_PAGE_ROUTE}`;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/
        ),
      ],
    ],
  });
}
