import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { PERFORMANCES } from '../classes/mock-performances';
import { Performance } from '../classes/performance';


@Injectable()
export class PerformanceService {

  constructor() { }

  getPerformances(): Observable<Performance[]> {
    return of(PERFORMANCES);
  }
  
  getPerformance(id: number): Observable<Performance> {
    return of(PERFORMANCES.find(performance => performance.id === id));
  }

}
