import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from '@core/components/start-page/start-page.component';
import { START_PAGE_ROUTE } from '@core/constants/routes';

const routes: Routes = [
  {
    path: START_PAGE_ROUTE,
    component: StartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
