import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todolist.component';
import {LoadingModule} from "ngx-loading";

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistComponent ],
      imports: [LoadingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
