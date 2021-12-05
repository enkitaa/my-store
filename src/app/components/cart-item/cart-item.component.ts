import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  //@ts-ignore
  @Input() cartItem: CartItem;
  @Output() removeFromCart: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  removeProdFromCart(){
    this.removeFromCart.emit(this.cartItem.id);
  }
}
