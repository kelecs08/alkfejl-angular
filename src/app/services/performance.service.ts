import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

import { Performance } from '../classes/performance';
import { url } from '../config/api';


@Injectable()
export class PerformanceService {

  constructor(private httpClient: HttpClient) { }

  public getPerformances(): Observable<Performance[]> {
    return this.httpClient.get(url + 'performance') as Observable<Performance[]>;
  }
  
  /*public getPerformance(id: number): Observable<Performance> {
    return this.httpClient.get(url + 'performance/' + id) as Observable<Performance>;
  }*/

}
