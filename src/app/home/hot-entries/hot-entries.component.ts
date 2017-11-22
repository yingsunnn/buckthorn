import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Entry, Tag, User, Message, MESSAGE_TYPE, GET_ENTRIES } from '../../shared';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-hot-entries',
  templateUrl: './hot-entries.component.html',
  styleUrls: ['./hot-entries.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HotEntriesComponent implements OnInit {
  entries: Array<Entry> = new Array<Entry>();

  message: Message = new Message();

  constructor(private http: HttpClient) { }

  ngOnInit() {

    let headers = new HttpHeaders().set("time_zone", "UTC-05:00");

    const params = new HttpParams()
      .set('page', '0')
      .set('size', '10');

    this.http.get<Array<Entry>>(GET_ENTRIES, { headers, params })
      .subscribe(
      response => {
        this.entries = response;

        if (this.entries.length <= 0) {
          this.message.content = "没有找到词条";
          this.message.type = MESSAGE_TYPE.INFO;
        }
      },
      err => {
        this.message.content = err.error.error_message;
        this.message.type = MESSAGE_TYPE.ERROR;
      },
      () => { }
      );
  }

}
