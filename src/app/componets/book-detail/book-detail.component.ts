import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  id!: number;
  book:Book = {};

  constructor(
    private bookService: BookService,
    private router: Router,
    private routerAt: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.book = {};
    this.id = this.routerAt.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(
      (data) => {
        this.book = data;
        console.log(this.book);
      }, (error) => console.log(error)
    );
  }

  gotoList(){
    this.router.navigate(['books']);
  }

}
