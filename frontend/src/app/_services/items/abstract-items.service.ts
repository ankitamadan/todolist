import {Injectable} from '@angular/core';
import {Item} from '../../_model/Item';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractItemsService {

  currentItem: Item;

  constructor() {
  }

  getCurrentItem(): Item {
    return this.currentItem;
  };

  setCurrentItem(item: Item) {
    this.currentItem = item;
  };

  abstract getItems(): Promise<Item[]>;

  abstract removeItem(item: string): Promise<Object>;

  abstract addItem(item: String): Promise<any>;
}
