import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './componets/book-list/book-list.component';
import { BookAddComponent } from './componets/book-add/book-add.component';
import { BookUpdateComponent } from './componets/book-update/book-update.component';
import { BookDetailComponent } from './componets/book-detail/book-detail.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { BookDeleteComponent } from './componets/book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookAddComponent,
    BookUpdateComponent,
    BookDetailComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
