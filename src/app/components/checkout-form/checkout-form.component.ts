import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerData } from 'src/app/models/customerData';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  //@ts-ignore
  customerDetails: CustomerData = {};
  @Output() submitCustomerDetails: EventEmitter<CustomerData> = new EventEmitter<CustomerData>()

  constructor() { }

  ngOnInit(): void {
  }

  confirmOrder(){
    this.submitCustomerDetails.emit(this.customerDetails);
  }
}
