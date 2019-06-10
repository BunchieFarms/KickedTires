import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss']
})
export class FeaturedListComponent implements OnInit {

  constructor() { }

  images = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/100/100?random&t=${Math.random()}`);

  featuredListItems = [
    { 'image': this.images[0], 'seller': 'Dealer', 'location': 'Denver, CO', 'description': '1988 Pontiac Fiero GT', 'price': 3200 },
    { 'image': this.images[1], 'seller': 'Private', 'location': 'Houston, TX', 'description': '2012 Dodge Charger SXT', 'price': 4900 },
    { 'image': this.images[2], 'seller': 'Private', 'location': 'Leland, NC', 'description': '1972 Ford Ranger', 'price': 3500 },
    { 'image': this.images[3], 'seller': 'Dealer', 'location': 'San Diego, CA', 'description': '2019 Chevrolet Camaro SS', 'price': 31000 },
    { 'image': this.images[4], 'seller': 'Private', 'location': 'Santa Barbara, CA', 'description': '1972 VW Bug', 'price': 5000 },
    { 'image': this.images[5], 'seller': 'Dealer', 'location': 'Augusta, GA', 'description': '2018 Ford Mustang GT350', 'price': 51000 },
  ];

  ngOnInit() {
  }

}
