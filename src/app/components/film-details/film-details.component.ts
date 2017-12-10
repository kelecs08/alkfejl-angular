import { Component, OnInit, Input } from '@angular/core';

import { Film } from '../../classes/film';
import { Performance } from '../../classes/performance';
import { PerformanceService } from '../../services/performance.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  performances: Performance[];
  @Input()
  film: Film;

  constructor(
    private performanceService: PerformanceService
  ) { }

  ngOnInit() {
    this.getPerformances();
  }

  getPerformances(): void{
    this.performanceService.getPerformances()
    .subscribe(performances => this.performances = performances);
  }

}
