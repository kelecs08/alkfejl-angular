export class Film {

    public id: number;
    
    constructor(
        public title: string,
        public director: string,
        public synopsis: string,
        public length: number
    ) {}
    
}
