import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Seat } from '../classes/seat';

@Injectable()
export class SeatService {

  constructor() { }

  getSeats(): Observable<Seat[]> {
    return;
  }

  getSeatsByPerformance(performanceId: number): Observable<Seat[]> {
    return;
  }

}
