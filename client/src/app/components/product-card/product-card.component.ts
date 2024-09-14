import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
