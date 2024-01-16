import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksModule } from './books/books.module';


@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    BooksModule,
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ],
  exports: [MainMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
