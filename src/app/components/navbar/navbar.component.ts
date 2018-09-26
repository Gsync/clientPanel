import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  loggedInUser: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      console.log(auth);
      if (auth) {
        this.loggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.loggedIn = false;
      }
      console.log(`login is ${this.loggedIn}`);
    });
  }
  logout() {
    this.authService.logout();
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success'
    });
    this.router.navigate(['/login']);
  }
}
