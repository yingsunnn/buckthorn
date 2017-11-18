import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, Message, SIGN_UP_URL, MESSAGE_TYPE, UserSignInInfoService, USER_AUTH_NAME, UserAuthFirstParty } from '../../shared';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  message: Message = new Message();

  constructor(private http: HttpClient,
    private userSignInInfoService: UserSignInInfoService) { }

  ngOnInit() {
  }

  signUp() {
    this.userSignInInfoService.clearUserInfo();

    this.message = new Message();

    let headers = new HttpHeaders().set("time_zone", "UTC-05:00");

    if (this.user.password !== this.user.password_sec) {
      this.message.content = "两次输入的密码不一致!";
      this.message.isCloseable = false;
      this.message.type = MESSAGE_TYPE.ERROR;

      return;
    }

    let userAuthFirstParty: UserAuthFirstParty = new UserAuthFirstParty();
    let userAuthFirstParties: Array<UserAuthFirstParty> = new Array<UserAuthFirstParty>();
    userAuthFirstParty.auth_name = USER_AUTH_NAME.EMAIL;
    userAuthFirstParty.secure_password = this.user.password;
    userAuthFirstParty.user_identity = this.user.email;
    userAuthFirstParties.push(userAuthFirstParty);
    this.user.user_auth_first_parties = userAuthFirstParties;

    this.http.post<User>(SIGN_UP_URL, this.user, { headers })
      .subscribe(
      response => {
        this.message.content = "注册成功!";
        this.message.isCloseable = false;
        this.message.type = MESSAGE_TYPE.SUCCESS;
      },
      err => {
        this.message.content = err.error.error_message;
        this.message.isCloseable = false;
        this.message.type = MESSAGE_TYPE.ERROR;
      },
      () => {
      });

    this.user = new User();
  }
}
