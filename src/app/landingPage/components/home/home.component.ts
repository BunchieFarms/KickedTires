import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  newSearch = {
    searchQuery: '',
    searchDistance: 50,
    searchZip: 28451,
    category: 'private'
  };

  images = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/600/600?random&t=${Math.random()}`);

  ngOnInit() {
    const searchArea = this.route.snapshot.paramMap.get('area');
    const searchQuery = this.route.snapshot.paramMap.get('query');
    if (searchArea === 'local' || searchArea === 'national') {
      console.log(`Area: ${searchArea}, Query: ${searchQuery}`);
    } else {
      console.log('Nah vro');
      this.router.navigate(['']);
    }
  }

  search(location: string) {
    window.location.href = `/${location}/${this.newSearch.searchQuery}`;
  }

  categorySelected(category) {
    this.newSearch.category = category;
  }

}
