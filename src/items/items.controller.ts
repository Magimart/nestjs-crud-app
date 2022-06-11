import { Controller, Get, Body, Post, Res, Req, Param, Delete, Put, Query } from '@nestjs/common';
import { creactItemsDto } from './dto/create-item.dto';
// import  {Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Query as anotherQuery} from 'express-serve-static-core';
import { Item } from './schemas/Item.schema';
import { updateItemsDto } from './dto/update-item';


@Controller('items')
export class ItemsController {

      constructor(private readonly cars: ItemsService){} 
  
    // get all items: API Endpoint =>
    @Get()                 
    async fetchAllItems(@Query() query: anotherQuery ): Promise<Item[] >{ 
        return this.cars.fetchAll(query);
    }

    // add new item: API Endpoint =>
    @Post()
    async createItem(
        @Body() car: creactItemsDto): Promise <Item>{
             let createdCar = this.cars.createCarItem(car)
             console.log(createdCar)
            return createdCar;
    }

    // get by id: API Endpoint =>
    @Get(':id')
    async getItemById(@Param("id") id: string ): Promise<Item>{
          return this.cars.findItemById(id);
    }
    
    @Put(':id')
    async updateDbItem(@Body() car: updateItemsDto,
                           @Param('id') id: string): Promise<Item>{
            await this.cars.findItemById(id)            
        return this.cars.updateSavedItem(id, car) ;
    }

    // delete item
    @Delete(':id')
    async deleteItem(@Param('id') id: string ): Promise<{isDeleted: Boolean, message: string}>{
        const isItemToRemove = this.cars.deleteSavedItemById(id)
        if(isItemToRemove){
            return {isDeleted: true, message: "this item has been successfully removed"};
        }
    }   
}
