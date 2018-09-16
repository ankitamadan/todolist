import {Injectable} from '@angular/core';
import {Item} from '../../_model/Item';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {AbstractItemsService} from './abstract-items.service';

@Injectable({
  providedIn: 'root'
})

export class HttpItemsService extends AbstractItemsService {

  items: Item[];
  url: string = '/todoList/';

  constructor(private http: HttpClient) {
    super();
  }

  getItems(): Promise<Item[]> {
    return new Promise((resolve) => {

      this.http.get<Item[]>(this.url).subscribe(response => {

        var items = response.map((item) => new Item(item.name, item.id));
        resolve(items);
      });
    });
  };

  removeItem(item: string): Promise<Object> {

    const req = new HttpRequest('DELETE',
      this.url + 'delete', null, {
        params: new HttpParams()
          .set('todoItem', item)
      });
    return this.http.request(req).toPromise();
  }

  addItem(item: string): Promise<Object> {

    const req = new HttpRequest('POST',
      this.url + 'add', null, {
        params: new HttpParams()
          .set('todoItem', item)
      });
    return this.http.request(req).toPromise();
  }

  updateItem(item: Item): Promise<Object> {
    return this.http.put(this.url + '/' + item.id, item).toPromise();
  }
}
