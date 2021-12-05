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
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getProduct();
  }
}
