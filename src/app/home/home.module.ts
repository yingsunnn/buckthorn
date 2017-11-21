import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HotEntriesComponent } from './hot-entries/hot-entries.component';
import { EntryItemComponent, EntryListComponent, MessageComponent } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent, 
    HotEntriesComponent,
    EntryItemComponent,
    MessageComponent
  ]
})
export class HomeModule { }
