import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrl: './todo-lists.component.css'
})
export class TodoListsComponent {


  onToggle(): void {
    // Обработка изменения состояния задачи (выполнена/не выполнена)
  }

}
