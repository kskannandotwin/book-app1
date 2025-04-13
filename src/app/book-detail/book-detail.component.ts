import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  @Input('bookData') bookName: any;
  @Output() eventEmitter = new EventEmitter();

  myEvent() {
    this.eventEmitter.emit('The book added successfully');
  }
}
