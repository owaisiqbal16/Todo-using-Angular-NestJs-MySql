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

  authOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': `${localStorage.getItem('currentUser')}`,
    }),
  };

  isAuthenticated : boolean = false;
  user = null;

  constructor(private http: HttpClient) { }

  getProfile() : Observable<any>{
    console.log(localStorage.getItem('currentUser'))
    return this.http.get<any>('http://localhost:3000/auth/me' , this.authOptions).pipe(
      tap(( userData : any ) => {
        this.user = userData;
        this.isAuthenticated = true
      })
    );
  }

  loginUser( user : User ) : Observable<any> {
    console.log(user);
    return this.http.post<any>('http://localhost:3000/auth/login' , user , this.httpOptions)
      // .pipe(
      //   tap((access_token: any) => {
      //     // console.log(access_token);
      //   }),
        // localStorage.setItem('currentUser', JSON.stringify(user))
        // return user;
      // )
      };
  }

  // registerUser( todo : Todo ) : Observable<Todo> {
  //   return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}` , todo , this.httpOptions);
  // }

  // deleteTodo( todo : Todo ) : Observable<Todo> {
  //   return this.http.delete<Todo>(`http://localhost:3000/todos/${todo.id}` , this.httpOptions)
  // }
