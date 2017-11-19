import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryCardComponent } from './entry-card/entry-card.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { MessageComponent } from './message/message.component';
import { AddEntryComponent } from './add-entry/add-entry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EntryCardComponent, EntryListComponent, MessageComponent, AddEntryComponent]
})
export class SharedModule { }
