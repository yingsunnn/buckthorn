import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { MessageComponent, UserSignInInfoService } from '../shared';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  declarations: [
    SignInComponent, 
    MessageComponent, SignUpComponent
  ],
  providers: [
    UserSignInInfoService
  ]
})
export class UserModule { }
