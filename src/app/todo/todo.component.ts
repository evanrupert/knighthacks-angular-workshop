import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove(): void {
    this.delete.emit(this.todo.id);
  }

}
