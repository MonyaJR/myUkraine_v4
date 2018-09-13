import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-email',
  templateUrl: './reset-email.component.html',
  styleUrls: ['./reset-email.component.css']
})
export class ResetEmailComponent implements OnInit {
  emailReset;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  resetPassword(email: string) {
    this.auth.resetPassword(email)
      .then(data => {
        this.router.navigate(['/platform']);
      })
      .catch((error) => console.log(error));

  }

}
