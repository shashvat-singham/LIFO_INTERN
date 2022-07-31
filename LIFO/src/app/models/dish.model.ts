export class Dish{
    constructor(
        public veg: boolean,
        public _id: string,
        public name: string,
        public restaurant: string,
        public img: string,
        public price: number,
    ) {}
}