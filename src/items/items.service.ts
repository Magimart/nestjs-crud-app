import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Item } from './schemas/Item.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from  'express-serve-static-core';


@Injectable()
export class ItemsService {
  
            constructor(
                @InjectModel(Item.name)
                private itemModel: mongoose.Model<Item>
            ){}

    async fetchAll(query: Query): Promise<Item[]>{

            const queryStringKeyword = query.keyword? {
                name: {
                    $regex: query.keyword,
                    $options: 'i'
                }
            }:{}

          const awaitAllQueries = await this.itemModel.find({...queryStringKeyword})

       return awaitAllQueries;
    }

    async createCarItem(car: Item) : Promise<Item>{
        const isCreatedCar = await this.itemModel.create(car)
          return isCreatedCar;
    }

    async findItemById (id:string): Promise<Item>{
        const foundItem = await this.itemModel.findById(id)
        if(!foundItem){ 
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Restaurant not available',
              }, HttpStatus.FORBIDDEN)

        }
        return foundItem;
    }

    async updateSavedItem (id:string, car: Item): Promise<Item>{
        const foundItem = this.itemModel.findByIdAndUpdate(id, car, {
                                new: true,
                                runValidators: true
                            })
        if(!foundItem){ 
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Restaurant not available',
              }, HttpStatus.FORBIDDEN)

        }
        return foundItem;
    }

   async deleteSavedItemById(id: string): Promise<Item>{
      return await this.itemModel.findById(id)
   }


}
