import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TopcompComponent} from '../topcomp/topcomp.component'
import { ChildindicatorDirective } from '../childindicator.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ,TopcompComponent,ChildindicatorDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
