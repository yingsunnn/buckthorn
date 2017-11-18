import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User, UserSignInInfoService } from '../shared';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  userSignedIn: User = new User();
  subscription: Subscription;

  constructor(private userSignInInfoService: UserSignInInfoService) {
    this.subscription = this.userSignInInfoService
      .getUserInfo()
      .subscribe(
      userSignedIn => this.userSignedIn = userSignedIn,
      error => console.log('Error:' + error));
  }

  ngOnInit() {
    this.updateUserSignedIn();
  }

  toggleSignIn() {
    this.updateUserSignedIn();
    $('.ui.modal.sign-in').modal('show');
  }

  toggleSignUp() {
    $('.ui.modal.sign-up').modal('show');
  }

  signOut() {
    this.userSignInInfoService.clearUserInfo();
  }

  updateUserSignedIn() {
    this.userSignInInfoService
      .getUserInfo()
      .subscribe(
      userSignedIn => this.userSignedIn = userSignedIn,
      error => console.log('Error:' + error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
