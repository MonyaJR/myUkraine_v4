import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-logi',
  templateUrl: './logi.component.html',
  styleUrls: ['./logi.component.css']
})
export class LogiComponent implements OnInit {
  email: string;
  password: string;
  resetEmail;

  constructor(private auth: AuthService,
              private router: Router
  ) { }

  ngOnInit() {
    // Check auth state
    // this.auth.checkAuth().subscribe(auth => {
    //   if (auth) {
    //     this.router.navigate(['platform']);
    //   }
    // });
  }

  loginForGoogle() {
    this.auth.loginForGoogle();
  }

  onSubmitLogin() {
    this.auth.loginEmail(this.email, this.password)
      .then(user$ => {
        this.router.navigate(['/platform']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  loginForFacebook() {
    this.auth.FacebookLogin();
  }

  resetPassword(email: string) {
    this.auth.resetPassword(email);
  }

}
