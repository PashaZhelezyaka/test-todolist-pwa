import { Component } from '@angular/core';
import { TodolistService } from "../../../services/todolist.service";

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent {

  changeSort: boolean = false;
  typeFilter: string = 'all';

  constructor(private todolistService: TodolistService) {}
  onFilterChange() {
    this.todolistService.filterTasks(this.typeFilter);
  }

  onSort(){
    this.changeSort = !this.changeSort;
    this.todolistService.sortTasksByName(this.changeSort);
  }

  onReset(){
   this.typeFilter = 'all';
    this.todolistService.reset();
  }

}
