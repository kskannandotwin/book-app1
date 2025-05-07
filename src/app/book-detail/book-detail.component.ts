import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Lognumber } from '../lognumber';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule, Lognumber],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  name: string = 'Angular Programming';
  price: number = 5600.75;
  publicationDate = new Date(17,5,2007);
  value = 10;
}
