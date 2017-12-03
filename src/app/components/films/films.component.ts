import { Component, OnInit } from '@angular/core';
import { Film } from '../../classes/film';
import { FILMS } from '../../classes/mock-films';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[];
  selectedFilm: Film;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getFilms();
  }

  onSelect(film: Film): void {
    this.selectedFilm = film;
  }

  getFilms(): void {
    this.films = this.filmService.getFilms();
  }
}
