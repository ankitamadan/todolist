import {Component, OnInit} from '@angular/core';
import {Item} from '../_model/Item';
import {ApiService} from '../_services/api.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  newItemForm: FormGroup;
  loading = false;

  constructor(private service: ApiService, private router: Router, private builder: FormBuilder) {

    this.newItemForm = builder.group(new Item(""));
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.addItem(this.newItemForm.value);
  }

  addItem(item: Item) {
    this.loading = true;
    this.service.addItem(item)
      .then(() => {
        console.log('ITEM ADDED');
        this.loading = false;
        this.router.navigateByUrl('/home');
      })
      .catch(err => console.log(err));
  }

}
