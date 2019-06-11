import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { MainPageSearchComponent } from './components/main-page-search/main-page-search.component';
import { FeaturedCarouselComponent } from './components/featured-carousel/featured-carousel.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
    declarations: [
        MainPageSearchComponent,
        FeaturedCarouselComponent,
        FeaturedListComponent,
        SearchResultsComponent
    ],
    imports: [
        BrowserModule,
        CarouselModule,
        WavesModule,
        FormsModule,
        ButtonsModule
    ],
    exports: [],
    providers: []
})

export class LandingPageModule { }
