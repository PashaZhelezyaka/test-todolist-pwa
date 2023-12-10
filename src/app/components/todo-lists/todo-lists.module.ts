import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListsComponent } from "./todo-lists.component";
import { ItemComponent } from "./item/item.component";
import { TodoListRoutingModule } from "./todo-list-routing.module";
import { FormsModule } from "@angular/forms";
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';


@NgModule({
  declarations: [
    TodoListsComponent,
    ItemComponent,
    TodoFilterComponent,
    TodoSearchComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule
  ]
})
export class TodoListsModule {}
