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
  
  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe((getFilms: Film[]) => {
      this.films = getFilms;
    });
  }

  onSelect(film: Film): void {
    if(this.selectedFilm != film) {
      this.selectedFilm = film;
    }else{
      this.selectedFilm = undefined;
    }
  }
}
