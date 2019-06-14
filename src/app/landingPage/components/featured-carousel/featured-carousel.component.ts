import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.scss']
})
export class FeaturedCarouselComponent implements OnInit {

  constructor() { }

  images = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/600/600?random&t=${Math.random()}`);

  privateItems = [
    {'image': this.images[0], 'description': '1994 BMW 323is', 'price': 2300, 'location': 'Leland, NC'},
    {'image': this.images[1], 'description': '2002 Ford Mustang GT', 'price': 6900, 'location': 'Chicago, IL'},
    {'image': this.images[2], 'description': '1991 Geo Metro', 'price': 50, 'location': 'Detroit, MI'}
  ];

  dealerItems = [
    {'image': this.images[3], 'description': '2018 Porsche Carrera', 'price': 35000, 'location': 'Corpus Christi, TX'},
    {'image': this.images[4], 'description': '2015 Ford Focus SE', 'price': 8000, 'location': 'Seattle, WA'},
    {'image': this.images[5], 'description': '2005 Suzuki Forenza', 'price': 4999, 'location': 'Birmingham, AL'}
  ];

  ngOnInit() {
  }

}
