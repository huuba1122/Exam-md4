import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookAddComponent } from './componets/book-add/book-add.component';
import { BookDeleteComponent } from './componets/book-delete/book-delete.component';
import { BookDetailComponent } from './componets/book-detail/book-detail.component';
import { BookListComponent } from './componets/book-list/book-list.component';
import { BookUpdateComponent } from './componets/book-update/book-update.component';

const routes: Routes = [
  // {path : '', component: HomeComponent},
  {path : 'books', component: BookListComponent},
  {path : 'books/add', component: BookAddComponent},
  {path : 'books/details/:id', component: BookDetailComponent},
  {path : 'books/update/:id', component: BookUpdateComponent},
  {path : 'books/delete/:id', component: BookDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
