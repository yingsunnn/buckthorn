import { Injectable } from '@angular/core';
import { User } from './models';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class UserSignInInfoService {
    private userInfo: Subject<User> = new BehaviorSubject<User>(new User());

    constructor() { }

    updateUserInfo(userInfo: User) {
        this.userInfo.next(userInfo);
    }

    clearUserInfo() {
        this.userInfo.next(new User());
    }

    getUserInfo(): Observable<User> {
        return this.userInfo.asObservable();
    }
}