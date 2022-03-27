import { Table } from '../../tables/table/table.model';

export interface Waiter {
  id: number;
  name: string;
  tableFirst: Table;
  tableSecond: Table;
}
