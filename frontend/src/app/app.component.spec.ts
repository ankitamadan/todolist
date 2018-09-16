import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {TodolistComponent} from "./todolist/todolist.component";
import {NewItemComponent} from "./new-item/new-item.component";
import {LoadingModule} from "ngx-loading";
import {ReactiveFormsModule} from "@angular/forms";
import {APP_BASE_HREF} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,TodolistComponent, NewItemComponent
      ],
      imports :[AppRoutingModule, LoadingModule, ReactiveFormsModule, BrowserModule],
      providers : [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('To-do list');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('To-do list');
  }));
});
