import { Injectable } from '@angular/core';
import { Table } from '../view/tables/table/table.model';
import { Waiter } from '../view/waiters/waiter/waiter.model';

@Injectable()
export class RestaurantService {
  public tables: Array<Table> = [
    {
      id: 0,
      order: '',
    },
    {
      id: 1,
      order: '',
    },
    {
      id: 2,
      order: '',
    },
    {
      id: 3,
      order: '',
    },
    {
      id: 4,
      order: '',
    },
    {
      id: 5,
      order: '',
    },
  ];

  public waiters: Array<Waiter> = [
    {
      id: 0,
      name: 'Christina Crawford',
      tableFirst: this.tables[0],
      tableSecond: this.tables[1],
    },
    {
      id: 1,
      name: 'Frances Lane',
      tableFirst: this.tables[2],
      tableSecond: this.tables[3],
    },
    {
      id: 2,
      name: 'Bradley Morrison',
      tableFirst: this.tables[4],
      tableSecond: this.tables[5],
    },
  ];
}
