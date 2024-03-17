import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '@core/components/not-found-page/not-found-page.component';
import { StartPageComponent } from '@core/components/start-page/start-page.component';
import { START_PAGE_ROUTE } from '@core/constants/routes';

const routes: Routes = [
  {
    path: START_PAGE_ROUTE,
    component: StartPageComponent,
  },
  {
    path: START_PAGE_ROUTE,
    loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
