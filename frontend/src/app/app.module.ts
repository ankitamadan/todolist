import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodolistComponent} from './todolist/todolist.component';
import {AppRoutingModule} from './app-routing.module';
import {NewItemComponent} from './new-item/new-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './_services/api.service';
import {LoadingModule} from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
