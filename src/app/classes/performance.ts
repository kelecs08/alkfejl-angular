import { Room } from "./room";
import { Film } from "./film";

export class Performance {
    
    public id: number;

    public constructor(
        public startingTime: Date,
        public film: Film = null,
        public room: Room = null
    ) {}

}
