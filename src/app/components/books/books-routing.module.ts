import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTabComponent } from './tabs/book-tab/book-tab.component';

const routes: Routes = [
  {
    path: '',
    component: BookTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
