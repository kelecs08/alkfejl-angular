import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Room } from '../classes/room';
import { ROOMS } from '../classes/mock-rooms';

@Injectable()
export class RoomService {

  constructor() { }

  getRooms(): Room[] {
    return ROOMS;
  }

}
