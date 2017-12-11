import { Component, OnInit } from '@angular/core';

import { Film } from '../../classes/film';
import { Room } from '../../classes/room';
import { FilmService } from '../../services/film.service';
import { RoomService } from '../../services/room.service';
import { MateralDateTimePicker } from 'material-datetime-picker';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  films: Film[];
  rooms: Room[];

  constructor(
    private filmService: FilmService,
    private roomService: RoomService
  ) { }

  ngOnInit() {
    this.getFilms();
    this.getRooms();
  }

  getFilms(): void {
    this.films = this.filmService.getFilms();
  }

  getRooms(): void {
    this.rooms = this.roomService.getRooms();
  }

  public addFilm(title: string,
                 director: string,
                 synopsis: string,
                 length: number): void {
    console.log("Add film");
    console.log(title + director + synopsis + length);
  }

  public addPerformance(film: string,
                        startingTime: Date,
                        room: string,
                        length: number) {
    console.log("Add performance");
    console.log(startingTime);
  }

}
