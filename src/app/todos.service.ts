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
    return this.http.get<Todo[]>('http://localhost:3000/todos')
  }
}
