import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { TodoListsComponent } from "./todo-lists.component";

const routes: Routes = [
  {
    path: '',
    component: TodoListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
