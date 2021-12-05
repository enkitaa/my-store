import { Injectable } from '@angular/core';
import { Product, CartItem } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() {}

  addProduct(product: Product, quantity: number) {
    this.cartItems.push({ ...product, quantity });
    alert('Product added to cart');
  }

  getProduct() {
    return this.cartItems;
  }

  removeItem(productId: number): void {
    this.cartItems = this.cartItems.filter(({id}) => id!== productId);
    alert("Item removed from cart!");
  }

  getTotal(){
    let totalPrice = 0;
    this.cartItems.forEach(({ price, quantity }) => {
      totalPrice = totalPrice + price* quantity;
    });
    return Number(totalPrice.toFixed(2));
  }
}
