import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { InputType } from './input.interface';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements InputType, OnInit {
  @Input() type = '';
  @Input() label: string | undefined;
  @Input() css: InputType['css'] = 'control-form';
  @Input() placeholder = '';
  @Input() control: AbstractControl | null = null;
  @Input() name!: string;
  @Input() isRequired = false;
  @Input() iconsUrl: InputType['icons'] = [];

  ngOnInit(): void {
    this.isInputFilled$ = this.control?.valueChanges.pipe(map(x => !!x));
  }

  protected currentIconIndex = 0;
  protected isInputFilled$: Observable<boolean> | undefined = undefined;

  togglePassVisibility(): void {
    this.type = this.type === 'text' ? 'password' : 'text';
    this.currentIconIndex = this.currentIconIndex === 0 ? 1 : 0;
  }

  isInvalid(): boolean {
    const isControlInvalidAndTouched =
      !!this.control && this.control.invalid && (this.control.dirty || this.control.touched);

    return isControlInvalidAndTouched;
  }

  resetField(): void {
    if (this.control) {
      this.control.setValue('');
    }
  }
  get errors(): string[] {
    const { control } = this;
    const errorMessages: string[] = [];
    if (control?.errors) {
      Object.entries(control.errors).forEach(error => {
        const [key, message] = error;

        switch (key) {
          case 'required':
            errorMessages.push(`Це поле є обов’язковим.`);
            break;
          case 'minlength':
            errorMessages.push(`Мінімальна довжина поля ${message.requiredLength} символів.`);
            break;
          case 'maxlength':
            errorMessages.push(`Максимальна довжина поля ${message.requiredLength} символів`);
            break;
          case 'email':
            errorMessages.push(`Поле має бути в форматі mail@mail.com`);
            break;
          default:
            if (key === 'pattern') {
              if (this.name === 'password') {
                errorMessages.push(
                  `Пароль має містити одну велику, одну маленьку букву, цифру та спеціальний символ.`
                );
              }
            }
        }
      });
    }
    return errorMessages;
  }
}
