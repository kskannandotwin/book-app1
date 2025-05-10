import { Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteAuth } from './route-auth';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [
  {
    path: 'add-book',
    canActivate: [RouteAuth],
    component: AddBookComponent,
    children: [{ path: 'book-detail', component: BookDetailComponent }],
  },
  { path: 'delete-book/:id', component: DeleteBookComponent },
  {
    path: 'authors',
    loadComponent: () =>
      import('./authors/authors.component').then((m) => m.AuthorsComponent),
  },
  { path: '**', component: PageNotFoundComponent },
];
