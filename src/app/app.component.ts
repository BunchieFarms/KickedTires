import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kicked Tires';

  loggedInUser = 'bryce@ohmer.com';
  notLoggedIn = true;

  ifLoggedIn() {
    if (this.notLoggedIn === true) {
      return 'Log In / Sign Up';
    } else {
      return this.loggedInUser;
    }
  }
}
