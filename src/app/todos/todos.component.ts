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

  todos: Todo[];
  title : string;
  myTodo : Todo = null;

  getTodos() : void {
    this.todosService.getTodos()
      .subscribe( todos => this.todos = todos);
  }
  
  onSubmit() {
    const todo = {
      title : this.title
    }
    this.addTodo(todo.title);
  }

  addTodo(title : string): void {
    if (!title) { return; console.log("No title given") }
    this.todosService.addTodo({title} as Todo)
      .subscribe(todo => {
        this.todos.push(todo);
        this.getTodos();
      });
  }

  deleteTodo(todo) : void {
    this.todos = this.todos.filter(t => t!== todo)
    this.todosService.deleteTodo(todo).subscribe();
  }

  updateClicked(todo) : void {
    this.myTodo = todo;
    console.log(this.myTodo)
  }

  updateTodo() : void {
    console.log(this.myTodo)
    this.todosService.updateTodo(this.myTodo)
      .subscribe( () => {
        this.getTodos();
        this.myTodo = null;
    })
  }
}
