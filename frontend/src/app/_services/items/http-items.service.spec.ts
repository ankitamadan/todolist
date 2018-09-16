import {inject, TestBed} from '@angular/core/testing';

import {HttpItemsService} from './http-items.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('HttpItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpItemsService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([HttpItemsService], (service: HttpItemsService) => {
    expect(service).toBeTruthy();
  }));
});
