import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, FormsModule],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'book-app1';
  bookName = 'Angular programming';
}
