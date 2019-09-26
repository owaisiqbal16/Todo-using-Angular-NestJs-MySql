import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todos: Todo[] = [
    { title: "Todo 1" , id : 1},
    { title: "Todo 2" , id : 2},
    { title: "Todo 3" , id : 3},
    { title: "Todo 4" , id : 4},
  ];

  

}
