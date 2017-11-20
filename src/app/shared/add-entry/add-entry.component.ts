import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { User, Entry, Message, MESSAGE_TYPE } from '../models';
import { UserSignInInfoService } from '../user-signin-info.service';
import { ADD_NEW_ENTRY } from '../endpoint-url';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddEntryComponent implements OnInit {

  message: Message = new Message();
  entry: Entry = new Entry();
  user: User = new User();

  constructor(private http: HttpClient,
    private userSignInInfoService: UserSignInInfoService) { }

  ngOnInit() {
  }

  addEntry() {
    this.message = new Message();

    this.userSignInInfoService.getUserInfo().subscribe(
      data => {
        this.user = data
      },
      error => { },
      () => { }
    );

    if (!this.user.id) {
      this.message.content = "未登录或登录信息有误.";
      this.message.type = MESSAGE_TYPE.ERROR;
      return;
    }

    let headers = new HttpHeaders({
      "time_zone": "UTC-05:00",
      "user_id": this.user.id + "",
      "access_token": "",
    });

    this.http.post<Entry>(ADD_NEW_ENTRY, this.entry, { headers })
      .subscribe(
      response => {
        this.message.content = "词条添加成功";
        this.message.type = MESSAGE_TYPE.SUCCESS;
      },
      err => {
        this.message.content = err.error.error_message;
        this.message.type = MESSAGE_TYPE.ERROR;
      },
      () => {
      }
      );
  }

}
