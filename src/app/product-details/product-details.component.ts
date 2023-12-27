import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product : Product | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService){}
  ngOnInit() {
      const routeParams = this.route.snapshot.paramMap;
      const id = Number(routeParams.get('productId'));

      this.product = products.find(product => product.id === id);
  }

  addToCart(product: Product){
    this.cartService.addCartItem(product);
    window.alert("Item successfully added to cart !");
  }
}
