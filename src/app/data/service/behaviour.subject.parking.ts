import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectParking {

  private stateBehaviorSubject : BehaviorSubject<number>;
  public stateParking : Observable<number>;

  constructor() {
    this.stateBehaviorSubject = new BehaviorSubject<number>(0);
    this.stateParking = this.stateBehaviorSubject.asObservable();
  }

  public updateState(id : number): void {
    this.stateBehaviorSubject.next(id);
    this.stateParking  = this.stateBehaviorSubject.asObservable();
  }

}
