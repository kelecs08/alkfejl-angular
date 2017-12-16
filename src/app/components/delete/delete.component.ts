import { Component, OnInit } from '@angular/core';
import { Film } from '../../classes/film';
import { FilmService } from '../../services/film.service';
import { Performance } from '../../classes/performance';
import { PerformanceService } from '../../services/performance.service';
import { Room } from '../../classes/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  films: Film[];
  performances: Performance[];
  rooms: Room[];

  constructor(
    private filmService: FilmService,
    private performanceService: PerformanceService,
    private roomService: RoomService
  ) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe((getFilms: Film[]) => {
      this.films = getFilms;
    });
    this.performanceService.getPerformances().subscribe((getPerformances: Performance[]) => {
      this.performances = getPerformances;
    });
    this.roomService.getRooms().subscribe((getRooms: Room[]) => {
      this.rooms = getRooms;
    });
  }

  public deleteFilm(film: Film): void {
    this.filmService.deleteFilm(film.id);
  }

  public deletePerformance(performance: Performance): void {
    this.performanceService.deletePerformance(performance.id);
  }

  public deleteRoom(room: Room): void {
    this.roomService.deleteRoom(room.id);
  }
}
