import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, ButtonModule, AccordionModule, TableModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
