import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  id!: number;
  book: Book = {};

  constructor(
    private bookService: BookService,
    private router: Router,
    private routerAt: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.book = {};
    this.id = this.routerAt.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(data => {
      this.book = data;
    }, error => console.log(error)); 
  }

  updateBook(){
    this.bookService.updateBook(this.id, this.book).subscribe(data => {
      console.log(data);
      this.book = {};
      this.gotoList();
    })
  }

  gotoList(){
    this.router.navigate(['/books']);
  }

  onSubmit(){
    this.updateBook();
  }

}
