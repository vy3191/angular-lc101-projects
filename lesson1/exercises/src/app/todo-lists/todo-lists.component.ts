import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})

class Task {
  description: string;
  isCompleted: boolean;

  constructor(description: string, isCompleted: boolean = false) {
    this.description = description;
    this.isCompleted = isCompleted;
  }
}


export class TodoListsComponent implements OnInit {
  tasks: Task[] = [
    new Task('Learning HTML'),
    new Task('Learning CSS3'),
    new Task('Learning javaScript')
  ]
  constructor() { }

  ngOnInit() {
  }

}
