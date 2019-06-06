import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LandingPageRoutingModule } from './landingPage/landingPage-routing.module';

@NgModule({
  imports: [LandingPageRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['']);
    };
  }
}
