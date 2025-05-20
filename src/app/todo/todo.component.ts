import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  newTodo!: string;
  constructor(public todoService: TodoService) { }

  addTodo(title: string) {
    this.todoService.addTodo(title);
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
  }

}
