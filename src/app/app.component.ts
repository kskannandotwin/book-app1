import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, FormsModule, BookDetailComponent],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  projectTitle = 'Book Application!!';
  myColor = 'yellow';
  public bookName = 'Learn Angular';
}
