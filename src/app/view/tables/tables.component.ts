import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Table } from './table/table.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  public tables: Array<Table>;
  constructor(private restaurantService: RestaurantService) {}
  ngOnInit() {
    this.tables = this.restaurantService.tables;
  }
}
