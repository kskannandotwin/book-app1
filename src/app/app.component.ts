import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { add } from './first/first';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-app1';

  result = add(10, 20);

  isClicked = false;

  clicked() {
    this.isClicked = !this.isClicked;
  }

  get message() {
    return 'The button is clicked ' + this.isClicked; 
  }
}
