import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'book-app1';
  private fb = inject(FormBuilder);
  bookForm = this.fb.group({
    bookName: [''],
    bookAuthor: ['', Validators.required],
    bookPrice: [''],
    bookDetails: new FormArray([
      new FormControl('', Validators.required)
    ])
  });

  get bookDetails(): FormArray {
    return this.bookForm.get('bookDetails') as FormArray;
  }

  addChapterField() {
    this.bookDetails.push(new FormControl('', Validators.required));
  }

  deleteChapterField(index: number) {
    this.bookDetails.removeAt(index);
  }

  public onSubmit() {
    this.bookForm.patchValue({
      bookName: 'Angular'
    })
    console.log('submit called');
    console.log(this.bookForm.value);
  }
}
