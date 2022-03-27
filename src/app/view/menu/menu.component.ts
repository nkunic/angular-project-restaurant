import { Component } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Item } from './item/item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  public menuOpened = true;

  public menu: Array<Item> = [
    {
      id: 0,
      name: 'Hamburger',
      price: '6€',
    },
    {
      id: 1,
      name: 'Cheeseburger',
      price: '7€',
    },
    {
      id: 2,
      name: 'Pizza',
      price: '5€',
    },
    {
      id: 3,
      name: 'Juice',
      price: '1.5€',
    },
    {
      id: 4,
      name: 'Coffee',
      price: '2€',
    },
    {
      id: 5,
      name: 'Water',
      price: '1€',
    },
  ];

  public openMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
