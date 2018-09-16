import {Injectable} from '@angular/core';
import {Item} from '../_model/Item';
import {HttpClient} from '@angular/common/http';
import {AbstractItemsService} from '../_services/items/abstract-items.service';
import {HttpItemsService} from '../_services/items/http-items.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  itemsStrategy: AbstractItemsService;

  constructor(private http: HttpClient) {

    this.itemsStrategy = new HttpItemsService(http);
  }

  getCurrentItem(): Item {
    return this.itemsStrategy.getCurrentItem();
  };

  setCurrentItem(item: Item) {
    this.itemsStrategy.setCurrentItem(item);
  };

  getItems(): Promise<Item[]> {
    return this.itemsStrategy.getItems();
  };

  removeItem(item: string): Promise<Object> {
    return this.itemsStrategy.removeItem(item);
  };

  addItem(item: Item): Promise<any> {
    return this.itemsStrategy.addItem(item.name);
  };
}
