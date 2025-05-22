import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations'; // <-- Add this
@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
    animations: [
    trigger('taskAnim', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class TodoComponent {
  task: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.task && this.task.trim() !== '') {
      this.tasks.push(this.task.trim());
      this.task = '';
    }
  }

  removeTask(index: number) {
    if (index > -1 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
}
