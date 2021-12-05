import { Component, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getProduct();
    this.totalPrice = this.cartService.getTotal();
  }

  removeFromCart(itemId:any){
    this.cartService.removeItem(itemId);
    this.cartItems = this.cartService.getProduct();
    this.totalPrice = this.cartService.getTotal();
  }

  confirmOrder(e: any){
    console.log(e);
    //ToDo - Confirm page redirect
  }
}
