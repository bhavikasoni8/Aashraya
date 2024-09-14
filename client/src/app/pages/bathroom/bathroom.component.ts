import { Component, OnInit } from '@angular/core';
import products from 'src/app/data/data';
import { Product } from 'src/app/models/models';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.css'],
})
export class BathroomComponent implements OnInit {
  product!: Product;
  bathroomProducts: Product[] = [];
  products = products;
  constructor() {}

  ngOnInit(): void {
    this.filterProducts(this.products);
  }

  filterProducts(products: Product[]) {
    const filteredProducts = products.filter(
      (product) => product.category === 'Bathroom'
    );
    this.bathroomProducts = filteredProducts;
  }
}
