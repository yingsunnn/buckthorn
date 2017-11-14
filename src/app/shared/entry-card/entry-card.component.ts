import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Entry } from '../models';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class EntryCardComponent implements OnInit {
  @Input() entry: Entry;

  constructor() { }

  ngOnInit() {
  }

}
