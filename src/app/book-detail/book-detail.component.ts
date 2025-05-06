import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  @Input() bookName: any;
  @Output() eventEmitter = new EventEmitter();

  myevent(event: any) {
    this.eventEmitter.emit('Book added successfully');
  }
}
