import { Component, OnInit } from '@angular/core';

import { Film } from '../../classes/film';
import { Room } from '../../classes/room';
import { FilmService } from '../../services/film.service';
import { RoomService } from '../../services/room.service';

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
    this.filmService.getFilms().subscribe((getFilms: Film[]) => {
      this.films = getFilms;
    });
    this.roomService.getRooms().subscribe((getRooms: Room[]) => {
      this.rooms = getRooms;
    })
  }

  public addFilm(title: string,
                director: string,
                synopsis: string,
                length: number): void {
    console.log("Add film");
    this.filmService.addFilm(new Film(title, director, synopsis, length));
    console.log(title + director + synopsis + length);
  }

  public addPerformance(filmId: string,
           startingTime: Date,
           room: Room,
           length: number) {
    console.log("Add performance");
    console.log(startingTime);
    console.log(filmId);
  }

  public addRoom(roomName: string,
                rowsNumber: number,
                columnsNumber: number) {
    console.log("Add room");
  }

}
