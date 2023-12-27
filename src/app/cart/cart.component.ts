import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items: Product[] = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  })

  onSubmit(): void {
    this.items = this.cartService.clearCart()
    console.warn("Your order has been submitted", this.checkoutForm.value)
    this.checkoutForm.reset()
  }
}
