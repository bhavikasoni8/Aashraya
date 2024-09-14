import { Component, OnInit } from '@angular/core';
import products from 'src/app/data/data';
import { Product } from 'src/app/models/models';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent implements OnInit {
  product!: Product;
  kitchenProducts: Product[]=[];
  products = products;
  constructor() {}

  ngOnInit(): void {
    this.filterProducts(this.products);
  }

  filterProducts(products: Product[]) {
    const filteredProducts = products.filter(
      (product) => product.category === 'Kitchen'
    );
    this.kitchenProducts = filteredProducts;
  }
}
