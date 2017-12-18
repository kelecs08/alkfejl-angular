import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Room } from '../classes/room';
import { HttpClient } from '@angular/common/http';
import { url } from '../config/api';

@Injectable()
export class RoomService {

  constructor(private httpClient: HttpClient) { }

  public getRooms(): Observable<Room[]> {
    return this.httpClient.get(url + 'room') as Observable<Room[]>;
  }

  public addRoom(room: Room): Observable<any> {
    return this.httpClient.post(url + 'room/add', room);
  }

  public deleteRoom(id: number): Observable<any> {
    return this.httpClient.delete(url + 'room' + id);
  }

}
