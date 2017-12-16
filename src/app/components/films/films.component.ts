import { Component, OnInit } from '@angular/core';
import { Film } from '../../classes/film';
import { FilmService } from '../../services/film.service';
import { PerformanceService } from '../../services/performance.service';
import { Performance } from '../../classes/performance';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  providers: [FilmService, PerformanceService]
})
export class FilmsComponent implements OnInit {
  private films: Film[];
  private selectedFilm: Film;
  private performancesToSelectedFilm: Performance[] = new Array();
  private performances: Performance[] = new Array();
  
  constructor(
    private filmService: FilmService,
    private performanceService: PerformanceService
  ) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe((getFilms: Film[]) => {
      this.films = getFilms;
    });
    this.performanceService.getPerformances().subscribe((getPerformances: Performance[]) => {
      this.performances = getPerformances;
    });
    console.log(this.performances.length);
  }

  onSelect(film: Film): void {
    if(this.selectedFilm != film) {
      this.selectedFilm = film;
      console.log("sselected film");
      this.performances.forEach((item, index) => {
        console.log(item.filmId);
        console.log(this.selectedFilm.id);
        if(item.filmId === this.selectedFilm.id) {
          console.log("push");
          this.performancesToSelectedFilm.push(item);
        }
      });
    }else{
      this.selectedFilm = undefined;
    }
  }
}
