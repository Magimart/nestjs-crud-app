import { Controller, Get, Body, Post, Res, Req, Param, Delete, Put } from '@nestjs/common';
import { creactItemsDto } from './dto/create-item.dto';
import  {Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';



@Controller('items')
export class ItemsController {

      constructor(private readonly cars: ItemsService){}  // helps us to inject our service in this case car items
  
    @Get()
                    //  findAll(): string {
                    //      return "show all items"
                    //  }
    // get all items
     findAll(): Item[] {
        return this.cars.findAll();
    }


     //___lets run the above with the express option __Note this is not the Typescript way
                        // findAll(@Req() req: Request, @Res() res:Response ): Response {
                        //      console.log(req.url)
                        //     return res.send(`we have recieved your request from  ${req.url}`);
                        // }
    
    //get params
    @Get(':id')
    //   findOne(@Param() param ): string{
    //      return `Here is the requested item: ${param.id}`
    // }

    findOne(@Param('id') id ): Item{
        // return `Here is the requested item: ${param.id}`
            return this.cars.findOne(id);
    }
   

    //delete item
    @Delete(':id')
    delete(@Param('id') id ): string{
        return `This item ${id} has been deleted`
    }


     @Post()

     creact(@Body() creactItemsDto: creactItemsDto): string{
        //  return "your article has been posted"
        return `Name: ${creactItemsDto.name}  Description: ${creactItemsDto.description}`
     }


     //upadtate item
     
     @Put(':id')

     update(@Body() updateItem: creactItemsDto, @Param('id') id): string{
        return `This item ${updateItem.name} id: ${id} has been updated`
     }


     //

}
