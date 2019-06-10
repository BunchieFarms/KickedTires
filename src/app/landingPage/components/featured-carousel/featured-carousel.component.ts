import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.scss']
})
export class FeaturedCarouselComponent implements OnInit {

  constructor() { }

  images = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/600/600?random&t=${Math.random()}`);

  ngOnInit() {
  }

}
