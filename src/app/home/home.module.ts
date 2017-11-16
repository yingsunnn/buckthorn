import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HotEntriesComponent } from './hot-entries/hot-entries.component';
import { EntryCardComponent, EntryListComponent } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent, 
    HotEntriesComponent,
    EntryCardComponent,
    EntryListComponent
  ]
})
export class HomeModule { }
