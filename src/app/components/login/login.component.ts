import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {}
  onSubmit() {
    this.authService
      .login(this.email, this.password)
      .then(res => {
        this.flashMessage.show('You are now logged in!!!', {
          cssClass: 'alert-success'
        });
        this.router.navigate(['/']);
      })
      .catch(error => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
      });
  }
  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }
}
