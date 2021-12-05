import { Component, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getProduct();
    this.totalPrice = this.cartService.getTotal();
  }

  removeFromCart(itemId:any){
    this.cartService.removeItem(itemId);
    this.cartItems = this.cartService.getProduct();
    this.totalPrice = this.cartService.getTotal();
  }

  confirmOrder(customerData: any){
    this.router.navigateByUrl(`confirmation/${customerData.fullName}/${this.totalPrice}`);
  }
}
