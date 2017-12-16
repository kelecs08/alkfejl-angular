import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Film } from '../../classes/film';
import { Performance } from '../../classes/performance';
import { Seat } from '../../classes/seat';
import { PerformanceService } from '../../services/performance.service';
import { SeatService } from '../../services/seat.service';


@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css'],
  providers: [PerformanceService]
})
export class PerformanceComponent implements OnInit {

  @Input() 
  performances: Performance[];
  //seats: Seat[];

  constructor(
    //private route: ActivatedRoute,
    //private location: Location,
    private performanceService: PerformanceService,
    //private seatService: SeatService
  ) { }

  ngOnInit() {
    this.performanceService.getPerformances().subscribe((getPerformances: Performance[]) => {
      this.performances = getPerformances;
      console.log("Perf get: " + this.performances.length);
    })
   // this.getSeatsByPerformance();
  }

  /*getSeatsByPerformance(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.seatService.getSeatsByPerformance(id)
    .subscribe(seats => this.seats = seats);
  }

  sendBooking(name: string, phone: number, email: string, seat: Seat){
    console.log("Booking");
  }*/



}
