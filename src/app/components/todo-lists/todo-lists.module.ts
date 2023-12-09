import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListsComponent } from "./todo-lists.component";
import { ItemComponent } from "./item/item.component";
import { TodoListRoutingModule } from "./todo-list-routing.module";



@NgModule({
  declarations: [
    TodoListsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule
  ]
})
export class TodoListsModule { }
