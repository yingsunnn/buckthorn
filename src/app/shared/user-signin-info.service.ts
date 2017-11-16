import { Injectable } from '@angular/core';
import { User } from './models';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class UserSignInInfoService {
    private userInfo = new Subject<User>();

    constructor() { }

    updateUserInfo(userInfo: User) {
        this.userInfo.next(userInfo);
    }

    clearUserInfo () {
        this.userInfo.next(new User());
    }

    getUserInfo(): Observable<User> {
        return this.userInfo.asObservable();
    }
}