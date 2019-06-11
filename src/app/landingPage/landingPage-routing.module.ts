import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageSearchComponent } from './components/main-page-search/main-page-search.component';

const routes: Routes = [
    { path: '', component: MainPageSearchComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class LandingPageRoutingModule { }
