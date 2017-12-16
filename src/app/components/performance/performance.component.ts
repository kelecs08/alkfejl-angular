import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Film } from '../../classes/film';
import { Performance } from '../../classes/performance';
import { Seat } from '../../classes/seat';
import { PerformanceService } from '../../services/performance.service';
import { SeatService } from '../../services/seat.service';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css'],
  providers: [PerformanceService]
})
export class PerformanceComponent /*implements OnInit*/ {

  performances: Performance[];
  displayedColumns = ['startingTime', 'filmTitle', 'roomName'];
  dataSource: MatTableDataSource<Performance>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    //private route: ActivatedRoute,
    //private location: Location,
    private performanceService: PerformanceService,
    //private seatService: SeatService
  ) { 
    this.performanceService.getPerformances().subscribe((getPerformances: Performance[]) => {
      this.performances = getPerformances;
      console.log(this.performances.length);
      });
    this.dataSource = new MatTableDataSource(this.performances);
  }

 /* ngOnInit() {
    this.performanceService.getPerformances().subscribe((getPerformances: Performance[]) => {
      this.performances = getPerformances;
      console.log(this.performances.length);
      });
    this.dataSource = new MatTableDataSource(this.performances);
   // this.getSeatsByPerformance();
  }*/

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
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
