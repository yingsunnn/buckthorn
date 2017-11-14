import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryCardComponent } from './entry-card/entry-card.component';
import { EntryListComponent } from './entry-list/entry-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EntryCardComponent, EntryListComponent]
})
export class SharedModule { }
