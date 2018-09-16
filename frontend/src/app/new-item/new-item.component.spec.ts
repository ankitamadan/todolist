import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemComponent } from './new-item.component';
import {LoadingModule} from "ngx-loading";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {TodolistComponent} from "../todolist/todolist.component";
import {APP_BASE_HREF} from "@angular/common";

describe('NewItemComponent', () => {
  let component: NewItemComponent;
  let fixture: ComponentFixture<NewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemComponent, TodolistComponent ],
      imports: [LoadingModule, ReactiveFormsModule, HttpClientModule, LoadingModule, AppRoutingModule],
      providers : [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
