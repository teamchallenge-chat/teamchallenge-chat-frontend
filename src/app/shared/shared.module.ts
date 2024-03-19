import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent, FormControlComponent],
  exports: [ButtonComponent, FormControlComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
