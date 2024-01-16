import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookTabComponent } from './tabs/book-tab/book-tab.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    BookTabComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule
  ]
})
export class BooksModule { }
