import { Component, Input } from '@angular/core';
import { Table } from '../../tables/table/table.model';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss'],
})
export class WaiterComponent {
  @Input() id: number = 0;
  @Input() name: string;
  @Input() tableFirst: Table;
  @Input() tableSecond: Table;
}
