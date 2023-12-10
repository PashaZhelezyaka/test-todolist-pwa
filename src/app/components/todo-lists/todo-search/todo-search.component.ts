import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";
import { TaskInterface } from "../../interface/todolist.interface";
import { TodolistService } from "../../../services/todolist.service";

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrl: './todo-search.component.css'
})
export class TodoSearchComponent implements OnInit{

  searchTask: string = '';
  private searchTerms = new Subject<string>();
  filteredTasks: TaskInterface[] = [];
  tasks: TaskInterface[] = [];

  constructor(private todolistService: TodolistService) {}

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(() => this.performSearch());
  }

  onSearch() {
    this.todolistService.searchTasks(this.searchTask);
  }

  performSearch() {
    this.tasks = this.filteredTasks.filter(task =>
      task.title.toLowerCase().includes(this.searchTask.toLowerCase())
    );
  }

  onReset(){
     this.searchTask = '';
     this.todolistService.reset();
  }
}
