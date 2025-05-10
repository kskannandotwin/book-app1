import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, ReactiveFormsModule],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'book-app1';
  bookForm = new FormGroup({
    bookName: new FormControl(''),
    bookAuthor: new FormControl(''),
    bookPrice: new FormControl(''),
    bookDetails: new FormGroup({
      chapters: new FormControl(''),
      pages: new FormControl('')
    })
  });

  public onSubmit() {
    this.bookForm.patchValue({
      bookName: 'Angular',
      bookDetails: {
        chapters: '8',
        pages: '500'
      }
    })
  }
}
