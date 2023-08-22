import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarGuyComponent } from './action-bar-guy/action-bar-guy.component';
import { MaxMinGuyComponent } from './max-min-guy/max-min-guy.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarGuyComponent,
    MaxMinGuyComponent,
    SqaureFlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
