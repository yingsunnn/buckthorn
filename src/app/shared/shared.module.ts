import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryListComponent } from './entry-list/entry-list.component';
import { MessageComponent } from './message/message.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { EntryItemComponent } from './entry-item/entry-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EntryListComponent,
    MessageComponent, 
    AddEntryComponent, 
    EntryItemComponent
  ]
})
export class SharedModule { }
