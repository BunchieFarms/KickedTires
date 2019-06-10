import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { FeaturedCarouselComponent } from './components/featured-carousel/featured-carousel.component';
import { LandingSearchComponent } from './components/landing-search/landing-search.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';

@NgModule({
    declarations: [
        HomeComponent,
        FeaturedCarouselComponent,
        LandingSearchComponent,
        FeaturedListComponent
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
