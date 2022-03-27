import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './view/tables/tables.component';
import { WaitersComponent } from './view/waiters/waiters.component';

const restaurantRoutes: Routes = [
  {
    path: '',
    redirectTo: '/tables',
    pathMatch: 'full',
  },
  {
    path: 'tables',
    component: TablesComponent,
  },
  {
    path: 'waiters',
    component: WaitersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(restaurantRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
