import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDatabase} from '../in-memory-database';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarComponent
  ]
})
export class CoreModule { }
