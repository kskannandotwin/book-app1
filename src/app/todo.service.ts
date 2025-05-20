import { Injectable } from '@angular/core';

export interface Todo {
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public todos: Todo[] = [];
  
  addTodo(title: string) {
    this.todos.push({title, done: false});
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
