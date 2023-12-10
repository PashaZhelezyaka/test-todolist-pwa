import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { TaskInterface } from "../components/interface/todolist.interface";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  url = 'https://jsonplaceholder.typicode.com';
  private tasks$: BehaviorSubject<TaskInterface[]> = new BehaviorSubject<TaskInterface[]>([]);
  private allTaskData: TaskInterface[] =[];


  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  loadTasks() {
    this.http.get<TaskInterface[]>(this.url + `/users/1/todos`).subscribe(res => {
      this.tasks$.next(res);
      this.allTaskData = res;
    });
  }

  getTasks(): Observable<TaskInterface[]> {
    return this.tasks$.asObservable();
  }

  updateTask(updatedTask: TaskInterface) {
    const currentTasks = this.allTaskData;
    const updatedTasks = currentTasks.map(task => {
      if (task.id === updatedTask.id) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    this.allTaskData = [...updatedTasks];
  }

  filterTasks(type: string) {
    let filtered: TaskInterface[];
    if (type === "completed") {
      filtered = this.allTaskData.filter(task => task.completed);
    } else if (type === "not_completed") {
      filtered = this.allTaskData.filter(task => !task.completed);
    } else {
      filtered = [...this.allTaskData];
    }
    this.tasks$.next(filtered);
  }

  sortTasksByName(ascending: boolean = true) {
    const sortedTasks = [...this.tasks$.getValue()];

    if (ascending) {
      sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sortedTasks.sort((a, b) => b.title.localeCompare(a.title));
    }

    this.tasks$.next(sortedTasks);
  }


  searchTasks(query: string) {
    const filtered = this.allTaskData.filter(task =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
    this.tasks$.next(filtered);
  }


  reset(){
     this.tasks$.next(this.allTaskData);
  }
}
