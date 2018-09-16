import {Component, OnInit} from '@angular/core';
import {Item} from '../_model/Item';
import {ApiService} from '../_services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  static instance: TodolistComponent;
  items: Item[];
  loading = false;

  constructor(private service: ApiService, private router: Router) {
    this.updateLocalItems();
  }

  updateLocalItems() {
    console.log('Updating items');
    this.loading = true;
    this.service.getItems().then(
      items => {
        this.items = items;
        this.loading = false;
      }
    );
  }

  ngOnInit() {
  }

  onRemove(item) {
    this.loading = true;
    this.service.removeItem(item).then(() => {
      this.updateLocalItems();
      this.loading = false;
    });
  }

}
