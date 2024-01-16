import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent
  },
  {

    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
