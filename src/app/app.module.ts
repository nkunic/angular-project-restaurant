import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TablesComponent } from './view/tables/tables.component';
import { TableComponent } from './view/tables/table/table.component';
import { WaitersComponent } from './view/waiters/waiters.component';
import { WaiterComponent } from './view/waiters/waiter/waiter.component';
import { MenuComponent } from './view/menu/menu.component';
import { ItemComponent } from './view/menu/item/item.component';

import { SharedModule } from './shared/shared.module';

import { RestaurantService } from './services/restaurant.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    TablesComponent,
    TableComponent,
    WaitersComponent,
    WaiterComponent,
    MenuComponent,
    ItemComponent,
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent],
})
export class AppModule {}
