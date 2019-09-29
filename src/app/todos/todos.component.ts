import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor( private todosService : TodosService ) { }

  ngOnInit() {
    this.getTodos();  
  }

  todos: Todo[]

  getTodos() : void {
    this.todosService.getTodos()
      .subscribe( todos => this.todos = todos);
  }

  deleteTodo(todo) : void {
    this.todos = this.todos.filter(t => t!== todo)
    this.todosService.deleteTodo(todo).subscribe();
  }

  

}
