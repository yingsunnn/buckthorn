import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, Message, UserSignInInfoService, MESSAGE_TYPE, SIGN_IN_URL } from '../../shared';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
  user: User = new User();
  message: Message = new Message();

  constructor(private http: HttpClient,
              private userSignInInfoService: UserSignInInfoService) { }

  ngOnInit() {
  }

  signIn() {
    this.message = new Message();

    let headers = new HttpHeaders().set("time_zone", "UTC-05:00");

    const params = new HttpParams()
      .set('auth_name', 'EMAIL')
      .set('user_identity', this.user.email)
      .set('secure_password', this.user.password);

    this.http.get<User>(SIGN_IN_URL, { headers, params })
      .subscribe(
      response => {
        this.message.content = "Sign in successfully";
        this.message.isCloseable = false;
        this.message.type = MESSAGE_TYPE.SUCCESS;

        this.userSignInInfoService.updateUserInfo(response);
      },
      (err: HttpErrorResponse) => {
        this.message.content = err.error.error_message;
        this.message.isCloseable = false;
        this.message.title = "Sign in failed";
        this.message.type = MESSAGE_TYPE.ERROR;
        
        this.userSignInInfoService.clearUserInfo();
      },
      () => { }
      );
  }
}
