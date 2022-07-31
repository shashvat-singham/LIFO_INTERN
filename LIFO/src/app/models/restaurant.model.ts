export class Restaurant{
    constructor(
        public _id: string,
        public img: string,
        public name: string,
        public open_time: string,
        public close_time: string,
        public rating: number,
        public phone: number,
        public address: String,
    ) {}
}