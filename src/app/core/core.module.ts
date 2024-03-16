import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageContainerComponent } from './components/background-image-container/bacground-image-container.component';
import { StartPageComponent } from './components/start-page/start-page.component';

@NgModule({
  declarations: [BackgroundImageContainerComponent, StartPageComponent],
  imports: [CommonModule],
})
export class CoreModule {}
