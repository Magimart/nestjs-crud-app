import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';


@Injectable()
export class ItemsService {

    private readonly cars: Item[] = [

          
        {
            id: "29492fs",
            name:"Toyota Aygo",
            description: "this is a small 4 seat car, weighing about 400kgs",
            qty: 4,

        },
        {
            id: "1692fs",
            name:"Bmw",
            description: "this is a two seater electric car, with top speed of 200km per hour",
            qty: 12,

        },
        {
            id: "2t92f5ld",
            name:"Lada",
            description: "A Russian Iconic branded car, manufactred and distributed by a french company Piere with top speed 219km/hr",
            qty: 70,

        },
        {
            id: "4592f5lofe",
            name:"Land rover",
            description: "This i a diesel powered tourbo Engine, first released 1953 weighing about 1900kgs with top speed of 50miles/hr",
            qty: 3,

        }
    ]


    findAll(): Item[]{
        return this.cars
    }

    findOne(id:string): Item{
        return this.cars.find((item) => item.id === id)
    }


}
