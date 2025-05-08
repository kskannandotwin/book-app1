import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookDetailService {
  private bookList: Book[] = [
    { bookName: 'Angular 8', bookAuthor: 'John' },
    { bookName: 'Angular 9', bookAuthor: 'Johny' },
    { bookName: 'Angular 10', bookAuthor: 'Jane' },
  ];

  constructor(private http: HttpClient) { }

  getBookDetails(): Observable<Book[]> {
    // return of(this.bookList).pipe(delay(5000));
    return this.http.get<Book[]>('https://jsonplaceholder.typicode.com/users');
  }
}
