import { Component, OnInit } from '@angular/core';
import { Waiter } from './waiter/waiter.model';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrls: ['./waiters.component.scss'],
})
export class WaitersComponent implements OnInit {
  public waiters: Array<Waiter>;
  constructor(private restaurantService: RestaurantService) {}
  ngOnInit() {
    this.waiters = this.restaurantService.waiters;
  }
}
