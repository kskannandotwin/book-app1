import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookProcessService } from '../book-process.service';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  name = 'Angular Professional';

  constructor(private bkservice: BookProcessService) {}

  ngOnInit() {
    this.name = this.bkservice.processBookData(this.name);
  }
}
