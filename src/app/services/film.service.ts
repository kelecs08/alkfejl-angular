import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Film } from '../classes/film';
import { FILMS } from '../classes/mock-films';

@Injectable()
export class FilmService {

  constructor() { }

  getFilms(): Film[] {
    return FILMS;
  }

  getFilm(id: number): Observable<Film> {
    return of(FILMS.find(film => film.id === id));
  }
  
}
