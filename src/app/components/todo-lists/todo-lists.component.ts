import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodolistService } from "../../services/todolist.service";
import { Subscription } from "rxjs";
import { TaskInterface } from "../interface/todolist.interface";

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrl: './todo-lists.component.css'
})
export class TodoListsComponent implements OnInit, OnDestroy {

  tasks: TaskInterface[] = [];
  private tasksSubscription: Subscription = new Subscription();

  constructor(private todolistService: TodolistService) {}

  ngOnInit() {
    this.tasksSubscription = this.todolistService.getTasks().subscribe(
      (data: TaskInterface[]) => {
        this.tasks = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshLoadTasks() {
    this.todolistService.loadTasks();
  }

  ngOnDestroy() {
    this.tasksSubscription.unsubscribe();
  }

}
