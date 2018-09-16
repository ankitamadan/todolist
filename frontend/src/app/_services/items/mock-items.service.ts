import {Injectable} from '@angular/core';
import {Item} from '../../_model/Item';
import {AbstractItemsService} from './abstract-items.service';

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {

  items: Item[];

  constructor() {
    super();
    this.loadItems();
  }

  loadItems(): void {
    this.items = [
      new Item('Buy pendrives'),
      new Item('But backpacks'),
      new Item('Rent the projectors')
    ];
  };

  getItems(): Promise<Item[]> {
    return new Promise((resolve) => {

      resolve(this.items);
    });
  };

  removeItem(item: string): Promise<Object> {
    var me = this;
    return new Promise((resolve) => {
      resolve();
    });
  };

  addItem(item: string): Promise<any> {
    return new Promise((resolve) => {

      resolve();
    });
  };

}
