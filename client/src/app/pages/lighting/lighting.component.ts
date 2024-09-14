import { Component, Input, OnInit } from '@angular/core';
import products from 'src/app/data/data';
import { Product } from '../../models/models';

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.css'],
})
export class LightingComponent implements OnInit {
  product!: Product;
  ligthingProducts: Product[]=[];
  products = products;
  constructor() {}

  ngOnInit(): void {
    this.filterProducts(this.products);
  }

  filterProducts(products: Product[]) {
    const filteredProducts = products.filter(
      (product) => product.category === 'Lighting'
    );
    this.ligthingProducts = filteredProducts;
  }
}
