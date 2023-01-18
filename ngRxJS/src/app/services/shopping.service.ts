import { PRODUCT_LIST } from './../mocks/products.mocks';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../Types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

getAllProducts(): Observable<Product[]>{

  return of(PRODUCT_LIST);
}

}
