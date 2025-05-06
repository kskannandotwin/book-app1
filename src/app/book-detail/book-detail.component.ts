import { Component } from '@angular/core';
import { YellowBackgroundDirective } from '../yellow-background.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  imports: [YellowBackgroundDirective, CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  bookStatus: boolean;
  bookLength: number;
  publication = 'abc';
  backcolor = true;
  textcolor = true;
  Books: any = [
    { bookName: 'Learn Angular', bookAuthor: 'John' },
    { bookName: 'Learn React', bookAuthor: 'Anne' },
    { bookName: 'Learn Vue', bookAuthor: 'Karen' }
  ];

  constructor() {
    this.bookLength = this.Books.length;
    if (this.bookLength > 0) {
      this.bookStatus = true;      
    } else {
      this.bookStatus = false;
    }
  }

  get myclasses() {
    let classes = {
      myColor: this.backcolor,
      myTextColor: this.textcolor
    }
    return classes;
  }

  get myStyles() {
    let styles = {
      'color': 'blue',
      'font-size': '20px',
      'background-color': 'violet'
    }
    return styles;
  }
}
