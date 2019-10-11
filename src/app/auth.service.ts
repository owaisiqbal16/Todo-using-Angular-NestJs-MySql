import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
  }
  constructor(private http: HttpClient) { }

  getProfile() : Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/auth/me');
  }

  loginUser( user : User ) : Observable<User> {
    return this.http.post<any>('http://localhost:3000/auth/login' , user , this.httpOptions)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep
        // user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        return user;
    }));
  }

  // registerUser( todo : Todo ) : Observable<Todo> {
  //   return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}` , todo , this.httpOptions);
  // }

  // deleteTodo( todo : Todo ) : Observable<Todo> {
  //   return this.http.delete<Todo>(`http://localhost:3000/todos/${todo.id}` , this.httpOptions)
  // }
}