import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, FormsModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  projectTitle = 'Book Application!!';
  myColor = 'yellow';
  status = true;
  className = '';
  bookName = 'Angular';
  message = 'great';

  showData($event: any){
    this.className = 'rainbow-btn';
  }
}
