import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];
  currentId = 0;
  newTodo = '';

  addTodo(): void {
    this.todos.push({
      id: this.currentId,
      title: this.newTodo,
      finished: false
    });
    this.newTodo = '';
    this.currentId += 1;
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
  }

  removeAllFinished(): void {
    this.todos = this.todos.filter((todo: Todo) => !todo.finished)
  }

  showData(): void {
    console.log(this.todos);
    console.log(this.newTodo);
  }
}
