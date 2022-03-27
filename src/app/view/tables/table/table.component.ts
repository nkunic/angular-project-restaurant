import { Component, Input } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() id: number = 0;
  @Input() order: string;

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  public tableOpened = true;
  public orderPlaced = false;

  constructor(private restaurantService: RestaurantService) {}

  public openTable() {
    this.tableOpened = !this.tableOpened;
  }

  public makeOrder() {
    this.restaurantService.tables[this.id].order = this.order;
    this.tableOpened = !this.tableOpened;
    this.orderPlaced = !this.orderPlaced;
  }
}
