import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, Message, MESSAGE_TYPE } from '../../shared';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
  user: User = new User();
  message: Message = new Message();

  constructor() { }

  ngOnInit() {
  }

  signIn () {
    this.message.content = "Email or Password is incorrect.";
    this.message.isCloseable = false;
    this.message.title = "Sign in failed";
    this.message.type = MESSAGE_TYPE.ERROR;

    console.log("email: " + this.user.email);
    console.log("pwd: " + this.user.password);
  }

}
