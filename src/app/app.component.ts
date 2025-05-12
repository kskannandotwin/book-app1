import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    bookName: ['', [Validators.required, Validators.minLength(10), myValidation]],
    authorGroup: this.fb.group({
      bookAuthor: [''],
      confirmBookAuthor: ['']}, { validators: confirmAuthor }),
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

function myValidation(control: AbstractControl): { [key: string]: any } | null {
  const data: string = control.value;
  if (data === '' || data.startsWith('Ang')) {
    return null;
  }
  return { 'nameerror': true };
}

function confirmAuthor(group: AbstractControl): { [key: string]: any } | null {
  console.log('In confirm author');
  const author1 = group.get('bookAuthor');
  const author2 = group.get('confirmBookAuthor');
  if (author1?.value === author2?.value) {
    return null;
  } else {
    return { 'authormismatch': true };
  }
}
