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

}
