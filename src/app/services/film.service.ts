import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { url } from "../config/api";

import { Film } from '../classes/film';

@Injectable()
export class FilmService {

  constructor(private httpClient: HttpClient) { }

  public getFilms(): Observable<Film[]> {
    return this.httpClient.get(url + 'film') as Observable<Film[]>;
  }

  public getFilm(id: number): Observable<Film> {
    return this.httpClient.get(url + 'film/' + id) as Observable<Film>;
  }

  public addFilm(film: Film): Observable<any> {
    return this.httpClient.post(url + 'films', film);
  }
  
}
