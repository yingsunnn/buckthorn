import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../shared';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  signIn () {
    console.log("email: " + this.user.email);
    console.log("pwd: " + this.user.password);
  }

}
