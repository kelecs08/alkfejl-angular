import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Seat } from '../classes/seat';
import { SEATS } from '../classes/mock-seats';

@Injectable()
export class SeatService {

  constructor() { }

  getSeats(): Observable<Seat[]> {
    return of(SEATS);
  }

  getSeatsByPerformance(performanceId: number): Observable<Seat[]> {
    return of(SEATS.filter(seat => seat.performanceId === performanceId));
  }

}
