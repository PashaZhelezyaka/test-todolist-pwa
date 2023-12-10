import { Component, Input } from '@angular/core';
import { TodolistService } from "../../../services/todolist.service";
import { TaskInterface } from "../../interface/todolist.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() task: TaskInterface | undefined;

  constructor(private todoService: TodolistService) {}

  toggleCheck(event: any) {
    if(!this.task) return
    this.task!.completed = event.target.checked
    this.todoService.updateTask(this.task)
  }

}
