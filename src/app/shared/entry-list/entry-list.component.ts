import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Entry, Message } from '../models';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EntryListComponent implements OnInit {
  @Input() entries: Array<Entry>;
  
  constructor() { }

  ngOnInit() {
    
  }

}
