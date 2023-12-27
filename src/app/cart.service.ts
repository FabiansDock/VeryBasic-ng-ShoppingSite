import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];
  
  constructor(private http: HttpClient) { }

  addCartItem(product: Product) {
    this.cartItems.push(product);
  }

  getItems() {
    return this.cartItems;
  }
  
  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
