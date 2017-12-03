import { Film } from './film';

export const FILMS: Film[] = [
    { id: 1, title: 'How to train your dragon', director: 'Dean DeBlois, Chris Sanders', synopsis: 'A hapless young viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.', length: 98, entry_date: new Date() },
    { id: 2, title: 'The hangover', director: 'Todd Phillips', synopsis: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor is missing. They make their way around the city in order to find their friend before his wedding.', length: 100, entry_date: new Date()},
    { id: 3, title: 'Titanic', director: 'James Cameron', synopsis: 'Classic', length: 205, entry_date: new Date()}
]