import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Entry, Message} from '../models';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddEntryComponent implements OnInit {

  message: Message = new Message();
  entry: Entry = new Entry();

  constructor() { }

  ngOnInit() {
  }

}
