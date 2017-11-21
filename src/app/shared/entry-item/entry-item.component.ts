import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Entry } from '../models';

@Component({
  selector: 'app-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EntryItemComponent implements OnInit {

  @Input() entry: Entry;

  constructor() { }

  ngOnInit() {
  }

}
