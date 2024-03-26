import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, SharedModule, MatDialogModule],
})
export class CoreModule {}
