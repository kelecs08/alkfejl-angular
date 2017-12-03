import { Injectable } from '@angular/core';
import { Film } from '../classes/film';
import { FILMS } from '../classes/mock-films';

@Injectable()
export class FilmService {

  constructor() { }

  getFilms(): Film[] {
    return FILMS;
  }
}
