import { PRODUCT_LIST } from './../mocks/products.mocks';
import { Injectable } from '@angular/core';
import { Observable, of, fromEvent } from 'rxjs';
import { Product } from '../Types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  getUserData():Observable <string | number> {
    return of ('Hola', 'Fede', 34);
  }

  getAllProducts(): Observable<Product[]>{

    return of(PRODUCT_LIST);
  }

  getClick(): Observable<Event>{
    return fromEvent(document, 'click')
  }
}
