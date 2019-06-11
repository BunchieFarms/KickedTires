import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page-search',
  templateUrl: './main-page-search.component.html',
  styleUrls: ['./main-page-search.component.scss']
})

export class MainPageSearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  newSearch = {
    searchQuery: '',
    searchDistance: 50,
    searchZip: 28451,
    category: 'private'
  };

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

  categorySelected(category: string) {
    this.newSearch.category = category;
  }

}
