import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books! : any;

  constructor(
    private bookService: BookService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAll();
  }


  getAll(){
    this.books = this.bookService.getBookList();
  }

  
}
