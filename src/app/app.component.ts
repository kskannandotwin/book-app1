import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, FormsModule],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  projectTitle = 'Book Application!!';
  myColor = 'yellow';
  status = true;
  message = '';
  classBlue = '';
  class: any = 'blue-class';
  checkNumber: boolean = true;
  colorBlue = 'blue';
  bookName = 'Angular Tutorial';

  showData($event: any) {
    // alert('button is clicked');
    console.log('yes clicked me');
    this.message = 'you clicked button';
    this.classBlue = 'messageClass1';
  }
}
