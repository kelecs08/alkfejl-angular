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

  @Input()
  film: Film;
  
  private performancesToSelectedFilm: Performance[] = new Array();
  private performances: Performance[];

  constructor(
    private performanceService: PerformanceService
  ) { }

  ngOnInit() { 
    this.performanceService.getPerformances().subscribe((getPerformances: Performance[]) => {
      this.performances = getPerformances;
    });
   }

   showPerformances(): void {
    this.performances.forEach((item, index) => {
      console.log(item.film.id);
      console.log(this.film.id);
      console.log(item.startingTime);
      if(item.film.id == this.film.id) {
        this.performancesToSelectedFilm.push(item);
        console.log(this.performancesToSelectedFilm.length);
        console.log("push");
      }
    });
   }

}
