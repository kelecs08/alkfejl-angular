import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Seat } from '../../classes/seat';
import { ActivatedRoute } from '@angular/router';
import { PerformanceService } from '../../services/performance.service';
import { SeatService } from '../../services/seat.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  @Input()
  performance: Performance;
  seats: Seat[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private performanceService: PerformanceService,
    private seatService: SeatService  
  ) { }

  ngOnInit() {
  //  this.getPerformance();
  //  this.getSeatsByPerformance();
  }

 /* getPerformance(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.performanceService.getPerformance(id)
    .subscribe(performance => this.performance = performance);
  }

  getSeatsByPerformance(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.seatService.getSeatsByPerformance(id)
    .subscribe(seats => this.seats = seats);
  }*/

  sendBooking(name: string, phone: number, email: string, seat: Seat){
    console.log("Booking");
  }

}
