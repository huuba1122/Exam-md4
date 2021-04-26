import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book?: Book = {};
  submitted = false;
  constructor(
    private bookService: BookService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  save() {
    this.bookService
      .addBook(this.book).subscribe((data: any) => {
        this.book = {};
        this.gotoList();
      },
        (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/books']);
  }

}
