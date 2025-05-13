import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from './book';
import { FormsModule } from '@angular/forms';
import { NameValidatorDirective } from './shared/name-validator.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, FormsModule, NameValidatorDirective],  
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-app1';
  types: string[] = ['Technology', 'Literature', 'Language'];

  book: Book = new Book('Angular Pro', 'John Willey', 'Technology', 670);

  get diagnostic() {
    return JSON.stringify(this.book);
  }

  submitForm(bookForm: any) {
    console.log('form data submitted');
    console.log(bookForm);
  }
}
