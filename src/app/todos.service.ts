import { Injectable } from '@angular/core';
import { Todo } from './Todo';
import { Observable } from 'rxjs';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
  }

  constructor(
    private http: HttpClient,
  ) { }

  getTodos() : Observable<Todo[]>{
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  addTodo( todo : Todo ) : Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos' , todo , this.httpOptions);
  }

  updateHero( todo : Todo ) : Observable<Todo> {
    return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}` , todo , this.httpOptions);
  }

  deleteTodo( todo : Todo ) : Observable<Todo> {
    return this.http.delete<Todo>(`http://localhost:3000/todos/${todo.id}` , this.httpOptions)
  }

}
