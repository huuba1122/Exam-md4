import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {


  id!: number;
  book: Book = {};
  constructor(
    private routerAt: ActivatedRoute,
    private router: Router,
    private bookService: BookService
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

  deleteBook(){
    if(confirm('Are you sure delete book name: ' + this.book.title)){
      this.bookService.deleteBook(this.id).subscribe(
        data => {this.gotoList();}
      )
    }
  }

}
