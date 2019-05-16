import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        HomeComponent
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
