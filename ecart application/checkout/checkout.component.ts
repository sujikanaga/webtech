import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product, Order } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  product: Product | undefined;
  name: string = '';
  address: string = '';
  paymentMode: string = 'Credit Card';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.product = navigation.extras.state['product'];
    }
  }

  placeOrder(): void {
    if (this.product) {
      const order: Order = {
        product: this.product,
        name: this.name,
        address: this.address,
        paymentMode: this.paymentMode
      };
      this.productService.placeOrder(order);
      this.router.navigate(['/orders']);
    }
  }
}
