import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {
  constructor() { }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      debugger
      alert(error.error.message);
      return of(result as T);
    };
  }
  public log(message: string) {
    console.log(message);
  }

}