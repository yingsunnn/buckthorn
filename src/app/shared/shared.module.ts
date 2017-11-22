import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntryListComponent } from './entry-list/entry-list.component';
import { MessageComponent } from './message/message.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { EntryItemComponent } from './entry-item/entry-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MessageComponent, 
    EntryItemComponent,
    EntryListComponent,
    AddEntryComponent
  ],
  exports: [
    MessageComponent, 
    EntryItemComponent,
    EntryListComponent,
    AddEntryComponent
  ]
})
export class SharedModule { }
