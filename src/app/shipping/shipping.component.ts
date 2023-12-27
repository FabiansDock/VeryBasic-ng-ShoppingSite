import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit{
  shippingCosts! : Observable<{type: string, price: number}[]>;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }
}
