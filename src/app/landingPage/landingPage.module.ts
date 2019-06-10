import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './components/main-page/main-page.component';
import { FeaturedCarouselComponent } from './components/featured-carousel/featured-carousel.component';
import { SearchComponent } from './components/search/search.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';

@NgModule({
    declarations: [
        MainPageComponent,
        FeaturedCarouselComponent,
        SearchComponent,
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
