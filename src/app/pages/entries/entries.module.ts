import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EntriesRoutingModule } from './entries-routing.module';
import {EntryListComponent} from './entry-list/entry-list.component';
import {EntryFormComponent} from './entry-form/entry-form.component';
import {CalendarModule} from 'primeng/primeng';
import {IMaskModule} from 'angular-imask';

@NgModule({
  declarations: [
    EntryListComponent,
    EntryFormComponent
  ],
  imports: [
    CommonModule,
    EntriesRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    IMaskModule
  ]
})
export class EntriesModule { }
