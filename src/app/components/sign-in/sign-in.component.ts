import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSingIn() {
    this.auth.signInEmail(this.email, this.password)
      .then(user$ => {
        this.router.navigate(['/platform']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  loginForGoogle() {
    this.auth.loginForGoogle();
  }

  loginForFacebook() {
    this.auth.FacebookLogin();
  }

  resetPassword(email: string) {
    this.auth.resetPassword(email)
      .then(data => {
        this.router.navigate(['/platform']);
      })
      .catch((error) => console.log(error));

  }

}
