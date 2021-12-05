import { Injectable } from '@angular/core';
import { Product, CartItem } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() { }

  addProduct(product: Product, quantity:number){
      this.cartItems.push({...product, quantity});
      alert('Product added to cart');
  }

  getProduct(){
    return this.cartItems;
  }
}
