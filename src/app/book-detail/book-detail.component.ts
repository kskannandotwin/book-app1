import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookProcessService } from '../book-process.service';
import { Book } from '../book';
import { BookDetailService } from '../book-detail.service';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  name = 'Angular Professional';

  bookDetails!: Book[];

  constructor(private bkdetail: BookDetailService) {
    console.log('constructor called');    
  }

  ngOnInit() {
    console.log('onInit called');
    this.bkdetail.getBookDetails().subscribe(bookList => {
      this.bookDetails = bookList;
    });
  }
}
