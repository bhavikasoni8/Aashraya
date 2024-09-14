import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  collections: { name: string; img: string; route: string }[] = [
    {
      name: 'Kitchen Collection',
      img: '../../../assets/Kitchen_Collections.avif',
      route: '/kitchen',
    },
    {
      name: 'Bathroom Collection',
      img: '../../../assets/Bathroom_Collections.avif',
      route: '/bathroom',
    },
    {
      name: 'Furniture Collection',
      img: '../../../assets/Furniture_Collections.avif',
      route: '/furniture',
    },
    {
      name: 'Lights Collection',
      img: '../../../assets/Lighting_Collections.avif',
      route: '/lights',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
