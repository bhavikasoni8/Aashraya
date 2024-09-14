import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  quantity: number = 1;

  constructor() {}

  ngOnInit(): void {}
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
    }
  }

  increaseQuantity() {
    this.quantity = this.quantity + 1;
  }
}
