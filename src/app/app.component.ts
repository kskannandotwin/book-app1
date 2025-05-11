import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ReactiveFormsModule],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'book-app1';

  private fb = inject(FormBuilder);

  bookForm = this.fb.group({
    bookName: [''],
    bookAuthor: ['', Validators.required],
    bookPrice: [''],
    bookDetails: this.fb.group({
      chapters: [''],
      pages: [''],
    }),
  });

  public onSubmit() {
    this.bookForm.patchValue({
      bookName: 'Angular',
      bookDetails: {
        chapters: '8',
        pages: '500',
      },
    });
    console.log('submit called');
    console.log(this.bookForm.value);
  }
}
