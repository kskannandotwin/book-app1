import { Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

export const routes: Routes = [
    { path: 'add-book', component: AddBookComponent },
    { path: 'delete-book/:id', component: DeleteBookComponent },
];
