import { Component, OnInit } from '@angular/core';
import products from 'src/app/data/data';
import { Product } from 'src/app/models/models';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
})
export class FurnitureComponent implements OnInit {
  product!: Product;
  furnitureProducts: Product[] = [];
  products = products;
  constructor() {}

  ngOnInit(): void {
    this.filterProducts(this.products);
  }

  filterProducts(products: Product[]) {
    const filteredProducts = products.filter(
      (product) => product.category === 'Furniture'
    );
    this.furnitureProducts = filteredProducts;
  }
}
