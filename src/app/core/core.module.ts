import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageContainerComponent } from './components/background-image-container/bacground-image-container.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SharedModule } from '@shared/shared.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [BackgroundImageContainerComponent, StartPageComponent, NotFoundPageComponent],
  imports: [CommonModule, SharedModule, RouterLink],
})
export class CoreModule {}
