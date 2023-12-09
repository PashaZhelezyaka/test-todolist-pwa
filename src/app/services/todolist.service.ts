import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.url + `/users/1/todos`)
  }
}
